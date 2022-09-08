<template>
	<section class="w-screen h-screen flex">
		<div class="w-2/3 flex justify-center items-center bg-amber-400 ">
			<!-- <img src="~/assets/logos/login.jpg" alt="" width="600px" /> -->
		</div>
		<div class="w-1/3 flex justify-center items-start flex-col">
			<h2 class="text-center text-4xl text-black font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold w-2/3 mx-auto">Iniciar sesión</h2>

			<Notification :message="error" v-if="error" />

			<form method="post" @submit.prevent="login" class="w-2/3 mx-auto mt-12">
				<div class="w-full">
					<div class="text-sm font-bold text-gray-700 tracking-wide">Email</div>
					<input
						class="w-full text-lg py-2 border-b border-gray-300  outline-none focus:outline-none focus:border-amber-600 ease-in-out duration-300"
						type="" placeholder="tu@madre.com" name="email" v-model="email">
				</div>
				<div class="mt-8">
					<div class="flex justify-between items-center">
						<div class="text-sm font-bold text-gray-700 tracking-wide">
							Contraseña
						</div>
						<div>
							<a class="text-xs font-display font-semibold text-amber-500 hover:text-amber-600 ease-in-out duration-300
                  cursor-pointer">
								¿Olvidaste tu contraseña?
							</a>
						</div>
					</div>
					<input
						class="w-full text-lg py-2 border-b border-gray-300 outline-none focus:outline-none focus:border-amber-600 ease-in-out duration-300"
						type="password" placeholder="Ej. borjalachupa69" name="password" v-model="password">
				</div>
				<div class="mt-10">
					<button class="bg-amber-500 text-gray-100 p-4 w-full rounded-full tracking-wide
          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-amber-600 ease-in-out duration-300
          shadow-lg" type="submit">
						Acceder
					</button>
				</div>
			</form>
			<div class=" w-2/3 mx-auto mt-12 text-sm font-display font-semibold text-gray-700 text-center">
				¿Todavia no estás registrado?
				<nuxt-link to="/register"
					class="cursor-pointer text-amber-500 hover:text-amber-600 ease-in-out duration-300">
					Únete aquí</nuxt-link>
			</div>
		</div>

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
		};
	},

	methods: {
		async login() {
			try {
				const { data } = await this.$auth.loginWith("local", {
					data: {
						username: "elmer.cortez@neozink.com",
						password: "Pr43b4",
					},
				});
				this.$auth.strategy.token.set(data);
				this.$auth.setUser(data);
				this.$axios.setHeader('Authorization', data.id);
			} catch (e) {
				console.log(e.response.data.message);
			}

		},
	},
};
</script>

<style scoped>

</style>