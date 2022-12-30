<template>
  <div>
    <div class="flex">
      <div class="left">
        <AuthBar />
        <!-- <SideBar></SideBar> -->
      </div>
      <div class="w-full ml-24 bg-gray-50 right">
        <TopBar></TopBar>
        <nuxt />
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
