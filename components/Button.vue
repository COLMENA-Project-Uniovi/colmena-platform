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
        "text-white bg-yellow-500 hover:bg-yellow-600 font-medium text-base rounded-3xl px-10 py-3 text-center shadow-xl ease-in-out duration-300",
      secondary:
        "text-yellow-500 border-yellow-500 border-2 bg-white hover:bg-yellow-500 hover:text-white font-medium text-base rounded-3xl px-10 py-3 text-center shadow-xl ease-in-out duration-300",
      terciary:
        "text-black hover:text-yellow-500 font-medium text-base px-2 py-1 text-center ease-in-out duration-300 button-terciary",
    },
  }),
};
</script>

<style scoped>
.button-terciary {
  position: relative;
}

.button-terciary::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0%;
  height: 3px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
  background-color: #f59e0b;
  transition: all 0.3s ease-in-out;
}

.button-terciary:hover::after {
  width: 100%;
}
</style>