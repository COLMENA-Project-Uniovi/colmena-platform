<template>
  <div
    class="relative flex items-center justify-center w-12 h-12 transition-all duration-500 ease-in-out bg-gray-100 cursor-pointer text-slate-500 hover:text-slate-700 rounded-3xl hover:bg-gray-50 hover:drop-shadow hover:rounded-xl group drop-shadow-xl"
    v-on:click="changeTheme">
    <font-awesome-icon icon="fa-solid fa-cloud-moon" class="text-xl" ref="icon_dark" v-if="theme == 'light'" />
    <font-awesome-icon icon="fa-solid fa-sun" class="text-l" ref="icon_light" v-else />
  </div>
</template>

<script>
export default {
  mounted() {
    this.storeToken();
  },
  data: function () {
    return {
      theme: 0,
    };
  },
  methods: {
    storeToken() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.theme = "light";
      this.theme = localStorage.theme;
    },
    changeTheme() {
      document.documentElement.classList.remove(localStorage.theme);
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
      this.theme = localStorage.theme;
      document.documentElement.classList.add(localStorage.theme);
    },
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


