<template>
  <div
    class="fixed top-0 right-0 flex flex-col items-center justify-start h-screen gap-4 px-6 py-5 bg-gray-100 xl:w-[15%] md:w-3/12 transition-base"
  >
    <div class="flex items-center justify-center w-full text-gray-700">
      <form
        class="flex items-center justify-center w-full gap-2 px-4 py-2 font-semibold bg-white shadow-md transition-base bg-gradient-to-tr rounded-xl h-fit hover:shadow-sm"
      >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input
          id="search"
          type="text"
          name="search"
          class="w-full outline-none"
          placeholder="Asignatura"
        />
      </form>
    </div>
    <CalendarSidebar />
    <hr class="w-full h-px my-2 border-0 bg-colmenablue-400 opacity-20" />
    <div
      class="flex flex-col items-center justify-center w-full gap-2 text-gray-700"
    >
      <p class="w-full text-sm font-semibold text-left">Próximas clases</p>
      <div class="flex flex-col items-center justify-center w-full gap-2">
        <nuxt-link
          v-for="index in [0, 1, 2]"
          :key="index"
          :to="localePath(`/private/subjects/subject/${index}`)"
          class="flex items-center justify-start w-full gap-2 p-2 text-sm font-semibold bg-white shadow-md transition-base rounded-xl h-fit hover:shadow-sm"
        >
          <span
            class="flex items-center justify-center w-10 h-10 text-white button-primary rounded-xl"
          >
            10
          </span>
          <span class="">Ingeniería de Requisitos</span>
        </nuxt-link>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full gap-2 text-gray-700"
    >
      <p class="w-full text-sm font-semibold text-left">Últimas clases</p>
      <div class="flex flex-col items-center justify-center w-full gap-2">
        <nuxt-link
          v-for="index in [0, 1, 2]"
          :key="index"
          :to="localePath(`/private/subjects/subject/${index}`)"
          class="flex items-center justify-start w-full gap-2 p-2 text-sm font-semibold bg-white shadow-md transition-base rounded-xl h-fit hover:shadow-sm"
        >
          <span
            class="flex items-center justify-center w-10 h-10 text-white button-primary rounded-xl"
          >
            10
          </span>
          <span class="">Ingeniería de Requisitos</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
