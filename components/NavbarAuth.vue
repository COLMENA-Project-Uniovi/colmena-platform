<template>
	<nav class="py-5 h-full flex flex-col items-center justify-between">
		<div class="flex flex-col justify-between items-center w-full gap-4">
			<NuxtLink to="/private" class="
          logo
          nav-link
          bg-gray-200
          h-14
          w-14
          flex
          items-center
          justify-center
          duration-300
          ease-in-out
        ">
				<img src="~/assets/logos/logo-white.svg" alt="Logo" class="h-10 icon" />
				<div class="tooltip">Inicio</div>
			</NuxtLink>

			<div v-for="(project, index) in projects" :key="index"
				class="nav-link relative bg-gray-200 h-14 w-14 flex items-center justify-center text-gray-500 cursor-pointer"
				@click="this.setProject(project.id)">
				<font-awesome-icon icon="fa-solid fa-folder" class="text-xl icon" />
				<div class="tooltip">{{ project.name }}</div>
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
nav {
	background-color: #eff3f6;
	width: 90px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: all 0.3s ease-in-out;
	transition-delay: 0ms;
}

.dark nav {
	background-color: #303030;

}

.nav-link.logo {
	background: rgb(245, 158, 11);
	border-radius: 20px;
}

.nav-link.logo:hover {
	background: rgb(245, 158, 11);
	border-radius: 20px;
}

.nav-link {
	background: #eff3f6;
	border-radius: 50%;
	box-shadow: -6px 6px 11px #cbcfd1, 6px -6px 11px #ffffff;
	transition: all 0.3s ease-in-out;
}

.dark .nav-link {
	background-color: #303030;
	box-shadow: -6px 6px 11px #292929, 6px -6px 11px #373737;
}

.nav-link:hover {
	border-radius: 20px;
}

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