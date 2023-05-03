<template>
    <div class="relative flex items-center justify-center w-full shadow-md rounded-xl">
        <v-calendar :attributes='attrs' class="!w-full !border-none"></v-calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            attrs: [
                {
                    key: 'today',
                    highlight: {
                        class: 'bg-amber-500',
                        contentClass: 'text-white'
                    },
                    dates: new Date(),
                },
            ],
        };
    },
    methods: {
    }
};
</script>
