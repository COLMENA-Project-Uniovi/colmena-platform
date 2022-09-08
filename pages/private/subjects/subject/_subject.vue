<template>
  <div>
    <Header title="Home" />
    <section class="section p-8">
      <div class="container w-full">
        <p>{{subject}}</p>
        <h2>{{subject.name}}</h2>
        <p>Curso: {{subject.year}}</p>
        <p>Desde el {{subject.start_date}} hasta el {{subject.end_date}}</p>
        <p>{{subject.description}}</p>
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
