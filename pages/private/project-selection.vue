<template>
  <div
    class="fixed top-0 left-0 z-50 flex flex-row items-center justify-center w-screen h-screen gap-2 bg-white-colmena ">
    <div v-for="(project, index) in projects"
      :key="index"
      class="relative flex items-center justify-center w-20 overflow-hidden transition-all duration-500 ease-in-out bg-gray-200 cursor-pointer project rounded-3xl h-1/3 hover:w-80 hover:rounded-2xl"
      @click="selectProject(JSON.stringify(project))">
      <div
        class="absolute flex items-center gap-2 transition-all duration-300 ease-in-out -translate-x-1/2 button-block-project bottom-4 left-1/2">
        <div
          class="flex items-center justify-center text-gray-500 bg-white rounded-full cursor-pointer nav-link h-14 w-14">
          <font-awesome-icon
            icon="fa-solid fa-folder"
            class="text-xl icon" />
        </div>
        <p
          class="text-xl opacity-0 whitespace-nowrap transition-base">
          {{ project.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: true,
  layout: "home",
  transition: "home",
  head: {
    title: "Elige un proyecto | Colmena Project",
  },
  data: function () {
    return {
      projects: 0,
      projectSelected: null,
    };
  },
  async created() {
    // const data = { id: this.$auth.user.id};
    const data = { id: 2 };
    const response = await this.$axios.post("academic/projects/list.json", data);
    const responseJSON = await response;
    let aux = responseJSON.data;
    this.projects = aux.concat(responseJSON.data);
  },
  methods: {
    selectProject: function (value) {
      this.$store.commit("setProject", JSON.parse(value))
      this.$router.push('/private');
    }
  }
};
</script>

<style scoped>
.project .button-block-project {
  transform: translateX(0) !important;
  left: 1rem;
  transition-delay: 300ms;
}

.project:hover .button-block-project {
  transform: translateX(0) !important;
  left: 1rem;
  transition-delay: 300ms;
}

.project .button-block-project .nav-link {
  min-width: 3.5rem;
}

.project:hover .button-block-project p {
  opacity: 1;
}</style>
