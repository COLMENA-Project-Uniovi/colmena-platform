<template>
  <div class="flex w-full max-h-screen overflow-hidden">
    <AuthBar />
    <SideBar v-if="user.level === 'student'" />
    <MenuBar v-else />
    <div
      class="max-h-screen min-h-screen overflow-y-scroll text-gray-700 xl:w-[80%] md:w-9/12 bg-gray-50 py-10 pt-32 px-20 relative shadow"
    >
      <TopBar></TopBar>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: this.$auth.$storage.getUniversal('user'),
    }
  },
}
</script>
