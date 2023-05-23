<template>
  <div class="flex w-full max-h-screen overflow-hidden">
    <AuthBar />
    <!-- <SideBar v-if="user.level === 'student'" /> -->
    <MenuBar />
    <div
      class="max-h-screen min-h-screen overflow-y-scroll text-gray-700 2xl:w-[80%]  xl:w-[78%] bg-gray-50 py-10 pt-32 2xl:px-20 xl:px-10 relative shadow">
      <TopBar></TopBar>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: null,
    }
  },
  created() {
    this.user = this.$auth.$storage.getUniversal('user')
  },
}
</script>
