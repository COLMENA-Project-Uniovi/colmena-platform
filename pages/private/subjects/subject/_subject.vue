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
      <h2 class="pl-5 text-2xl font-bold">Tus
        asignaturas</h2>
      <ul class="grid grid-cols-2 gap-4">
        <li v-for="subject in subjects"
          :key="subject.id">
          <nuxt-link
            :to="localePath(`/private/subjects/subject/${subject.id}`)"
            class="flex flex-col items-center justify-center gap-2 p-4 text-white shadow-lg bg-gradient-to-tr from-colmenablue-600 via-colmenablue-600 to-colmenablue-400 rounded-xl transition-base hover:scale-105">
            <div
              class="flex items-end justify-start w-full gap-3">
              <span
                class="flex items-center justify-center w-16 h-16 text-xl font-bold rounded-lg bg-colmenablue-400">
                {{ abbreviate(subject.name) }}
              </span>
              <div
                class="flex flex-col justify-between h-full py-1">
                <span class="text-gray-200">
                  Semestre {{ subject.semester }}
                </span>
                <span
                  class="text-lg font-semibold ">
                  {{ subject.name }}
                </span>
              </div>
            </div>
            <div
              class="flex items-baseline justify-end w-full gap-1">
              <span class="text-sm">
                por
              </span>
              <span class="font-semibold">Carlos
                Medina</span>
            </div>
            <div
              class="flex items-center justify-center w-full gap-2 border-t-[1px] border-white/30 pt-4 font-semibold text-sm">
              <span>
                Sesiones
              </span>
              <div class="relative w-full">
                <div
                  class="absolute left-0 w-full h-3 -translate-y-1/2 bg-white top-50 rounded-xl opacity-50 z-[1]">
                </div>
                <div
                  class="absolute left-0 w-[60%] h-3 -translate-y-1/2 bg-white top-50 rounded-tl-xl rounded-bl-xl z-[2]">
                </div>
              </div>
              <span>
                60%
              </span>
            </div>
          </nuxt-link>
        </li>
      </ul>
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
  },
  mounted (){
    this.$store.commit("setPageTitle", this.abbreviate((this.subject.name)))
  }
};
</script>