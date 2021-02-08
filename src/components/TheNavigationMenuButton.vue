<template>
    <button class="hamburger-menu" @click="activeMenu">
        <img src="../assets/img/menu.png" alt="Menu button" />
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

.hamburger-menu,
.hamburger-menu:hover,:focus {
    border: none;
    background: none;
    width: 3.6rem;
    animation: logo-smooth  1s ease-in-out;
    animation-fill-mode:forwards
}

    @keyframes logo-smooth {
         0% { transform: translateX(100%); }
        100% { transform: translateX(0%); }
    }

img{
    max-width: 2.6rem;
}

img:hover,:focus{
    border: none;
}


button{
    margin-right: 0.75rem;
}

@media screen and (min-width: $w-lg) {
    .hamburger-menu {
        display: none;
    }
}
</style>
