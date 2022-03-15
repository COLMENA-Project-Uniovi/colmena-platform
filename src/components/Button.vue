<template>
  <div>
    <div class="wrapper">
      <button :class="type" class="button" @click="callback($event)">
        {{ text }}
      </button>
    </div>

    <svg
      style="visibility: hidden; position: absolute"
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    type: String,
    text: String,
  },
  methods: {
    callback: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>


<style lang="scss">
.wrapper {
  padding: 1.5rem 0;
  filter: url("#goo");
}

.button {
  cursor: pointer;
  min-width: 13em;
  border: 0px;
  display: inline-block;
  text-align: center;
  background: linear-gradient(
    10deg,
    rgba(234, 91, 12, 1) 0%,
    rgba(249, 180, 0, 1) 100%
  );
  color: white;
  font-weight: bold;
  padding: 15px 30px;
  line-height: 1;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
  font-size: 1.25rem;
  font-family: "Fredoka";
  letter-spacing: 1px;
  transition: border-radius 0.7s cubic-bezier(0.5, 1.75, 0.75, 1.25);

  &:hover {
    border-radius: 20px;
    transition: border-radius 0.7s cubic-bezier(0.5, 1.75, 0.75, 1.75);
  }
}

.button:before,
.button:after {
  width: 30px;
  height: 35px;
  position: absolute;
  content: "";
  display: inline-block;
  background: #f3933d;
  border-radius: 50%;
  transition: transform 0.7s cubic-bezier(0.5, 1.75, 0.75, 1.25);
  transform: scale(0);
  z-index: -1;
}

.button:before {
  bottom: -20px;
  left: 53%;
  width: 20px;
  height: 30px;

  background: #ef760d;
}

.button:after {
  bottom: -25px;
  left: 30%;
  width: 25px;
  height: 35px;
  background: #ec680d;
}

.button:hover:before,
.button:hover:after {
  transform: none;
}
</style>
