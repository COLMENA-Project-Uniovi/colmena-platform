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


