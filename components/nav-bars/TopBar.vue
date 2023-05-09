<template>
  <div
    class="fixed top-0 left-0 flex items-center xl:w-10/12 md:w-9/12 py-5 pl-24 bg-gray-50 z-[1]"
  >
    <div class="flex items-center justify-between w-full px-10">
      <div class="flex items-center justify-between text-gray-700">
        <h2 class="text-xl font-bold">
          {{ preTitle }} |
          {{ $store.state.pageTitle }}
        </h2>
      </div>
      <div class="flex items-center justify-between gap-2 text-gray-700">
        <transition name="fade">
          <div
            v-if="$store.state.pageTitle !== 'Inicio'"
            class="flex items-center text-white bg-white shadow cursor-pointer rounded-xl transition-base hover:shadow-md"
            @click="goBack"
          >
            <div
              class="flex items-center justify-center h-10 gap-1 px-2 shadow cursor-pointer transition-base bg-gradient-to-tr from-colmenablue-600 to-colmenablue-400 rounded-xl group"
            >
              <font-awesome-icon
                icon="fa-solid fa-left"
                class="text-base transition-base group-hover:scale-110"
              />
              <span class="text-sm font-semibold tracking-wide">Volver</span>
            </div>
          </div>
        </transition>
        <LangsSidebar />
        <UserSidebar />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: [],
      preTitle: '',
    }
  },
  mounted() {
    this.project = this.$store.getters.getProject
    this.preTitle = this.$store.getters.getPreTitle
  },
  methods: {
    goBack() {
      history.back()
    },
  },
}
</script>
