<template>
  <div>
    <div class="flex">
      <div class="left">
        <AuthBar />
      </div>
      <div class="w-full ml-24 text-gray-700 bg-gray-50">
        <TopBar></TopBar>
        <div class="container">
          <nuxt />
        </div>
      </div>
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
