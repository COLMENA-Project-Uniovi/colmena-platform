<template>
  <div class="relative">
    <div
      class="flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-white hover:shadow transition-base"
      :class="by !== null ? 'bg-white shadow' : ''"
      @click="openMenu"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-down-wide-short" class="text-sm" />
    </div>
    <div
      class="absolute right-0 z-10 w-60 overflow-hidden text-sm text-gray-600 translate-y-full bg-white shadow-xl dark:bg-slate-700 transition-base -bottom-4 rounded-xl p-4 flex flex-col gap-4"
      v-click-outside="clickOutside"
      :class="{ 'max-h-0': !isOpen, 'max-h-64': isOpen, 'opacity-0': !isOpen }"
    >
      <div class="flex flex-col gap-2">
        <div class="text-xs font-bold">Atributo</div>
        <select
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type"
          v-model="by"
        >
          <option :value="null" selected>Ninguno</option>
          <option value="family_name">Familia de error</option>
          <option value="name">Tipo de error</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-xs font-bold">Orden</div>
        <select
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          name="type"
          v-model="asc"
        >
          <option :value="true" selected>Ascendente</option>
          <option :value="false">Descendente</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addOrder"],
  data() {
    return {
      by: null,
      asc: true,
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
    by(newValue, oldValue) {
      this.addOrder(newValue, this.asc);
    },
    asc(newValue, oldValue) {
      this.addOrder(this.by, newValue);
    },
  },
};
</script>
