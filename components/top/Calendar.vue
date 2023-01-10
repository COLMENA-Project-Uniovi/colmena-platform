<template>
    <div class="relative ">
        <div class="flex items-center bg-white shadow cursor-pointer rounded-xl transition-base hover:shadow-md" @click="openMenu">
            <div
                class="flex items-center justify-center w-10 h-10 shadow cursor-pointer transition-base bg-gradient-to-tr from-emerald-500 to-emerald-300 rounded-xl group">
                <font-awesome-icon icon="fa-solid fa-calendar-days" class="text-xl text-white transition-base group-hover:scale-110" />
            </div>
        </div>
        <div class="absolute right-0 overflow-hidden text-sm text-gray-600 translate-y-full bg-white shadow-lg dark:bg-slate-700 transition-base -bottom-4 rounded-xl"
            v-click-outside="clickOutside" :class="{ 'max-h-0': !isOpen, 'max-h-96': isOpen, 'opacity-0': !isOpen }">
            <div class="flex flex-col gap-2 p-4">
                <v-calendar :attributes='attrs' ></v-calendar>
            </div>
            <div class="flex flex-col hidden gap-2 p-4 border-t">
                <nuxt-link :to="localePath('private/profile')"
                    class="flex items-center w-full gap-2 p-2 rounded-md transition-base hover:bg-gray-100">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    {{ $t('profile') }}
                </nuxt-link>
                <div class="flex items-center w-full gap-2 p-2 rounded-md cursor-pointer transition-base hover:bg-gray-100">
                    <font-awesome-icon icon="fa-regular fa-arrow-up-left-from-circle" />
                    {{ $t('logout') }}
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
            isClickedOutSide: false,
            attrs: [
                {
                    key: 'today',
                    highlight: 'green',
                    dates: new Date(),
                },
            ],
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
