<template>
  <div class="grid grid-cols-2 gap-8">
    <!-- Header -->
    <div
      class="relative flex flex-col w-full col-start-1 col-end-3 gap-2 py-20 overflow-hidden text-white shadow-sm px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl">
      <img src="~/assets/logos/logo-white.svg" alt="Logo"
        class="absolute right-0 h-full scale-105 translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2" />
      <h2 class="page-title">
        {{ session.name }}
      </h2>
      <p>{{ session.objective }}</p>
    </div>

    <h2 class="page-subitle">Métricas de errores</h2>

    <!-- Charts -->
    <!-- Error by type -->
    <ErrorByType :errors="session.errors" :markers="markers" />

    <!-- Error by Family -->
    <ErrorByFamily :families="session.family_errors" :markers="markers" />

    <!-- Errors by student -->
    <ErrorsByStudent :students="session.students" :markers="markers" />

    <!-- Errors by timeline -->
    <ErrorsBySessionsScheduled :schedules="session.session_schedules" :errors="session.errors"
      :markers="filter(markers)" />

    <h2 class="page-subitle">Compilaciones y errores de esta sesión</h2>

    <!-- Filters -->
    <div class="relative flex w-full col-start-1 col-end-3 gap-4">
      <div class="flex flex-col w-1/3 gap-2">
        <p class="px-2 font-semibold">Mostrar grupo:</p>
        <select v-model="filters.group"
          class="bg-white shadow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type">
          <option :value="null" selected>Todos</option>
          <option v-for="(value, key) in practice_groups" :key="key" :value="key">
            {{ value.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col w-1/3 gap-2">
        <p class="px-2 font-semibold">Mostrar usuario:</p>
        <select v-model="filters.user"
          class="bg-white shadow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type">
          <option :value="null" selected>Todos</option>
          <option v-for="student in users" :key="student.id" :value="student.id">
            {{ student.name }} {{ student.surname }} - {{ student.username }}
          </option>
        </select>
      </div>
    </div>

    <!-- Markers and compilations -->
    <div class="flex flex-col items-center justify-start w-full gap-2 text-gray-700">
      <p class="w-full pl-2 font-semibold text-left">Compilaciones</p>
      <div class="flex flex-col items-center justify-center w-full gap-2">
        <div v-for="compilation in session?.compilations" :key="compilation.id"
          class="flex items-center justify-start w-full gap-2 p-2 text-sm font-semibold bg-white shadow-md transition-base rounded-xl h-fit hover:shadow-sm">
          <div v-if="compilation.type === 'ERROR'"
            class="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-lg">
            <font-awesome-icon icon="fa-solid fa-bug" class="text-xl" />
          </div>
          <div v-if="compilation.type === 'OK'"
            class="flex items-center justify-center w-10 h-10 text-white rounded-lg bg-emerald-500">
            <font-awesome-icon icon="fa-solid fa-thumbs-up" class="text-xl" />
          </div>
          <div v-if="compilation.type === 'ERROR'" title="Ver errores"
            class="flex items-center justify-center w-10 h-10 text-white transition bg-gray-400 rounded-lg cursor-pointer hover:bg-gray-500">
            <span class="font-bold"> {{ compilation.num_markers }} </span>
          </div>
          <div class="flex pl-2">
            {{ compilation.timestamp }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-start w-full gap-2 text-gray-700">
      <div class="flex items-center justify-between w-full px-2">
        <p class="w-full font-semibold text-left">Errores</p>
        <div class="flex items-center justify-center gap-2">
          <FilterMarkers :markers="markers" :add-filter="addFilter" />
          <OrderMarkers :markers="markers" :add-order="addOrder" />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full gap-2" markers>
        <div v-for="marker in orderMarkers(filter(markers))" :key="marker.id"
          class="flex flex-col w-full gap-2 font-semibold shadow-md bg-gray-50 transition-base rounded-xl h-fit"
          :data-error-id="marker.id">
          <div class="relative flex flex-col items-start gap-2 p-3 bg-white cursor-pointer rounded-xl"
            @click="expandError(marker.id)">
            <div class="flex">
              <span class="text-base font-bold"> {{ marker.error?.name }} </span>
            </div>
            <div class="flex items-center justify-start gap-1">
              <div
                class="relative flex items-center justify-center gap-1 p-1 text-white rounded-lg group bg-colmenablue-600 opacity-90">
                <font-awesome-icon icon="fa-regular fa-circle-info" class="text-sm opacity-60" />
                <span class="text-xs">
                  {{ marker.error?.family?.name }}
                </span>
                <div
                  class="absolute left-0 z-10 hidden p-4 text-sm font-normal leading-4 text-black -translate-y-full bg-white shadow-xl -top-4 w-96 rounded-xl group-hover:flex">
                  {{ marker.error?.family?.description }}
                </div>
              </div>
              <div
                class="flex items-center gap-1 p-1 text-xs font-semibold text-white bg-green-600 rounded-lg opacity-90">
                <font-awesome-icon icon="fa-regular fa-calendar" class="opacity-60" />
                <span class=""> {{
                  marker.timestamp.split('T')[0]
                }} </span>
              </div>
              <div
                class="flex items-center gap-1 p-1 text-xs font-semibold text-white bg-orange-600 rounded-lg opacity-90 ">
                <font-awesome-icon icon="fa-regular fa-clock" class="opacity-60" />
                <span class=""> {{
                  marker.timestamp.split('T')[1] }}
                </span>
              </div>
              <div
                class="flex items-center gap-1 p-1 text-xs font-semibold text-white rounded-lg bg-violet-600 opacity-90 ">
                <font-awesome-icon icon="fa-regular fa-user" class="opacity-60" />
                <span class=""> {{ marker.user.name }} {{ marker.user.surname }}
                </span>
              </div>
            </div>
            <font-awesome-icon icon="fa-solid fa-caret-down"
              class="absolute -translate-y-1/2 top-1/2 right-4 transition-base" marker-arrow />
          </div>
          <div class="hidden p-4 pt-0" marker-info>
            <div class="flex flex-col gap-2">
              <div v-if="(user.level = 'teacher')" class="flex flex-col rounded-lg shadow-sm">
                <span class="w-full p-2 text-xl font-bold bg-white rounded-lg border-[1px] border-gray-100">Alumno</span>
                <span class="p-2 pl-3 text-sm">
                  {{ marker.user.name }} {{ marker.user.surname }}
                  {{ marker.user.surname2 }} -
                  {{ marker.user.username }}
                </span>
              </div>
              <div class="flex flex-col rounded-lg shadow-sm">
                <span
                  class="w-full p-2 text-xl font-bold bg-white rounded-lg border-[1px] border-gray-100">Descripción</span>
                <span class="p-2 pl-3 text-sm">
                  {{ marker.error.message }}
                </span>
              </div>
              <div class="flex flex-col rounded-lg shadow-sm">
                <span class="w-full p-2 text-xl font-bold bg-white rounded-lg border-[1px] border-gray-100">Código</span>
                <span class="p-2 pl-3 text-sm">//
                  {{ `${marker.class_name}.java:${marker.line_number}` }}
                </span>
                <div class="p-2 pt-0">
                  <textarea class="w-full p-2 text-sm bg-gray-100 border rounded resize-none focus:outline-none" readonly
                    rows="10" :value="marker.source"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: true,
  transition: "home",
  data: function () {
    return {
      title: "",
      user: this.$auth.$storage.getUniversal("user"),
      session: {},
      supervisor: {
        username: "",
      },
      filters: {
        family: null,
        type: null,
        group: null,
        user: null,
      },
      order: {
        by: null,
        asc: false,
      },
      markers: [],
      sessions_scheduled: [],
      practice_groups: {},
      users: {},
      id: this.$route.params.session,
      projectId: this.$route.params.project,
      subjectId: this.$route.params.subject,
      selected_compilation: 0,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  async created() {
    const data = { id: this.id };
    const response = await this.$axios.post("academic/subjects/get_session.json", data);
    const responseJSON = await response;
    this.session = responseJSON.data;
    this.title = this.session.name;
    this.$store.commit("setPageTitle", this.session.name);
    this.session.session_schedules.forEach((sessionSchedule) => {
      this.practice_groups[sessionSchedule.practice_group.id] =
        sessionSchedule.practice_group;
      sessionSchedule.practice_group.users.forEach((user) => {
        this.users[user.id] = user;
      });
    });
    this.markers = this.session.markers;
    const dataProject = { id: this.projectId };
    const responseProject = await this.$axios.post(
      "academic/projects/get.json",
      dataProject
    );
    const responseJSONProject = await responseProject;
    const project = responseJSONProject.data;
    this.$store.commit("setProject", project);
  },
  mounted() {
    this.supervisor = this.$store.getters.getSupervisor;
    this.group = this.$store.getters.getGroup;
  },
  methods: {
    expandError(id) {
      const markerInfo = document.querySelector(`[data-error-id="${id}"] [marker-info]`);
      markerInfo.classList.toggle("hidden");
      // rotar marker-arrow 180 grados
      const markerArrow = document.querySelector(
        `[data-error-id="${id}"] [marker-arrow]`
      );
      markerArrow.classList.toggle("rotate-180");
    },
    addFilter(family, type) {
      this.filters.family = family;
      this.filters.type = type;
    },
    filter(markers) {
      let marcadores = markers.filter((marker) => {
        if (this.filters.family !== null) {
          return parseInt(marker.error.family_id) === parseInt(this.filters.family);
        } else {
          return true;
        }
      });
      marcadores = marcadores.filter((marker) => {
        if (this.filters.type !== null) {
          return parseInt(marker.error.error_id) === parseInt(this.filters.type);
        } else {
          return true;
        }
      });
      marcadores = marcadores.filter((marker) => {
        if (this.filters.group !== null) {
          const group = this.practice_groups[this.filters.group];
          const user = group.users.some(
            (user) => parseInt(user.id) === parseInt(marker.user_id)
          );
          return user;
        } else {
          return true;
        }
      });
      marcadores = marcadores.filter((marker) => {
        if (this.filters.user !== null) {
          return parseInt(marker.user_id) === parseInt(this.filters.user);
        } else {
          return true;
        }
      });
      return marcadores;
    },
    addOrder(by, asc) {
      this.order.by = by;
      this.order.asc = asc;
    },
    orderMarkers(markers) {
      markers.sort((a, b) => {
        if (a.error[this.order.by] < b.error[this.order.by]) {
          return this.order.asc === true ? -1 : 1;
        }
        if (a.error[this.order.by] > b.error[this.order.by]) {
          return this.order.asc === true ? 1 : -1;
        }
        return 0;
      });
      return markers;
    },
  },
};
</script>
