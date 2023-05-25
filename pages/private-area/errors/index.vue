<template>
  <div class="relative grid grid-cols-2 gap-8">
    <div
      class="relative flex flex-col w-full col-start-1 col-end-3 gap-2 overflow-hidden text-white py-14 px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl">
      <img src="~/assets/logos/logo-white.svg" alt="Logo"
        class="absolute right-0 h-full scale-105 translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2" />
      <h2 class="text-3xl font-bold opacity-95">¡{{ welcomeMessage }}!</h2>
      <p>Desde aquí podrás ver toda la librería de errores recopilados.</p>
    </div>
    <h2 class="page-subtitle">Las familias de errores</h2>
    <div v-if="families !== undefined" class="flex flex-col col-start-1 col-end-3 gap-4">
      <ul class="grid w-full grid-cols-3 gap-4">
        <li v-for="(family, index) in Object.values(families)" :key="family.id">
          {{ Object.keys(families).length * 1 / 3 }}
          <nuxt-link v-if="index <= (Object.keys(families).length * 1 / 3)"
            :to="localePath(`/private-area/familys/${family.id}`)"
            class="flex flex-col items-center justify-center gap-2 p-4 text-white shadow-lg bg-gradient-to-tr from-colmenablue-600 via-colmenablue-600 to-colmenablue-400 rounded-xl transition-base hover:scale-105">
            <p>{{ family.name }}</p>
            <p>{{ family.description }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="errors !== undefined" class="flex flex-col col-start-1 col-end-3 gap-4">
      <h2 class="pl-5 text-2xl font-bold">Los errores</h2>
      <ul class="grid w-full grid-cols-3 gap-4">
        <li v-for="error in errors" :key="error.id">
          <nuxt-link :to="localePath(`/private-area/errors/${error.id}`)"
            class="flex flex-col items-center justify-center gap-2 p-4 text-white shadow-lg bg-gradient-to-tr from-colmenablue-600 via-colmenablue-600 to-colmenablue-400 rounded-xl transition-base hover:scale-105">
            <p>{{ error.name }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="user.level === 'teacher'" class="fixed bottom-5 right-5">
      <nuxt-link :to="localePath('/private-area/projects/add')"
        class="button button-primary hover:scale-105 transition-base">
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
      title: 'Librería de errores',
      errors: [],
      families: [],
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
    const response = await this.$axios.get('academic/subjects/get-errors.json')
    const responseJSON = await response
    console.log('responseJSON.data :>> ', responseJSON.data);
    this.errors = responseJSON.data.errors
    this.families = responseJSON.data.families
  },
  mounted() {
    this.$store.commit('setPageTitle', this.title)
  },
}
</script>
