<template>
       <h3 class="width">Width: {{ width }}</h3>
        <h3 class="height">Height: {{ height }}</h3>
    <img
        class="welcome-image"
        src="../../assets/img/brothers.jpg"
        alt="brothers"
    />
</template>

<script>
export default {
       data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    },
}
</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px ) {

    .width {
        position: absolute;
        top: 4rem;
        color: purple;
    }

    .height {
        position: absolute;
        top: 5.5rem;
        color: purple;
    }

    .welcome-image {
        position: fixed;
        max-width: 100%;
        z-index: -2;
        opacity: 100%;
    }
} 

</style>