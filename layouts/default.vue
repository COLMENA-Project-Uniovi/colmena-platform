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

<style>
body {
  background-color: white;
}

.dark body {
  transition: all 0.3s ease-in-out;
  background-color: #303030;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,800;0,900;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

html,
body {
  font-family: "Roboto", sans-serif;
}

.bg-white-colmena {
  background-color: #eff3f6;

}
</style>
