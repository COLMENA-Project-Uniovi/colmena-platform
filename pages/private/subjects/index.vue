<template>
  <div>
    <Header title="Home" />
    <section class="section">
      <div class="container w-full">
        <h2>Asignaturas</h2>
        <ul id="example-1">
          <li v-for="item in subjects" :key="item.id">
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
  transition: 'home',
  data: function () {
    return {
      subjects: 0,
    }
  },
  head: {
    title: 'Asignaturas | Colmena Project',
  },
  async created() {
    // const data = { id: this.$auth.user.id};
    const data = { id: 2 }
    const response = await this.$axios.post('academic/subjects/list.json', data)
    const responseJSON = await response
    this.subjects = responseJSON.data
  },
}
</script>
