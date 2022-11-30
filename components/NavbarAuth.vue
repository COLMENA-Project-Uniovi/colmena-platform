<template>
	<nav
		class="fixed top-0 left-0 flex flex-col items-center justify-between w-24 h-screen py-5 transition-all duration-300 ease-in-out bg-gray-100">
		<div class="flex flex-col items-center justify-between w-full gap-4">
			<NuxtLink to="/private"
				class="relative flex items-center justify-center text-white transition-all duration-500 ease-in-out cursor-pointer bg-amber-500 w-14 h-14 rounded-3xl hover:bg-amber-600 hover:drop-shadow hover:rounded-xl group drop-shadow-xl">
				<img src="~/assets/logos/logo-white.svg" alt="Logo"
					class="h-10 text-xl transition duration-500 group-hover:scale-110" />
				<div
					class="absolute right-0 text-red-600 transition duration-500 translate-x-full -translate-y-1/2 bg-black opacity-0 -z-10 group-hover:opacity-100 group-hover:z-50 top-1/2">
					Inicio
				</div>
			</NuxtLink>

			<div v-for="(project, index) in projects" :key="index"
				class="relative flex items-center justify-center transition-all duration-500 ease-in-out bg-gray-100 cursor-pointer w-14 h-14 text-slate-500 hover:text-slate-700 rounded-3xl hover:bg-gray-50 hover:drop-shadow hover:rounded-xl group drop-shadow-xl"
				@click="this.setProject(project.id)">
				<font-awesome-icon icon="fa-solid fa-folder"
					class="text-xl transition duration-500 group-hover:scale-110" />
				<!-- <div class="tooltip">{{ project.name }}</div> -->
			</div>

			<div
				class="relative flex items-center justify-center transition-all duration-300 ease-in-out bg-gray-100 cursor-pointer text-slate-500 hover:text-slate-700 h-14 w-14 rounded-3xl hover:bg-gray-50 hover:shadow hover:rounded-xl group">
				<font-awesome-icon icon="fa-solid fa-plus"
					class="text-xl transition duration-500 group-hover:scale-110" />
			</div>
		</div>
		<div class="flex flex-col gap-4 ">
			<AppDarkModeToggle />
			<Logout />
		</div>
	</nav>
</template>

<script>

import { mapMutations } from "vuex";
export default {
	data() {
		return {
			projects: [],
		};
	},
	async created() {
		// const data = { id: this.$auth.user.id};
		const data = { id: 2 };
		const response = await this.$axios.post("academic/projects/list.json", data);
		const responseJSON = await response;
		this.projects = responseJSON.data;
	},
	methods: {
		...mapMutations({
			setProject: 'setProject'
		}),
	}
};
</script>

<style>
.nav-link.logo {
	background: rgb(245, 158, 11);
	border-radius: 20px;
}

.nav-link.logo:hover {
	background: rgb(245, 158, 11);
	border-radius: 20px;
}

.nav-link {}

.nav-link:hover {}

.nav-link .tooltip {
	position: absolute;
	right: 0;
	transform: translateX(calc(100% + 30px)) scaleX(0);
	background-color: rgb(85, 85, 85);
	color: white;
	padding: 5px 10px;
	border-radius: 10px;
	opacity: 0;
	transition: all 0.3s ease-in-out;
	width: max-content;
}

.nav-link:hover .tooltip {
	opacity: 1;
	transform: translateX(calc(100% + 30px)) scaleX(1);
}

.nav-link .icon {
	color: rgb(107, 114, 128);
	transition: all 0.6s ease-in-out;
}

.dark .nav-link .icon {
	color: rgba(249, 250, 251);
}

.nav-link:hover .icon {
	color: rgb(245, 158, 11);
	animation: jump 0.6s ease-in-out;
}

@keyframes jump {
	20% {
		color: rgb(245, 158, 11);
		transform: translateY(2px) scaleX(0.9);
	}

	50% {
		color: rgb(245, 158, 11);
		transform: translateY(-4px) scaleX(1.05);
	}

	70% {
		color: rgb(245, 158, 11);
		transform: translateY(1px) scaleX(1.05);
	}

	100% {
		color: rgb(245, 158, 11);
		transform: translateY(0) scaleX(1);
	}
}
</style>