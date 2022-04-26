<template>
  <div class="layout">
    <div class="left">
      <NavbarAuth v-if="isLogged" />
      <Navbar v-else />
    </div>

    <div class="right">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbars/Navbar";
import NavbarAuth from "~/components/Navbars/NavbarAuth";
import Header from "~/components/Headers/Header";

export default {
  components: {
    Navbar,
    NavbarAuth,
    Header,
  },

  data: () => ({
    isLogged: true,
  }),
};
</script>

<style scoped>
.layout {
  display: flex;
}

.left {
  width: 250px;
}

.right {
  width: calc(100% - 250px);
}
</style>