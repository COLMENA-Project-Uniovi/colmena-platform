<template>
  <section class="relative m-auto ">
    <div class="relative justify-center h-screen pt-24 overflow-hidden ">
      <div class="blob1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F59E0B"
            d="M58.9,-38.8C74.4,-27.5,83.7,-3.1,80,20.4C76.4,43.9,59.7,66.6,39.4,73.1C19.1,79.5,-4.8,69.6,-24.8,57.6C-44.8,45.7,-60.8,31.6,-63.9,15.3C-67,-0.9,-57.1,-19.3,-44.3,-30C-31.5,-40.7,-15.8,-43.7,3,-46.1C21.7,-48.4,43.4,-50.1,58.9,-38.8Z"
            transform="translate(100 100)" />
        </svg>
      </div>
      <div class="blob2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F59E0B"
            d="M33.1,-24.9C47.1,-8.8,65.7,5.2,67.3,22.2C68.9,39.2,53.5,59.2,36.5,62.3C19.4,65.4,0.6,51.5,-18.2,41.2C-37.1,30.8,-56,24,-62.4,10.2C-68.8,-3.6,-62.7,-24.4,-50.2,-40.1C-37.7,-55.9,-18.8,-66.7,-4.7,-63C9.5,-59.3,19,-41,33.1,-24.9Z"
            transform="translate(100 100)" />
        </svg>
      </div>
      <div class="container z-10 flex flex-wrap h-full m-auto lg:p-10">
        <div class="z-10 flex flex-col items-start justify-center gap-8 basis-1/2 grow">
          <h1 class="font-bold text-8xl">FEo tus <br> errores de <br><span class="text-amber-500">programación</span>
          </h1>
          <p class="text-lg leading-7 black">
            Colmena es una herramienta creada para monitorizar el rendimiento de los alumnos
            durante las sesiones de prácticas en asignaturas de programación. Donde los
            usuarios tienen a su disposición información y métricas sobre el proceso de
            desarrollo software.
          </p>
          <Link text="Únete" type="primary" href="/register" />
        </div>
        <div class="flex items-center justify-end basis-1/2 grow">
          <img src="~/assets/logos/logo.png" class="w-1/2" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  auth: false,
  transition: "home",
  layout: "home",
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.home-enter-active,
.home-leave-active {
  transition: all 0.5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}

.blob1 {
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  width: 760px;
  transform: translate(30%, -45%);
  filter: blur(50px);
  opacity: 0.4;
}

.blob2 {
  position: absolute;
  top: 50%;
  left: 0;
  height: auto;
  width: 1000px;
  transform: translate(-10%, -50%);
  filter: blur(55px);
  opacity: 0.25;
  z-index: 0;
}
</style>
