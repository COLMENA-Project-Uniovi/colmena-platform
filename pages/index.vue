<template>
  <section class="relative m-auto">
    <div class="relative justify-center h-screen pt-24 overflow-hidden">
      <div class="container z-10 flex flex-wrap h-full m-auto lg:p-10">
        <div
          class="z-10 flex flex-col items-start justify-center gap-8 basis-1/2 grow"
        >
          <h1 class="font-bold text-8xl">
            Conoce tus <br />
            errores de <br /><span class="text-amber-500">programación</span>
          </h1>
          <p class="text-lg leading-7 black">
            Colmena es una herramienta creada para monitorizar el rendimiento de
            los alumnos durante las sesiones de prácticas en asignaturas de
            programación. Donde los usuarios tienen a su disposición información
            y métricas sobre el proceso de desarrollo software.
          </p>
          <nuxt-link :to="localePath('register')">{{
            $t('register')
          }}</nuxt-link>
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
  name: 'IndexPage',
  auth: false,
  layout: 'home',
  transition: 'home',
}
</script>
