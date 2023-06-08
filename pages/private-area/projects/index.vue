<template>
  <div class="relative grid grid-cols-2 gap-8">
    <div
      class="relative flex flex-col w-full col-start-1 col-end-3 gap-2 overflow-hidden text-white py-14 px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl"
    >
      <img
        src="~/assets/logos/logo-white.svg"
        alt="Logo"
        class="absolute right-0 h-full scale-105 translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2"
      />
      <h2 class="text-3xl font-bold opacity-95">¡{{ welcomeMessage }}!</h2>
      <p>Selecciona el projecto al que quieres acceder o crea uno nuevo.</p>
    </div>
    <div
      v-if="projects.length"
      class="flex flex-col col-start-1 col-end-3 gap-4"
    >
      <h2 class="pl-5 text-2xl font-bold">Tus projectos</h2>
      <ul class="grid w-full grid-cols-3 gap-4">
        <li v-for="project in projects" :key="project.id">
          <nuxt-link
            :to="localePath(`/private-area/projects/${project.id}`)"
            class="flex flex-col items-center justify-start h-full gap-2 p-4 text-white shadow-lg bg-gradient-to-tr from-colmenablue-600 via-colmenablue-600 to-colmenablue-400 rounded-xl transition-base hover:scale-105"
          >
            <div class="flex items-center justify-start w-full gap-3">
              <span
                class="flex items-center justify-center w-16 h-16 text-xl font-bold rounded-lg bg-colmenablue-400"
              >
                {{ $abbreviate(project.name) }}
              </span>
              <div class="flex flex-col justify-center h-full py-1">
                <span class="text-lg font-semibold">
                  {{ project.name }}
                </span>
              </div>
            </div>
            <div
              class="flex items-center justify-start w-full gap-2 border-t-[1px] border-white/30 pt-4 font-semibold text-sm"
            >
              <p>{{ project.description }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div v-if="user.level === 'teacher'" class="fixed z-50 bottom-5 right-5">
      <nuxt-link
        :to="localePath('/private-area/projects/add')"
        class="button button-primary hover:scale-105 transition-base"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
        <span>Añadir</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  auth: true,
  transition: 'home',
  data: function () {
    return {
      user: this.$auth.$storage.getUniversal('user'),
      title: 'Selecciona un projecto',
      projects: [],
      errors: [],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    welcomeMessage() {
      const hora = new Date().getHours()
      let saludo
      if (hora >= 5 && hora < 12) {
        saludo = `Buenos días ${this.user.name}`
      } else if (hora >= 12 && hora < 19) {
        saludo = `Buenas tardes ${this.user.name}`
      } else {
        saludo = `Buenas noches ${this.user.name}`
      }
      return saludo
    },
  },
  async created() {
    const data = { id: this.user.id }
    const response = await this.$axios.post('academic/projects/list.json', data)
    const responseJSON = await response
    this.projects = responseJSON.data
  },
  mounted() {
    this.$store.commit('setPageTitle', this.title)
  },
}
</script>
