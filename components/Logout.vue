<template>
  <div
    class="relative flex items-center justify-center w-12 h-12 transition-all duration-500 ease-in-out bg-gray-100 cursor-pointer text-slate-500 hover:text-slate-700 rounded-3xl hover:bg-gray-50 hover:drop-shadow hover:rounded-xl group drop-shadow-xl "
    v-on:click="logout">
    <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-xl" />
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


