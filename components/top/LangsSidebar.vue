<template>
    <div class="relative ">
        <div class="flex items-center bg-white shadow cursor-pointer rounded-xl transition-base hover:shadow-md" @click="openMenu">
            <div
                class="flex items-center justify-center w-10 h-10 shadow cursor-pointer transition-base bg-gradient-to-tr from-colmenablue-600 to-colmenablue-400 rounded-xl group">
                <font-awesome-icon icon="fa-solid fa-globe" class="text-xl text-white transition-base group-hover:scale-110" />
            </div>
        </div>
        <div class="absolute right-0 z-10 w-56 overflow-hidden text-sm text-gray-600 translate-y-full bg-white shadow-xl dark:bg-slate-700 transition-base -bottom-4 rounded-xl"
            v-click-outside="clickOutside" :class="{ 'max-h-0': !isOpen, 'max-h-64': isOpen, 'opacity-0': !isOpen }">
            <div class="flex flex-col gap-2 p-4">
                <div class="text-xs font-bold ">
                    {{ $t('app-language') }}
                </div>
                <div class="flex p-2 bg-gray-100 rounded-lg">
                    <div class="flex items-center justify-center w-1/2 font-bold cursor-pointer">
                        <nuxt-link :to="switchLocalePath('es')" class="w-full py-2 text-center rounded-lg"
                            :class="this.$i18n.getLocaleCookie() == 'es' ? 'bg-white shadow-lg' : ''">
                            {{ $t('spanish') }}
                        </nuxt-link>
                    </div>
                    <div class="flex items-center justify-center w-1/2 font-bold cursor-pointer">
                        <nuxt-link :to="switchLocalePath('en')" class="w-full py-2 text-center rounded-lg"
                            :class="this.$i18n.getLocaleCookie() == 'en' ? 'bg-white shadow-lg' : ''">
                            {{ $t('english') }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            isClickedOutSide: false
        };
    },
    methods: {
        openMenu() {
            this.isOpen = !this.isOpen;
            setTimeout(() => {
                this.isClickedOutSide = !this.isClickedOutSide;
            }, 100);
        },
        clickOutside() {
            if (this.isOpen && this.isClickedOutSide) {
                this.isOpen = false;
                this.isClickedOutSide = false;
            }
        }
    }
};
</script>
