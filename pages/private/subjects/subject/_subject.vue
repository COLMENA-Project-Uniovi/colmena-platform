<template>
  <div class="grid grid-cols-2 gap-8 px-10 py-8">
    <div
      class="relative flex flex-col w-full col-start-1 col-end-3 gap-2 py-20 overflow-hidden text-white shadow-sm px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl"
    >
      <img
        src="~/assets/logos/logo-white.svg"
        alt="Logo"
        class="absolute right-0 h-full scale-105 translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2"
      />
      <h2 class="text-4xl font-bold opacity-95">
        {{ subject.name }}
      </h2>
    </div>
    <div
      class="relative flex flex-col w-full gap-2 p-10 bg-white shadow-sm rounded-xl"
    >
      <h2 class="text-2xl font-bold">Descripción</h2>
      <p>
        {{ subject.description }}
      </p>
    </div>

    <div
      class="relative flex flex-col items-center justify-center w-full gap-1 py-10 shadow-sm bg-gradient-to-tr from-colmenablue-600 via-colmenablue-600 to-colmenablue-400 px-14 rounded-xl"
    >
      <span class="text-3xl font-bold text-white"
        >{{ supervisor?.username }}
      </span>
      <span class="font-bold text-gray-200">Profesor</span>
    </div>

    <div
      class="relative flex items-start justify-center w-full overflow-hidden shadow-sm rounded-xl"
    >
      <v-calendar
        :attributes="attrs"
        :columns="1"
        class="!w-full !border-none"
      ></v-calendar>
    </div>

    <div
      class="flex flex-col items-center justify-start w-full gap-2 text-gray-700"
    >
      <p class="w-full pl-2 font-semibold text-left">Sesiones</p>
      <div class="flex flex-col items-center justify-center w-full gap-2">
        <nuxt-link
          v-for="session in subject.sessions"
          :key="session.id"
          :to="localePath(`/private/sessions/session/${session.id}`)"
          class="flex items-center justify-start w-full gap-2 p-2 text-sm font-semibold bg-white shadow-md transition-base rounded-xl h-fit hover:shadow-sm"
        >
          <span
            class="flex items-center justify-center h-10 px-2 text-white button-primary rounded-xl"
          >
            {{ getSessionDate(session) }}
          </span>
          <span
            class="flex items-center justify-center h-10 px-2 text-white button-secondary rounded-xl"
          >
            {{ session.language_id == 1 ? 'Java' : 'Otro' }}
          </span>
          <span class=""> {{ session.name }} </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: true,
  transition: 'home',
  data: function () {
    return {
      title: '',
      user: this.$auth.$storage.getUniversal('user'),
      subject: 0,
      group: 0,
      supervisor: {
        username: '',
      },
      id: this.$route.params.subject,
      attrs: [
        {
          key: 'today',
          highlight: {
            class: 'bg-amber-500',
            contentClass: 'text-white',
          },
          dates: new Date(),
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  async created() {
    const data = { id: this.id }
    const response = await this.$axios.post(
      'academic/subjects/list_subject_by_id.json',
      data
    )
    const responseJSON = await response
    this.subject = responseJSON.data
    this.$store.commit('setSubject', JSON.stringify(this.subject))
    this.$store.commit('setPageTitle', this.abbreviate(this.subject.name))

    // Get practice group
    const groups = this.user.groups
    const groupsId = groups.map((group) => group.id)

    this.subject.sessions.forEach((session) => {
      session.session_schedules.forEach((sessionSchedule) => {
        if (groupsId.includes(sessionSchedule.practice_group_id)) {
          this.$store.commit('setGroup', sessionSchedule.practice_group_id)
          console.log(sessionSchedule)
          sessionSchedule.practice_group.supervisor.username =
            this.getSupervisor(
              sessionSchedule.practice_group.supervisor.username
            )
          this.$store.commit(
            'setSupervisor',
            JSON.stringify(sessionSchedule.practice_group.supervisor)
          )
          const event = {
            highlight: {
              color: 'purple',
              fillMode: 'light',
            },
            dates: Date.parse(sessionSchedule.date),
          }
          this.attrs.push(event)
        }
      })
    })
  },
  mounted() {
    this.supervisor = this.$store.getters.getSupervisor
    this.group = this.$store.getters.getGroup
  },
  methods: {
    abbreviate(text) {
      if (text.length > 3) {
        const palabras = text
          .replace('de', '')
          .replace('la', '')
          .replace('lo', '')
          .replace('le', '')
          .replace('del', '')
          .replace('a', '')
          .split(' ')
        if (palabras.length === 1) {
          const palabra = palabras[0]
          return (
            palabra.charAt(0).toUpperCase() +
            palabra.charAt(1).toUpperCase() +
            palabra.charAt(2).toUpperCase()
          )
        } else {
          const iniciales = palabras.map((palabra) =>
            palabra.charAt(0).toUpperCase()
          )
          return iniciales.join('')
        }
      } else {
        return text.toUpperCase()
      }
    },
    getSupervisor(name) {
      let palabras = name.split('.')
      palabras = palabras
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ')
      return palabras
    },
    getSessionDate(session) {
      const groups = this.user.groups
      const groupsId = groups.map((group) => group.id)
      const sessionSchedule = session.session_schedules.find((element) =>
        groupsId.includes(element.practice_group_id)
      )
      const date = new Date(Date.parse(sessionSchedule.date))
      const startHour = new Date(Date.parse(sessionSchedule.start_hour))
      const endHour = new Date(Date.parse(sessionSchedule.end_hour))
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${startHour.getHours()}:${startHour.getMinutes()}-${endHour.getHours()}:${endHour.getMinutes()}`
    },
  },
}
</script>
