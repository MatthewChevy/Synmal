<template>
    <img
        class="welcome-image"
        src="../../assets/img/brothers.jpg"
        alt="brothers"
    />
    <div class="title-wrapper">
        <div class="title-wrapper-center">
            <h1>Pár slov o nás a našej práci</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@media screen and ( min-width: 0px ) {

    .welcome-image {
        position: fixed;
        max-width: 100%;
        z-index: -2;
        opacity: 100%;
    }

    .title-wrapper {
        max-width: 18.75rem;
        height: 13rem;
        margin: 0 auto;

        h1 {
            position: fixed;
            width: 13rem;
            padding-top: 0.5rem;
            z-index: -1;
            color: $primary-dark;
            font: {
                size: 25px;
                weight: 700;
            }
        }
    }
} 

</style>