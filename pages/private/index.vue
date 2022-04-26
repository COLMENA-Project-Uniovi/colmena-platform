<template>
  <div>
    <Header title="Home" />
    <section class="section bg-red-600">
      <div class="container">
        <h1 class="title">Nuxt</h1>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Header from "~/components/Headers/Header.vue";

export default {
  auth: false,
  components: {
    Header,
  },
};
</script>

<style>
</style>
