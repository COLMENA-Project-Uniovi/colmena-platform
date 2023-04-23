<template>
    <div
        class="fixed top-0 left-0 flex items-center w-10/12 py-5 pl-24 bg-gray-50 z-[1]">
        <div
            class="flex items-center justify-between w-full px-10">
            <div
                class="flex items-center justify-between text-gray-700">
                <h2 class="text-xl font-bold">
                    {{ project?.name }} |
                    {{ $store.state.pageTitle }}
                </h2>
            </div>
            <div
                class="flex items-center justify-between gap-2 text-gray-700">
                <Langs></Langs>
                <User></User>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            project: []
        }
    },
    mounted() {
        this.project = this.$store.getters.getProject
    },
}
</script>