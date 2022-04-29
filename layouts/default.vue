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
export default {
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