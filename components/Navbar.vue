<template>
  <nav class="px-10 py-5 flex justify-between z-50">
    <div class=" flex flex-wrap justify-between items-center w-full">
      <a href="/" class="flex items-center">
        <img
          src="~/assets/logos/logo-horizontal.svg"
          class="mr-3 h-6 sm:h-12"
          alt="Logo"
        />
      </a>
      <div class="flex flex-row justify-between items-center">
        <!-- <ul class="flex flex-row gap-5 content-center">
          <li>
            <Link text="Inicio" type="terciary" />
          </li>
          <li>
            <Link text="About" href="/about" type="terciary" />
          </li>
          <li>
            <Link text="Services" href="/services" type="terciary" />
          </li>
          <li>
            <Link text="Contact" href="/contact" type="terciary" />
          </li>
        </ul> -->
      </div>
      <div class="flex">
        <Link text="Entrar" type="primary" href="/login" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },

  methods: {
    showAlert() {
      alert(1);
    },
  },
};
</script>

<style scoped>
nav {
  background-color: transparent;
  width: 100vw;
  height: 100px;
  transition: all 0.3s ease-in-out;
  transition-delay: 0ms;
}

.dark nav {
  background-color: tran;
}
</style>
