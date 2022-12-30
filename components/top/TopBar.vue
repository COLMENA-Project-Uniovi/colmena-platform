<template>
    <div class="fixed top-0 left-0 w-full h-16 pl-24 transition-base bg-gray-50" :class="{ 'drop-shadow-sm': scroll > 50 }">
        <div class="flex items-center justify-between w-full px-6 py-3 text-gray-700">
            <div class="text-xl font-bold">
                Inicio
            </div>
            <div class="flex items-center justify-center gap-2">
                <Langs></Langs>
                <Calendar></Calendar>
                <User></User>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scroll: 0
        }
    },
    methods: {
        handleScroll() {
            this.scroll = window.scrollY;
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>