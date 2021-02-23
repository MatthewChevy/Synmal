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

.button{
    border: none;
    background: none;
    width: 8%;
    margin: 10px;
}

.button::before, ::after{
    border: none;
    background: none;
}


img{
    width: 100%;
}

</style>
