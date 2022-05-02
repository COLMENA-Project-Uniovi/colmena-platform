<template>
  <div>
    <Header title="Home" />
    <section class="section">
      <div class="container">
        <ul id="example-1">
          <li v-for="item in users" v-bind:key="item.id">
            {{ item.username }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  auth: true,
  transition: "home",
  head: {
    title: "Inicio | Colmena Project",
  },
  data: function () {
    return {
      users: 0,
    };
  },
  async created() {
    const response = await this.$axios.get("http://admin.colmenaproject.es:49160/users");
    const responseJSON = await response;
    this.users = responseJSON.data;
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
