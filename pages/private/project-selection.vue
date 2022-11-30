<template>
  <div
    class="fixed h-screen w-screen bg-white-colmena z-50 top-0 left-0 flex flex-row justify-center items-center gap-2 ">
    <div v-for="(project, index) in projects" :key="index" class="
        project 
        relative 
        bg-white
        rounded-3xl
        h-1/3
        w-20
        flex
        items-center
        justify-center
        cursor-pointer
        transition-all
        duration-500
        ease-in-out
        overflow-hidden
        hover:w-80
        hover:rounded-2xl" @click="selectProject(JSON.stringify(project))">
      <div class="
        button-block-project
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        transition-all
        duration-300
        ease-in-out
        flex
        gap-2
        items-center">
        <div class="nav-link bg-white h-14 w-14 flex items-center justify-center text-gray-500 cursor-pointer">
          <font-awesome-icon icon="fa-solid fa-folder" class="text-xl icon" />
        </div>
        <p class="text-xl whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out">{{ project.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  auth: true,
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
    ...mapMutations({
      setProject: 'setProject'
    }),
    selectProject: function (value) {
      this.setProject(value);
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
}
</style>
