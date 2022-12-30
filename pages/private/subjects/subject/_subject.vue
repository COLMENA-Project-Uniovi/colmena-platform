<template>
  <div>
    <!-- <Header title="Home" /> -->
    <!-- <section class="p-8 section">
      <h2>{{ subject.name }}</h2>
      <p>Curso: {{ subject.year }}</p>
      <p>Desde el {{ subject.start_date }} hasta el {{ subject.end_date }}</p>
      <p>{{ subject.description }}</p>
    </section> -->


    <p>{{ subject.academical_year_id }}</p>

    <div class="px-6 py-4 rounded-lg w-100">
      <div class="text-2xl font-bold">
        <p>{{ subject.name }}</p>
      </div>
    </div>

    <div class="px-6 py-4 m-5 rounded-lg shadow-sm w-100 bg-neutral-50">
      <p class="text-2xl font-bold">Descripción:</p>
      <p>{{ subject.description }}</p>
    </div>
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
    title: "asignatura | Colmena Project",
  },
  data: function () {
    return {
      subject: 0,
      id: this.$route.params.subject
    };
  },
  async created() {
    // const data = { id: this.$auth.user.id};
    const data = { id: this.id };
    const response = await this.$axios.post(
      "academic/subjects/list_subject_by_id.json",
      data
    );
    const responseJSON = await response;
    this.subject = responseJSON.data;
  },
};
</script>