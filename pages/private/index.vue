<template>
  <div>
    <Header title="Home" />
    <section class="section">
      <div class="w-full p-10 flex flex-col g-5">
        <h2 class="text-3xl font-bold text-gray-700">Asignaturas</h2>
        <ul id="example-1" class="flex  mt-5 p-5 flex-wrap">
          <li
            class="subject bg-white rounded-lg w-1/3 h-40 text-xl font-semibold p-9 cursor-pointer text-black duration-300 ease hover:bg-amber-500 hover:text-white"
            v-for="item in subjects" v-bind:key="item.id" @click="$router.push(`/private/subjects/subject/${item.id}`)">
            <h2>{{ item.name }}</h2>
          </li>
        </ul>
      </div>
    </section>
    <section class="section flex p-10">
      <div class="flex flex-col g-5 w-6/12 p-5">
        <h2 class="text-3xl font-bold text-gray-700">Progreso</h2>
        <BarChart />
      </div>

      <!-- <v-calendar></v-calendar> -->

      <div class="flex flex-col g-5 w-6/12 p-5">
        <h2 class="text-3xl font-bold text-gray-700">Proximas sesiones</h2>
        <ul id="example-1" class="flex flex-col gap-5 mt-5">
          <li
            class="subject bg-white rounded-lg w-full h-40 text-xl font-semibold p-9 cursor-pointer text-black duration-300 ease hover:bg-amber-500 hover:text-white"
            v-for="item in subjects" v-bind:key="item.id" @click="$router.push(`/private/subjects/subject/${item.id}`)">
            <h2>{{ item.name }}</h2>
            <p class="font-thin">{{ item.start_date }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", "getProject"]),
  },
  auth: true,
  transition: "home",
  head: {
    title: "Inicio | Colmena Project",
  },
  data: function () {
    return {
      subjects: 0,
    };
  },
  async created() {
    // const data = { id: this.getProject };
    const data = { id: 2 };
    const response = await this.$axios.post("academic/subjects/list.json", data);
    const responseJSON = await response;
    this.subjects = responseJSON.data;
  },
};
</script>