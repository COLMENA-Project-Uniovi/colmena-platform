<template>


	<aside
		class="fixed top-0 left-0 w-64 h-screen ml-24 transition-base border-l border-r border-gray-200 bg-gray-50"
		aria-label="Sidebar">
		<div class="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto rounded dark:bg-gray-800">
			<ul class="flex flex-col space-y-2">
				<h2 class="p-2 text-2xl font-bold"> {{ project.name }}</h2>
				<li>
					<a href="#"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg group dark:text-white hover:bg-white dark:hover:bg-gray-700">
						<font-awesome-icon
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							icon="fa-solid fa-home" />
						<span class="ml-3">Inicio</span>
					</a>
				</li>
				<li>
					<button type="button"
						class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-white dark:text-white dark:hover:bg-gray-700"
						aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
						<font-awesome-icon
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							icon="fa-solid fa-book" />
						<span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Asignaturas</span>
						<font-awesome-icon
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							icon="fa-solid fa-angle-down" />
					</button>
					<ul id="dropdown-example" class="flex flex-col hidden py-2 space-y-2">
						<li v-for="item in subjects" v-bind:key="item.id" class="flex items-center"
							@click="$router.push(`/private/subjects/subject/${item.id}`)">
							<a
								class="flex items-center w-full p-2 pl-5 text-base font-normal text-gray-900 transition duration-75 rounded-lg cursor-pointer group hover:bg-white dark:text-white dark:hover:bg-gray-700 ">
								<font-awesome-icon
									class="w-1 h-1 mr-2 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									icon="fa-solid fa-circle" />
								<span class="truncate">
									{{ item.name }}
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg group dark:text-white hover:bg-white dark:hover:bg-gray-700">
						<font-awesome-icon
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							icon="fa-solid fa-chart-pie" />
						<span class="ml-3">Estadisticas</span>
					</a>
				</li>
			</ul>

			<ul class="flex flex-col pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">

				<button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
					class="flex items-center p-2 text-sm font-medium text-gray-900 transition duration-75 rounded-lg hover:bg-white"
					type="button">
					<span class="sr-only">Open user menu</span>
					<div class="w-8 h-8 mr-3 bg-gray-200 border-2 rounded-full border-spacing-2 border-amber-500"
						alt="user photo"> </div>
					<div class="flex flex-col items-start flex-1">
						<span class="text-sm">{{ user.name }} {{ user.surname }}</span>
						<span class="text-xs"> @{{ user.identifier }} </span>
					</div>
					<svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
				</button>

				<!-- Dropdown menu -->
				<div id="dropdownAvatarName"
					class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
					data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
					style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 810px);">
					<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
						<div class="font-medium truncate">{{ user.name }} {{ user.surname }} {{ user.surname2 }}</div>
						<div class="truncate">{{ user.email }}</div>
					</div>
					<ul class="flex flex-col py-1 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
						<li>
							<a href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Configuración</a>
						</li>
						<li>
							<a href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
						</li>
					</ul>
					<div class="py-1">
						<a href="#"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
							out</a>
					</div>
				</div>

			</ul>
		</div>
	</aside>




</template>

<script>

import { type } from "os";
import { mapGetters } from "vuex";
export default {
	ssr: false,
	data() {
		return {
			subjects: [],
			user: [],
			project: [],
		};
	},
	computed: {
		...mapGetters(["getProject", "loggedInUser"]),
	},
	async created() {
		// const data = { id: this.getProject };
		const data = { id: 2 };
		const response = await this.$axios.post("academic/subjects/list.json", data);
		const responseJSON = await response;
		this.subjects = responseJSON.data;

	},
	mounted() {
		if (localStorage.project) {
			this.project = JSON.parse(localStorage.project);
		}
		this.user = this.$auth.$storage.getUniversal('user');
	},
};
</script>

<style scoped>

</style>