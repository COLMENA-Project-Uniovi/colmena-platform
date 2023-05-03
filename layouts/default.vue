<template>
  <div class="flex w-full">
    <AuthBar />
    <TopBar></TopBar>
    <div
      class="w-10/12 min-h-screen pt-16 pl-24 text-gray-700 md:w-9/12 bg-gray-50">
      <nuxt />
    </div>
    <SideBar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  data: () => ({
    isLogged: false,
  }),
};
</script>
