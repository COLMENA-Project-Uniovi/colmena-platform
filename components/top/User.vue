<template>
    <div class="relative">
        <div class="flex items-center bg-white shadow cursor-pointer rounded-xl transition-base hover:shadow-md" @click="openMenu">
            <div
                class="flex items-center justify-center w-10 h-10 shadow cursor-pointer transition-base bg-gradient-to-tr from-amber-500 to-amber-300 rounded-xl group">
                <font-awesome-icon icon="fa-duotone fa-bee" class="text-xl text-white transition-base group-hover:scale-110" />
            </div>
            <div class="flex items-center justify-center p-2 text-sm font-bold tracking-wide text-gray-500">
                {{ user.name }} {{ user.surname }}
            </div>
            <div class="flex items-center justify-center pr-2 ">
                <font-awesome-icon icon="fa-duotone fa-chevron-down" class="text-sm font-semibold" />
            </div>
        </div>
        <div class="absolute right-0 w-56 overflow-hidden text-sm text-gray-600 translate-y-full bg-white shadow-lg dark:bg-slate-700 transition-base -bottom-4 rounded-xl"
            :class="{ 'max-h-0': !isOpen, 'max-h-64': isOpen, 'opacity-0': !isOpen }" v-click-outside="clickOutside">
            <div class="flex flex-col gap-2 p-4">
                <div class="text-xs font-bold ">
                    Tema de la interfaz
                </div>
                <div class="flex p-2 bg-gray-100 rounded-lg">
                    <div class="flex items-center justify-center w-1/2 font-bold cursor-pointer">
                        <span class="w-full py-2 text-center rounded-lg" :class="themeLightClass" @click="changeTheme('light')">
                            <font-awesome-icon icon="fa-solid fa-sun-bright" />
                            Claro
                        </span>
                    </div>
                    <div class="flex items-center justify-center w-1/2 font-bold cursor-pointer">
                        <span class="w-full py-2 text-center rounded-lg" :class="themeDarkClass" @click="changeTheme('dark')">
                            <font-awesome-icon icon="fa-solid fa-moon" />
                            Oscuro
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 p-4 border-t">
                <nuxt-link :to="localePath('private/profile')"
                    class="flex items-center w-full gap-2 p-2 text-xs font-bold rounded-md transition-base hover:bg-gray-100 ">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    {{ $t('profile') }}
                </nuxt-link>
                <div class="flex items-center w-full gap-2 p-2 text-xs font-bold rounded-md cursor-pointer transition-base hover:bg-gray-100" @click="logout">
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
            user: [],
            isOpen: false,
            isClickedOutSide: false,
            theme: 0,
        };
    },
    mounted() {
        this.user = this.$auth.$storage.getUniversal('user');
        this.storeToken();
    },
    computed: {
        themeLightClass: function () {
            return this.theme == "light" ? 'bg-white shadow-md' : 'text-gray-400';
        },
        themeDarkClass: function () {
            return this.theme == "light" ? 'text-gray-400' : 'bg-white shadow-md';
        }
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
        },
        storeToken() {
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.theme = "light";
            this.theme = localStorage.theme;
        },
        changeTheme(theme) {
            document.documentElement.classList.remove(localStorage.theme);
            localStorage.theme = theme
            this.theme = localStorage.theme;
            document.documentElement.classList.add(localStorage.theme);
        },
        async logout() {
            await this.$auth.logout();
            this.$router.push('login');
        }
    }
};
</script>
