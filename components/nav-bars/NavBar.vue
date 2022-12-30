<template>
  <nav class="fixed z-50 flex justify-between w-full px-10 py-5 bg-transparent">
    <div class="flex flex-wrap items-center justify-between w-full ">
      <a href="/" class="flex items-center">
        <img src="~/assets/logos/logo-horizontal.svg" class="h-6 mr-3 sm:h-12" alt="Logo" />
      </a>
    </div>
    <div class="flex">
      <Langs></Langs>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>
