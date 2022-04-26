<template>
  <nav
    class="bg-gray-100 p-10 h-full flex flex-col flex-wrap items-center gap-20"
  >
    <a href="/" class="flex items-center h-20">
      <img src="~/assets/logos/logo-horizontal.svg" alt="Logo" />
    </a>
    <div class="flex flex-col justify-between items-start w-full gap-4">
      <Link text="Inicio" href="/private" type="terciary" />
      <Link text="About" href="/about" type="terciary" />
      <Link text="Services" href="/services" type="terciary" />
      <Link text="Contact" href="/contact" type="terciary" />
    </div>
  </nav>
</template>

<script>
import Button from "../Buttons/Button.vue";
import Link from "../Links/Link.vue";

export default {
  components: {
    Button,
    Link,
  },
};
</script>

<style scoped>
nav {
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>