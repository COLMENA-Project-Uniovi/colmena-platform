<template>
  <div
    class="top-0 right-0 flex flex-col items-center justify-start h-screen gap-4 2xl:px-6 xl:px-3 py-10 bg-gray-100 2xl:w-[15%] xl:w-[16%] transition-base shadow"
  >
    <div
      class="flex flex-col items-center justify-center w-full text-gray-700 max-h-[30%] h-[30%] gap-6"
    >
      <div v-if="$store.getters.getProject == null">
        <h1 class="font-bold text-center 2xl:text-3xl xl:text-2xl">
          Colmena Project
        </h1>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center w-full text-gray-700 max-h-[30%] h-[30%] gap-6"
      >
        <h1 class="font-bold text-center 2xl:text-3xl xl:text-2xl">
          {{
            $store.getters.getProject == null
              ? 'Colmena Project'
              : $store.getters.getProject.name
          }}
        </h1>
        <form
          class="flex items-center justify-center w-full gap-2 px-4 py-2 font-semibold bg-white shadow transition-base bg-gradient-to-tr rounded-xl h-fit hover:shadow-sm"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <input
            id="search"
            type="text"
            name="search"
            class="w-full outline-none"
            placeholder="Asignatura"
          />
        </form>
      </div>
    </div>
    <hr class="w-full h-px my-2 border-0 bg-colmenablue-400 opacity-20" />
    <div
      class="flex flex-col max-h-[70%] h-[70%] w-full gap-2 2xl:text-lg xl:text-base font-semibold text-gray-500"
    >
      <nuxt-link
        v-for="(menuItem, index) in filteredMenu"
        :key="index"
        :to="localePath(menuItem.route)"
        class="flex items-center px-4 py-2 2xl:gap-4 xl:gap-2 transition-base hover:bg-colmenablue-600 rounded-xl hover:text-white"
      >
        <font-awesome-icon :icon="menuItem.icon" />
        <span>{{ menuItem.name }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      project: this.$route.params.project,
      filteredMenu: [],
      menu: [
        {
          name: 'Inicio',
          icon: 'fa-solid fa-house-chimney',
          createRoute: function (param) {
            this.route = `/private-area/projects/${param}`
            return this
          },
          param: 'project',
          visible: false,
        },
        {
          name: 'Proyectos',
          icon: 'fa-solid fa-rectangle-vertical-history',
          route: `/private-area/projects`,
          param: null,
          visible: true,
        },
        {
          name: 'Errores',
          icon: 'fa-solid fa-bug',
          route: `/private-area/errors`,
          param: null,
          visible: true,
        },
        {
          name: 'Asignaturas',
          icon: 'fa-solid fa-books',
          createRoute: function (param) {
            this.route = `/private-area/projects/${param}/subjects`
            return this
          },
          param: 'project',
          visible: false,
        },
        {
          name: 'Sesiones',
          icon: 'fa-solid fa-person-chalkboard',
          createRoute: function (param) {
            this.route = `/private-area/projects/${param}/sessions`
            return this
          },
          param: 'subject',
          visible: false,
        },
        {
          name: 'Usuarios',
          icon: 'fa-solid fa-users',
          route: `/private-area/projects/${this.param}/users`,
          createRoute: function (param) {
            this.route = `/private-area/projects/${param}/users`
            return this
          },
          param: 'subject',
          visible: false,
        },
      ],
    }
  },
  watch: {
    $route() {
      this.filteredMenu = this.filter(this.menu)
      this.$forceUpdate()
    },
  },
  mounted() {
    this.filteredMenu = this.filter(this.menu)
  },
  methods: {
    filter(menu) {
      const aux = menu.filter((item) => {
        if (item.param == null) {
          return true
        } else {
          return this.$route.params[item.param] !== undefined
        }
      })

      aux.map((item) => {
        // item.createRoute(this.$route.params[item.param])
        return item
      })
      return aux
    },
  },
}
</script>
