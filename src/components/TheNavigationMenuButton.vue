<template>
    <a class="button" @click="activeMenu">
        <img src="../assets/img/menu.png" alt="Menu button" />
    </a>
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
.button {
    width: 2rem;
    margin: 10px;
    border: none;
    background: none;
}

.button::before,
::after {
    border: none;
    background: none;
}

img {
    width: 100%;
}

@media screen and (max-width: 374px) {
    .button {
        margin: 13px 10px;
    }
}

// @media screen and ( min-width: 600px) {
//     .button {
//         width: 3rem;
//         margin: 15px;
//         border: none;
//         background: none;
//     }
// }

@media screen and (min-width: 1024px) {
    .button {
        display: none;
    }
}
</style>
