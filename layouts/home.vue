<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
export default {
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

.dark body {
  transition: all 0.3s ease-in-out;
  background-color: #303030;
}
</style>
