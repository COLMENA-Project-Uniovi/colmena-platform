<template>
  <div>
    <div v-if="!isAuthenticated">
      <Navbar />
      <nuxt />
    </div>

    <div v-else class="layout">
      {{ loggedInUser.username }}
      <div class="left">
        <NavbarAuth />
      </div>

      <div class="right">
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

<style scoped>
.layout {
  display: flex;
}

.left {
  width: 90px;
}

.right {
  width: calc(100vw - 90px);
}
</style>

<style>
body {
  background-color: #eff3f6;
}

.dark body {
  transition: all 0.3s ease-in-out;
  background-color: #303030;
}
</style>