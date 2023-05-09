<template>
  <div class="relative">
    <div
      class="flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-white hover:shadow transition-base"
      :class="
        selectedFamily !== null || selectedErrorType !== null
          ? 'bg-white shadow'
          : ''
      "
      @click="openMenu"
    >
      <font-awesome-icon icon="fa-solid fa-filter-list" class="text-sm" />
    </div>
    <div
      v-click-outside="clickOutside"
      class="absolute right-0 z-10 flex flex-col gap-4 p-4 overflow-hidden text-sm text-gray-600 translate-y-full bg-white shadow-xl w-60 dark:bg-slate-700 transition-base -bottom-4 rounded-xl"
      :class="{ 'max-h-0': !isOpen, 'max-h-64': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="flex flex-col gap-2">
        <div class="text-xs font-bold">Por familia de error</div>
        <select
          v-model="selectedFamily"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type"
        >
          <option :value="null" selected>Ninguno</option>
          <option v-for="(name, id) in families" :key="id" :value="id">
            {{ name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-xs font-bold">Por tipo de error</div>
        <select
          v-model="selectedErrorType"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type"
        >
          <option :value="null" selected>Ninguno</option>
          <option v-for="(name, id) in errorTypes" :key="id" :value="id">
            {{ name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    markers: {
      type: Array,
      required: true,
    },
    addFilter: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      families: {},
      errorTypes: {},
      selectedFamily: null,
      selectedErrorType: null,
      isOpen: false,
      isClickedOutSide: false,
    }
  },
  watch: {
    markers(markers, oldMarkers) {
      markers.forEach((marker) => {
        this.families[marker.error.family_id] = marker.error.family.name
        this.errorTypes[marker.error.error_id] = marker.error.name
      })
    },
    selectedFamily(newValue, oldValue) {
      this.addFilter(newValue, this.selectedErrorType)
    },
    selectedErrorType(newValue, oldValue) {
      this.addFilter(this.selectedFamily, newValue)
    },
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen
      setTimeout(() => {
        this.isClickedOutSide = !this.isClickedOutSide
      }, 100)
    },
    clickOutside() {
      if (this.isOpen && this.isClickedOutSide) {
        this.isOpen = false
        this.isClickedOutSide = false
      }
    },
  },
}
</script>
