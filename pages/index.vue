<template>
  <section class="section">
    <div class="container">
      <!-- <h1 class="title">{{ section.data.name }}</h1> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  auth: false,
  transition: "home",
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: all 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
