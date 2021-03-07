<template>
    <aside class="center-content">
        <h4 class="center-content-h4">
            Za roky vykonávania nášho remesla sme vyskúšali a testovali
            desiatky výrobcov farieb.
        </h4>
    </aside>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.center-content {
    position: relative;
    width: 100%;
    top: 2rem;
    z-index: 3;
    background-color: $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
}

.center-content-h4 {
    max-width: 17.875rem;
    margin: 0 auto;
    padding: 1.563rem 0px;
    text-align: center;
    font: {
        size: 14px;
        weight: 400;
    }
}

@media screen and ( min-width: 375px) {
    .center-content{
        top: 3rem;
    }

    .center-content-h4 {
        max-width: 85%;
        padding: 2rem 0px;
        font: {
            size: 16px;
        }
    }
}

@media screen and ( min-width: 500px) {

    .center-content {
        top: 7rem;
    }

    .center-content-h4 {
        max-width: 80%;
        padding: 2rem 0;
   
    }
}

@media screen and ( min-width: 500px) {

    .center-content {
        top: 7rem;
    }

    .center-content-h4 {
        max-width: 80%;
        padding: 2rem 0;
        font:{
            size: 18px
        }
   
    }
}   


</style>