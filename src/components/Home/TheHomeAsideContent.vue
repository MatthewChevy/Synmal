<template>
    <aside class="center-content">
        <h4 class="center-content-h4">
            Za roky vykonávania nášho remesla sme vyskúšali a testovali desiatky
            výrobcov farieb.
        </h4>
    </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    
    .center-content {
        position: relative;
        width: 100%;
        z-index: 3;
        background-color: $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);
    }

    .center-content-h4 {
        max-width: 80%;
        margin: 0 auto;
        padding: 1.563rem 0px;
        text-align: center;
        font: {
            size: 14px;
            weight: 400;
        }
    }
}

@media screen and (min-width: 550px) {
    .center-content-h4 {
        font: {
            size: 17px;
        }
    }
}

@media screen and (min-width: 640px) {
    .center-content {
        top: 0;
    }

    .center-content-h4 {
        max-width: 80%;
        padding: 2rem 0;
        font: {
            size: 20px;
        }
    }
}
</style>
