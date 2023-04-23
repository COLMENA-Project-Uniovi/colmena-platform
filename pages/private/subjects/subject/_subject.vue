<template>
  <div class="grid grid-cols-2 gap-8 px-10 py-8">
    <div
      class="relative flex flex-col w-full col-start-1 col-end-3 gap-2 py-20 overflow-hidden text-white px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl">
      <img src="~/assets/logos/logo-white.svg"
        alt="Logo"
        class="absolute right-0 h-full scale-105 translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2" />
      <h2 class="text-4xl font-bold opacity-95">
        {{ subject.name }}</h2>
    </div>
    <div class="flex flex-col col-start-1 col-end-3 gap-4">
      <h2 class="pl-5 text-2xl font-bold"> Descripción</h2>
      <p>
        {{ subject.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  auth: true,
  transition: "home",
  head() {
    return {
      title: this.title,
    }
  },
  data: function () {
    return {
      title: "",
      subject: 0,
      id: this.$route.params.subject
    };
  },
  methods: {
    abbreviate(text) {
      const palabras = text
        .replace("de", "")
        .replace("la", "")
        .replace("lo", "")
        .replace("le", "")
        .replace("del", "")
        .split(" ");
      const iniciales = palabras.map(palabra => palabra.charAt(0));
      return iniciales.join("");
    }
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
    console.log(' this.subject  :>> ',  this.subject );
    this.$store.commit("setPageTitle", this.abbreviate((this.subject.name)))
  },
};
</script>