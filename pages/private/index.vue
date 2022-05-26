<template>
  <div>
    <Header title="Home" />
    <section class="section">
      <div class="container">
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
export default {
  auth: false,
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
    // const response = await this.$axios.get("subjects/");
    // const responseJSON = await response;
    // this.subjects = responseJSON.data;
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
</style>
