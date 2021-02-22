<template>
    <button @click="activeMenu">
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

button{
    border: none;
    background: none;
    width: 12.5%;
}

img{
    width: 100%;
}

</style>
