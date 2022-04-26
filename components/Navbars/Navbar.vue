<template>
  <nav class="bg-white px-10 py-5 dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center">
      <a href="/" class="flex items-center">
        <img
          src="~/assets/logos/logo-horizontal.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
      </a>
      <div class="flex flex-row justify-between items-center">
        <ul class="flex flex-row gap-5 content-center">
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
        </ul>
      </div>

      <div class="flex">
        <Link text="Iniciar sesión" type="primary" href="/login" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../Buttons/Button.vue";
import Link from "../Links/Link.vue";

export default {
  components: {
    Button,
    Link,
  },
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