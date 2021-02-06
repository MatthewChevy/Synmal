<template>
    <div
        class="flex justify-start lg:flex-none lg:border-none w-50 border-b-2 border-gray-300"
    >
        <div class="p-4 lg:p-2">
            <router-link to="/">
                <img class="w-20 lg:w-32" src="../assets/img/paint.jpg" />
            </router-link>
        </div>
        <button
            @click="activeMenu"
            class="hamburger-menu focus:select-none lg:hidden"
        >
            <img
                class="w-10 focus:select-none"
                src="../assets/img/menu.png"
                alt="menu "
            />
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuIsActive: false
        }
    },
    methods: {
        activeMenu() {
            if (this.menuIsActive) {
                this.$emit('close-menu')
                this.menuIsActive = false
            } else {
                this.$emit('open-menu')
                this.menuIsActive = true
            }
        }
    }
}
</script>

<style scoped></style>
