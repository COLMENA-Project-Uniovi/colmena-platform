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
      <h2 class="text-3xl font-bold opacity-95">{{ error.name }}</h2>
      <p>
        {{ error.descriptions }}
      </p>
    </div>
    <div class="flex flex-col items-start justify-center w-full gap-2" markers>
      <div class="flex items-center gap-1 pl-4">
        <span
          class="flex items-center justify-center w-5 h-5 text-sm font-bold text-white rounded-full bg-colmenablue-600"
        >
          {{ error.markers?.length }}
        </span>
        <h2 class="text-2xl font-bold">Errores de alumnos</h2>
      </div>
      <div
        v-for="marker in error.markers"
        :key="marker.id"
        class="flex flex-col w-full gap-2 p-4 font-semibold shadow-md bg-gray-50 transition-base rounded-xl h-fit"
        :data-error-id="marker.id"
      >
        <textarea
          class="w-full p-2 text-sm bg-gray-100 border rounded resize-none focus:outline-none"
          readonly
          rows="10"
          :value="marker.source"
        ></textarea>
      </div>
    </div>
    <div class="flex flex-col items-start justify-start w-full gap-2" markers>
      <div class="flex justify-between w-full">
        <div class="flex items-center gap-1 pl-4">
          <span
            class="flex items-center justify-center w-5 h-5 text-sm font-bold text-white rounded-full bg-colmenablue-600"
          >
            {{ error.examples?.length }}
          </span>
          <h2 class="text-2xl font-bold">Ejemplos de este error</h2>
        </div>
        <nuxt-link
          class="button button-primary"
          :to="localePath(`/private-area/errors/add-example`)"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
          <span>Añadir</span>
        </nuxt-link>
      </div>
      <div
        v-for="example in error.examples"
        :key="example.id"
        class="flex flex-col w-full gap-4 p-4 font-semibold shadow-md bg-gray-50 transition-base rounded-xl h-fit"
      >
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1 font-semibold">
            <font-awesome-icon
              icon="fa-solid fa-circle-xmark"
              class="text-red-700"
            />
            <span>Incorrecto</span>
          </div>
          <div class="flex w-full p-2 text-sm bg-gray-100 border rounded-lg">
            {{ example.wrong_source_code }}
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1 font-semibold">
            <font-awesome-icon
              icon="fa-solid fa-circle-check"
              class="text-green-700"
            />
            <span>Correcto</span>
          </div>
          <div class="flex w-full p-2 text-sm bg-gray-100 border rounded-lg">
            {{ example.right_source_code }}
          </div>
        </div>
        <div class="flex w-full" v-html="example.explanation"></div>
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
      user: this.$auth.$storage.getUniversal('user'),
      errorId: this.$route.params.error,
      error: [],
    }
  },
  async fetch() {
    const data = { id: this.errorId }
    const response = await this.$axios.post(
      'academic/subjects/get-error.json',
      data
    )
    const responseJSON = await response
    this.error = responseJSON.data

    this.title = this.error.name
    this.$store.commit('setPageTitle', this.title)
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    filter(markers) {
      return markers
    },
  },
}
</script>
