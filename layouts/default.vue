<template>
  <div class="flex w-full">
    <AuthBar />
    <TopBar></TopBar>
    <div class="w-full mt-16 ml-24 text-gray-700 bg-gray-50">
      <nuxt />
    </div>
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
