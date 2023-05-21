<template>
  <div class="grid w-full grid-cols-2 gap-8">
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

    <!-- Sessions -->
    <div class="flex flex-col col-start-1 col-end-3 gap-4">
      <div
        class="relative flex items-start justify-center w-full p-4 overflow-hidden bg-white shadow-md rounded-xl"
      >
        <calendar-view
          :show-date="showDate"
          :items="events"
          :starting-day-of-week="1"
          class="cv-calendar"
          @click-item="clickDate"
        >
          <template #header="{ headerProps }">
            <calendar-view-header
              :header-props="headerProps"
              @input="setShowDate"
            />
          </template>
        </calendar-view>
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
              class="flex items-center justify-center h-10 px-2 text-white button-secondary rounded-xl"
            >
              {{ session.language_id == 1 ? 'Java' : 'Otro' }}
            </span>
            <span class=""> {{ session.name }} </span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Error types by session -->
    <ErrorByTypeFamily :subject="subject" />

    <!-- Errors by student -->
    <ErrorsByStudent v-if="user.level == 'teacher'" :subject="subject" />

    <!-- Errors by timeline -->
    <ErrorsByTimeline :subject="subject" />
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
      projectId: this.$route.params.project,
      showDate: new Date('2023-05-09'),
      events: [],
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
    const data = { id: this.id, userType: this.user.level }
    const response = await this.$axios.post(
      'academic/subjects/list_subject_by_id.json',
      data
    )
    const responseJSON = await response
    this.subject = responseJSON.data
    this.$store.commit('setPageTitle', this.subject.name)
    this.subject.sessions.forEach((session) => {
      let sessionsSchedules = session.session_schedules
      if (this.user.level === 'student') {
        // Get practice group
        const groups = this.user.groups
        const groupsId = groups.map((group) => group.id)
        sessionsSchedules = sessionsSchedules.filter((sessionSchedule) => {
          return groupsId.includes(sessionSchedule.practice_group_id)
        })
      }
      sessionsSchedules.forEach((sessionSchedule) => {
        const event = {
          startDate: sessionSchedule.date,
          title: `${session.name} - ${sessionSchedule.practice_group.name}`,
          url: `/private/sessions/session/${session.id}`,
        }
        this.events.push(event)
      })
    })

    const dataProject = { id: this.projectId }
    const responseProject = await this.$axios.post(
      'academic/projects/get.json',
      dataProject
    )
    const responseJSONProject = await responseProject
    this.project = responseJSONProject.data
    this.$store.commit('setProject', this.project)
  },
  mounted() {
    this.supervisor = this.$store.getters.getSupervisor
    this.group = this.$store.getters.getGroup
  },
  methods: {
    clickDate(calendarItem, windowEvent) {
      this.$router.push(this.localePath(calendarItem.originalItem.url))
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
    setShowDate(d) {
      this.showDate = d
    },
  },
}
</script>
