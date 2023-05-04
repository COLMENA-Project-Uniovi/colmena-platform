<template>
  <div class="relative">
    <div
      class="flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-white hover:shadow transition-base"
      @click="openMenu"
    >
      <font-awesome-icon icon="fa-solid fa-filter-list" class="text-sm" />
    </div>
    <div
      class="absolute right-0 z-10 w-56 overflow-hidden text-sm text-gray-600 translate-y-full bg-white shadow-xl dark:bg-slate-700 transition-base -bottom-4 rounded-xl"
      v-click-outside="clickOutside"
      :class="{ 'max-h-0': !isOpen, 'max-h-64': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="flex flex-col gap-2 p-4">
        <div class="text-xs font-bold">Por familia de error</div>
        <select class="w-full" name="type" v-model="selectedFamily">
          <option :value="null" selected>Ninguno</option>
          <option :value="id" v-for="(name, id) in families">
            {{ name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-2 p-4">
        <div class="text-xs font-bold">Por tipo de error</div>
        <select class="w-full" name="type" v-model="selectedErrorType">
          <option :value="null" selected>Ninguno</option>
          <option :value="id" v-for="(name, id) in errorTypes">
            {{ name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["markers", "addFilter"],
  data() {
    return {
      marcadores: this.markers,
      families: {},
      errorTypes: {},
      selectedFamily: null,
      selectedErrorType: null,
      isOpen: false,
      isClickedOutSide: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
      setTimeout(() => {
        this.isClickedOutSide = !this.isClickedOutSide;
      }, 100);
    },
    clickOutside() {
      if (this.isOpen && this.isClickedOutSide) {
        this.isOpen = false;
        this.isClickedOutSide = false;
      }
    },
  },
  watch: {
    markers(markers, oldMarkers) {
      this.markers = markers;
      this.markers.forEach((marker) => {
        this.families[marker.error.family_id] = marker.error.family.name;
        this.errorTypes[marker.error.error_id] = marker.error.name;
      });
    },
    selectedFamily(newValue, oldValue) {
      this.addFilter(newValue, this.selectedErrorType);
    },
    selectedErrorType(newValue, oldValue) {
      this.addFilter(this.selectedFamily, newValue);
    },
  },
};
</script>
