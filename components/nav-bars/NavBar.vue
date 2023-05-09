<template>
  <nav class="fixed z-50 flex justify-between w-full px-10 py-5 bg-transparent">
    <div class="flex flex-wrap items-center justify-between">
      <a href="/" class="flex items-center">
        <img
          src="~/assets/logos/logo-horizontal.svg"
          class="h-6 mr-3 sm:h-12"
          alt="Logo"
        />
      </a>
    </div>
    <div class="flex gap-2">
      <nuxt-link class="button button-primary" :to="localePath('/login')">{{
        $t('login')
      }}</nuxt-link>
      <Langs></Langs>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
}
</script>
