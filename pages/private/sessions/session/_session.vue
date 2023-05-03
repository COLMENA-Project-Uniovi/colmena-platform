<template>
  <div class="grid grid-cols-2 gap-8 px-10 py-8">
    <div
      class="relative flex flex-col w-full col-start-1 col-end-3 gap-2 py-20 overflow-hidden text-white shadow-sm px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl"
    >
      <img
        src="~/assets/logos/logo-white.svg"
        alt="Logo"
        class="absolute right-0 h-full scale-105 translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2"
      />
      <h2 class="text-4xl font-bold opacity-95">
        {{ session.name }}
      </h2>
    </div>
    <div
      class="relative flex flex-col w-full gap-2 py-10 bg-white shadow-sm px-14 rounded-xl"
    >
      <h2 class="text-2xl font-bold">Objetivos de la sesión</h2>
      <p>
        {{ session.objective }}
      </p>
    </div>

    <div
      class="relative flex flex-col items-center justify-center w-full gap-1 py-10 shadow-sm bg-gradient-to-tr from-colmenablue-600 via-colmenablue-600 to-colmenablue-400 px-14 rounded-xl"
    >
      <span class="text-3xl font-bold text-white">Carlos Medina Fernandez</span>
      <span class="font-bold text-gray-200">Profesor</span>
    </div>

    <div class="flex flex-col items-center justify-start w-full gap-2 text-gray-700">
      <p class="w-full pl-2 font-semibold text-left">Compilaciones</p>
      <div class="flex flex-col items-center justify-center w-full gap-2">
        <div
          v-for="compilation in session?.compilations"
          class="flex items-center justify-start w-full gap-2 p-2 text-sm font-semibold bg-white shadow-md transition-base rounded-xl h-fit hover:shadow-sm"
        >
          <div
            v-if="compilation.type === 'ERROR'"
            class="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded"
          >
            <font-awesome-icon icon="fa-solid fa-bug" class="text-xl" />
          </div>
          <div
            v-if="compilation.type === 'OK'"
            class="flex items-center justify-center w-10 h-10 text-white rounded bg-emerald-500"
          >
            <font-awesome-icon icon="fa-solid fa-thumbs-up" class="text-xl" />
          </div>
          <div
            v-if="compilation.type === 'ERROR'"
            title="Ver errores"
            class="flex items-center justify-center w-10 h-10 text-white transition bg-gray-400 rounded cursor-pointer hover:bg-gray-500"
          >
            <span class="font-bold"> {{ compilation.num_markers }} </span>
          </div>
          <div class="flex pl-2">
            {{ compilation.timestamp }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-start w-full gap-2 text-gray-700">
      <p class="w-full pl-2 font-semibold text-left">Errores</p>
      <div class="flex flex-col items-center justify-center w-full gap-2">
        <div
          v-for="marker in session?.markers"
          class="flex flex-col w-full gap-2 p-2 text-sm font-semibold bg-white shadow-md transition-base rounded-xl h-fit hover:shadow-sm"
        >
          <div class="flex">
            <span> Error: {{ marker.error_id }} </span>
          </div>
          <div class="flex">
            "error_id": 45, "line_number": 11, "class_path":
            "C:/Users/borja/Documents/BORJA/TFG/runtime-EclipseApplication/test/src/test/TEST.java",
            "message": "Syntax error on token \".\", delete this token",
          </div>
          <textarea
            class="w-full p-2 border rounded resize-none"
            rows="10"
            :value="marker.source"
          ></textarea>
        </div>
      </div>
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
    };
  },
  data: function () {
    return {
      title: "",
      user: this.$auth.$storage.getUniversal("user"),
      session: 0,
      sessions_scheduled: [],
      id: this.$route.params.session,
      selected_compilation: 0,
    };
  },
  methods: {
    abbreviate(text) {
      if (text.length > 3) {
        const palabras = text
          .replace("de", "")
          .replace("la", "")
          .replace("lo", "")
          .replace("le", "")
          .replace("del", "")
          .replace("a", "")
          .split(" ");
        if (palabras.length == 1) {
          let palabra = palabras[0];
          return (
            palabra.charAt(0).toUpperCase() +
            palabra.charAt(1).toUpperCase() +
            palabra.charAt(2).toUpperCase()
          );
        } else {
          const iniciales = palabras.map((palabra) => palabra.charAt(0).toUpperCase());
          return iniciales.join("");
        }
      } else {
        return text.toUpperCase();
      }
    },
    getSessionDate(session) {
      const groups = this.user.groups;
      const groups_id = groups.map((group) => group.id);
      const session_schedule = session.session_schedules.find((element) =>
        groups_id.includes(element.practice_group_id)
      );
      let date = new Date(Date.parse(session_schedule.date));
      let start_hour = new Date(Date.parse(session_schedule.start_hour));
      let end_hour = new Date(Date.parse(session_schedule.end_hour));
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${start_hour.getHours()}:${start_hour.getMinutes()}-${end_hour.getHours()}:${end_hour.getMinutes()}`;
    },
  },
  async created() {
    const data = { id: this.id };
    const response = await this.$axios.post("academic/subjects/get_session.json", data);
    const responseJSON = await response;
    this.session = responseJSON.data;
    console.log("this.session :>> ", this.session);
    this.$store.commit("setPageTitle", this.session.name);
    this.$store.commit(
      "setPagePreTitle",
      this.abbreviate(this.$store.getters.getSubject.name)
    );

    // Get practice group
    const groups = this.user.groups;
    const groups_id = groups.map((group) => group.id);

    this.session.session_schedules.forEach((session_schedule) => {
      if (groups_id.includes(session_schedule.practice_group_id)) {
        this.sessions_scheduled.push(session_schedule);
      }
    });
  },
};
</script>
