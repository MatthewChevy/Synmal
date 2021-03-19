<template>
    <section class="motto">
        <div class="motto-field">
            <h3 class="sm-screen">
                Beautiful designs, powerful features and the freedom to build
                anything you want.
            </h3>

            <h3 class="md-screen">
                Beautiful designs, powerful features, and the freedom to buil
                anything you want. WordPress is both free and priceless at the
                same time.
            </h3>

            <div class="horizontal-line"></div>
        </div>
    </section>
</template>

<script>
import tableMixin from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixin],
}
</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px) {
 
    .sm-screen{
        display: block;
    }

    .md-screen{
        display: none;
    }

    .motto {
        position: absolute;
        width: 100%;
        padding: 2.5rem 0;
        background: $primary-light;
        border-radius: 10px 10px 0px 0px;
        z-index: 1;
        animation: mottoTranslateY 1.5s 3.5s ease-in-out both;  

    }

    .motto-field {
        max-width: 17rem;
        margin: 0 auto;
        text-align: center;

        h3 {
            font: {
                size: 14.5px;
                weight: 300;
            }
        }
    }

    .horizontal-line {
        position: relative;
        height: 0.5px;
        background-color: $primary-semi-dark;
        z-index: 2;
    }

    @keyframes mottoTranslateY {
        0%{ transform: translateY(0);}
        100%{ transform: translateY( -9rem );}  //height of motto section
    }
}

@media screen and (min-width: 375px) {
    .motto-field {
        max-width: 21rem;

        h3 {
            font: {
                size: 16px;
            }
        }
    }

    @keyframes mottoTranslateY {
        0%{ transform: translateY(0);}
        100%{ transform: translateY( -8rem );} //height of motto section
    }
}

@media screen and ( min-width: 640px) {

    .motto-field {
        padding: 1rem 0;
        max-width: 75%;

        h3 {
            font: {
                size: 20px;
            }
        }
    }
}



</style>
