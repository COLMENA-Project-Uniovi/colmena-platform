<template>
  <section class="section bg-red-600">
    <div class="container">
      <h1 class="title">Nuxt Auth</h1>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  auth: false,
});
</script>

<style>
section {
  width: calc(100% - 250px);
  margin-left: 250px;
}
</style>
