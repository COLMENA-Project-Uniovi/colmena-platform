<template>
  <div
    class="
      nav-link
      relative
      bg-gray-200
      h-10
      w-10
      flex
      items-center
      justify-center
      cursor-pointer
      text-gray-500
      hover:text-yellow-500
      duration-300
      ease-in-out
    "
    v-on:click="changeTheme"
  >
    <font-awesome-icon
      icon="fa-solid fa-cloud-moon"
      class="text-xl"
      ref="icon_dark"
      v-if="theme == 'light'"
    />
    <font-awesome-icon
      icon="fa-solid fa-sun"
      class="text-l"
      ref="icon_light"
      v-else
    />
    <div class="tooltip">
      Cambiar a tema {{ theme == "dark" ? "claro" : "oscuro" }}
    </div>
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


