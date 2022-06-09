<template>
  <div>
    <Header title="Home" />
    <section class="section">
      <div class="container w-full">
        <h2>Asignaturas</h2>
        <ul id="example-1">
          <li v-for="item in subjects" v-bind:key="item.id">
            {{ item.name }}
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
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  auth: false,
  transition: "home",
  head: {
    title: "Asignaturas | Colmena Project",
  },
  data: function () {
    return {
      subjects: 0,
    };
  },
  async created() {
    // const data = { id: this.$auth.user.id};
    const data = { id: 2 };
    const response = await this.$axios.post(
      "academic/subjects/list.json",
      data
    );
    const responseJSON = await response;
    this.subjects = responseJSON.data;
  },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: all 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}

ul{

}
</style>
