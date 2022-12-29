<template>
  <div>
    <div class="flex">
      <div class="left">
        <NavbarAuth />
        <SideBar></SideBar>
      </div>
      <div class="w-full ml-[22rem] right bg-white">
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
