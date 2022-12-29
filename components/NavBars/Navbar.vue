<template>
  <nav class="fixed z-50 flex justify-between w-full px-10 py-5 bg-transparent">
    <div class="flex flex-wrap items-center justify-between w-full ">
      <a href="/" class="flex items-center">
        <img
          src="~/assets/logos/logo-horizontal.svg"
          class="h-6 mr-3 sm:h-12"
          alt="Logo"
        />
      </a>
      <div class="flex flex-row items-center justify-between">
        <!-- <ul class="flex flex-row content-center gap-5">
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
        <!-- <Link text="Entrar" type="primary" href="/login" /> -->
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
