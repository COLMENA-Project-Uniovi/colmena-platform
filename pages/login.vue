<template>
	<section class="flex w-screen h-screen">
		<div class="flex flex-col items-center justify-center w-1/3">
			<div class="flex flex-col items-center justify-center w-8/12 gap-6">

				<h2 class="w-full text-3xl font-bold">
					¡Bienvenido/a!
				</h2>

				<form method="post" @submit.prevent="login" class="flex flex-col w-full gap-4">

					<div class="flex flex-col w-full gap-1">
						<div class="text-sm font-bold tracking-wide text-gray-700">Email</div>
						<input
							class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base hover:border-gray-200 focus:border-amber-500"
							type="" placeholder="tu@madre.com" name="email" v-model="email">
					</div>

					<div class="flex flex-col w-full gap-1">
						<div class="flex justify-between text-sm font-bold tracking-wide text-gray-700">
							<span>
								Contraseña
							</span>
							<a class="text-xs font-semibold duration-300 ease-in-out cursor-pointer font-display text-amber-500 hover:text-amber-600">
								¿Olvidaste tu contraseña?
							</a>
						</div>
						<div class="relative group">
							<input
								class="w-full px-4 py-2 text-sm font-semibold tracking-wide text-gray-600 bg-gray-100 border border-gray-100 rounded-lg outline-none transition-base group-hover:border-gray-200 focus:border-amber-500"
								:type="isShowPassword" placeholder="Ej. borjalachupa69" name="password" v-model="password">
							<font-awesome-icon icon="fa-solid fa-eye"
								class="absolute text-gray-600 -translate-y-1/2 cursor-pointer hover:text-black right-3 top-1/2 transition-base" @click="showPassword" />
						</div>
					</div>

					<div class="flex flex-col gap-2 mt-4">
						<button class="w-full button primary" type="submit">
							Acceder
						</button>
						<NuxtLink to="/register" class="button secondary">
							Registrar nueva cuenta
						</NuxtLink>
					</div>
				</form>
			</div>
		</div>
		<div class="flex items-center justify-center w-2/3 bg-amber-300 "></div>

	</section>
</template>

<script>
export default {
	layout: 'home',
	data() {
		return {
			email: "",
			password: "",
			error: null,
			isShowPassword: "password"
		};
	},

	methods: {
		showPassword() {
			this.isShowPassword = this.isShowPassword == "password" ? "text" : "password";
		},
		async login() {
			try {
				const { data } = await this.$auth.loginWith("local", {
					data: {
						username: "uo258585@uniovi.es",
						password: "Pr43b4",
					},
				});
				this.$auth.strategy.token.set(data);
				this.$auth.$storage.setUniversal('user', data, true)
				this.$auth.setUser(data);
				this.$axios.setHeader('Authorization', data.id);
			} catch (e) {
				console.log(e.response.data.message);
			}
		},
	},
};
</script>