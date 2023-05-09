<template>
  <section
    class="flex flex-col items-center justify-center w-screen h-screen bg-white"
  >
    <div class="flex flex-col items-center justify-center w-3/12 gap-6">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl font-bold">
          ¡Bienvenido/a! Vamos a crear tu perfil
        </h2>
        <p class="text-sm font-semibold tracking-wide text-gray-400">
          Necesitamos que nos indiques unos datos antes de empezar.
        </p>
      </div>

      <form
        method="post"
        class="flex flex-col w-full gap-4"
        @submit.prevent="register"
      >
        <div class="flex flex-col w-full gap-1">
          <div
            class="flex justify-between text-sm font-bold tracking-wide text-gray-700"
          >
            <span> Nombre </span>
          </div>
          <div class="relative group">
            <input
              v-model="email"
              class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base group-hover:border-gray-200 focus:border-amber-500"
              type="email"
              placeholder="tu@madre.com"
              name="email"
            />
          </div>
        </div>

        <div class="flex flex-col w-full gap-1">
          <div
            class="flex justify-between text-sm font-bold tracking-wide text-gray-700"
          >
            <span> Apellidos </span>
          </div>
          <div class="relative group">
            <input
              v-model="email"
              class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base group-hover:border-gray-200 focus:border-amber-500"
              type="email"
              placeholder="tu@madre.com"
              name="email"
            />
          </div>
        </div>

        <div class="flex flex-col w-full gap-1">
          <div
            class="flex justify-between text-sm font-bold tracking-wide text-gray-700"
          >
            <span> Email </span>
          </div>
          <div class="relative group">
            <input
              v-model="email"
              class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base group-hover:border-gray-200 focus:border-amber-500"
              type="email"
              placeholder="tu@madre.com"
              name="email"
            />
          </div>
        </div>

        <div class="flex flex-col w-full gap-1">
          <div
            class="flex justify-between text-sm font-bold tracking-wide text-gray-700"
          >
            <span> Contraseña </span>
          </div>
          <div class="relative group">
            <input
              v-model="password"
              class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base group-hover:border-gray-200 focus:border-amber-500"
              :type="isShowPassword"
              placeholder="Ej. borjalachupa69"
              name="password"
            />
            <font-awesome-icon
              icon="fa-solid fa-eye"
              class="absolute text-gray-600 -translate-y-1/2 cursor-pointer hover:text-black right-3 top-1/2 transition-base"
              @click="showPassword"
            />
          </div>
        </div>

        <div class="flex flex-col w-full gap-1">
          <div
            class="flex justify-between text-sm font-bold tracking-wide text-gray-700"
          >
            <span> Repetir contraseña </span>
          </div>
          <div class="relative group">
            <input
              v-model="repeatPassword"
              class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base group-hover:border-gray-200 focus:border-amber-500"
              :type="isShowPassword"
              placeholder="Ej. borjalachupa69"
              name="repeatPassword"
            />
            <font-awesome-icon
              icon="fa-solid fa-eye"
              class="absolute text-gray-600 -translate-y-1/2 cursor-pointer hover:text-black right-3 top-1/2 transition-base"
              @click="showPassword"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2 mt-4">
          <button class="w-full button primary" type="submit">
            Registrarme
          </button>
          <NuxtLink to="/register" class="button secondary">
            Ya tengo una cuenta
          </NuxtLink>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  auth: false,
  layout: 'home',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      error: null,
      isShowPassword: 'password',
    }
  },
  methods: {
    showPassword() {
      this.isShowPassword =
        this.isShowPassword === 'password' ? 'text' : 'password'
    },
    async register() {
      try {
        await this.$axios.post('/users/users/register.json', {
          username: this.username,
          email: this.email,
          password: this.password,
        })

        const { data } = await this.$auth.loginWith('local', {
          data: {
            username: 'uo258585@uniovi.es',
            password: 'Pr43b4',
          },
        })

        this.$auth.strategy.token.set(data)
        this.$auth.$storage.setUniversal('user', data, true)
        this.$auth.setUser(data)
        this.$axios.setHeader('Authorization', data.id)
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
