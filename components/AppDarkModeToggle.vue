<template>
  <div class="flex flex-col"></div>
</template>

<script>
export default {
  mounted() {
    this.storeToken();
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

      // Whenever the user explicitly chooses light mode
      // localStorage.theme = "light";

      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "light";

      // Whenever the user explicitly chooses to respect the OS preference
      // localStorage.removeItem("theme");
    },
  },
};
</script>
