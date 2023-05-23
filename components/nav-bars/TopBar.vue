<template>
  <div class="fixed top-0 right-0 flex items-center 2xl:w-[80%] xl:w-[78%] bg-gray-50 z-[1] shadow">
    <div class="flex items-center justify-between w-full 2xl:px-20 xl:px-10 py-5">
      <div class="flex items-center justify-between text-gray-700">
        <h2 class="text-xl font-bold">
          {{
            $store.getters.getPageTitle == null
            ? 'Inicio'
            : $store.getters.getPageTitle
          }}
        </h2>
      </div>
      <div class="flex items-center justify-between gap-2 text-gray-700">
        <transition name="fade">
          <div v-if="$store.state.pageTitle !== 'Inicio'"
            class="flex items-center text-white bg-white shadow cursor-pointer rounded-xl transition-base hover:shadow-md"
            @click="goBack">
            <div
              class="flex items-center justify-center h-10 gap-1 px-2 shadow cursor-pointer transition-base bg-gradient-to-tr from-colmenablue-600 to-colmenablue-400 rounded-xl group">
              <font-awesome-icon icon="fa-solid fa-left" class="text-base transition-base group-hover:scale-110" />
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
  methods: {
    goBack() {
      history.back()
    },
  },
}
</script>
