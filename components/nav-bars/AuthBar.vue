<template>
	<nav class="fixed top-0 left-0 z-10 flex flex-col items-center justify-between w-24 h-screen py-5 bg-gray-100 transition-base">
		<div class="flex flex-col items-center justify-between w-full gap-4">
			<NuxtLink to="/private"
				class="relative flex items-center justify-center text-white transition-all duration-500 ease-in-out cursor-pointer bg-amber-500 w-14 h-14 rounded-3xl hover:bg-amber-500/95 hover:drop-shadow hover:rounded-xl group drop-shadow-xl">
				<img src="~/assets/logos/logo-white.svg" alt="Logo" class="h-10 text-xl transition duration-500 group-hover:scale-110" />
			</NuxtLink>

			<div v-for="(project, index) in projects" :key="index"
				class="relative z-50 flex items-center justify-center transition-all duration-500 ease-in-out bg-gray-100 cursor-pointer w-14 h-14 text-slate-600 hover:text-slate-700 rounded-3xl hover:bg-gray-50 hover:drop-shadow hover:rounded-xl group drop-shadow-xl"
				@click="this.setProject(project.id)">
				<font-awesome-icon icon="fa-solid fa-folder" class="text-xl transition duration-500 group-hover:scale-110" />
				<div
					class="absolute z-50 px-2 py-1 text-xs font-bold tracking-wide text-black transition duration-500 translate-y-full bg-gray-300 rounded-md opacity-0 pointer-events-none -bottom-1 group-hover:opacity-100 w-max break-keep">
					{{ project.name }}
				</div>
			</div>

			<div
				class="relative flex items-center justify-center bg-gray-100 cursor-pointer transition-base text-slate-500 hover:text-slate-700 h-14 w-14 rounded-3xl hover:bg-gray-50 hover:shadow hover:rounded-xl group">
				<font-awesome-icon icon="fa-solid fa-plus" class="text-xl transition duration-500 group-hover:scale-110" />
			</div>
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
            setProject: "setProject"
        }),
    },
};
</script>