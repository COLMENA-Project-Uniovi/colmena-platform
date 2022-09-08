<template>
  <div class="
      nav-link
      relative
      bg-gray-200
      h-10
      w-10
      flex
      items-center
      justify-center
      cursor-pointer
      text-red-400
      hover:text-red-500
      duration-300
      ease-in-out
    " v-on:click="logout">
    <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-xl" />
    <div class="tooltip">
      Cerrar sesión
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('login');
    }
  },
};
</script>

<style scoped>
.nav-link .tooltip {
  transform: translateX(calc(100% + 40px)) scaleX(0);
}

.nav-link .in {
  transition: all 0.1s ease-in-out;
  transform: scale(0);
}

.nav-link .out {
  transition: all 0.1s ease-in-out;
  transform: scale(0);
}

.nav-link:hover .tooltip {
  transform: translateX(calc(100% + 40px)) scaleX(1);
}
</style>


