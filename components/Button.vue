<template>
  <button type="button" @click="handleClick" :class="types[type]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    type: { type: String, default: "primary" },
    handleClick: { type: Function },
  },
  data: () => ({
    types: {
      primary:
        "text-white bg-amber-500 hover:bg-amber-600 font-medium text-base rounded-3xl px-10 py-3 text-center shadow-xl ease-in-out duration-300",
      secondary:
        "text-yellow-500 border-amber-500 border-2 bg-white hover:bg-amber-500 hover:text-white font-medium text-base rounded-3xl px-10 py-3 text-center shadow-xl ease-in-out duration-300",
      terciary:
        "text-black hover:text-yellow-500 font-medium text-base px-2 py-1 text-center ease-in-out duration-300 button-terciary",
    },
  }),
};
</script>