<template>
    <button class="hamburger-menu" @click="activeMenu">
        <img src="../assets/img/menu.png" alt="menu button" />
    </button>
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
                this.$emit('toggle-menu', false)
                this.menuIsActive = false
            } else {
                this.$emit('toggle-menu', true)
                this.menuIsActive = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.hamburger-menu {
    width: 3.3rem;
}

@media screen and (min-width: $w-lg) {
    .hamburger-menu {
        display: none;
    }
}
</style>
