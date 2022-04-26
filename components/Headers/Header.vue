<template>
  <header class="bg-gray-50 flex items-center">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
  },
};
</script>

<style>
header {
  height: 120px;
}
</style>
