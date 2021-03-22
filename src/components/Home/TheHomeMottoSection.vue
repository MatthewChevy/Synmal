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

    data() {
        return {
            motto: Object
        }
    },

    props: ['startMottoAni'],
        

    mounted () {
        this.motto = document.getElementsByClassName('motto')[0]
         window.addEventListener('scroll', () => {
            this.motto.classList.add('motto-ani')
         })
    },

    methods: {
        mottoAni() {
        if( this.startMottoAni ){
                this.motto.classList.add('motto-ani')
            }
        }
    },

    watch: {
        startMottoAni() {
            this.mottoAni()
        }
    },
}


</script>

<style lang="scss" scoped>

// Pri resize z mensieho na vacsie odskoci motto sekcia

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
        height: 9rem;
    }

    .motto-ani{
        animation: mottoTranslateY 1s ease-in-out both;
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
        100%{ transform: translateY( -8.9rem );}  //height of motto section
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
        100%{ transform: translateY( -7.9rem );} //height of motto section
    }
}

@media screen and ( min-width: 550px) {

    .motto-field {
        h3 {
            font: {
                size: 17px;
            }
        }
    }

}

@media screen and ( min-width: 600px) {

    .motto{
        padding: 2.75rem 0;
        height: 10rem;
    }

    .motto-field {
        max-width: 30rem;
    }

    .horizontal-line{
        height: 1px;
        margin-top: 5px;
    }

    @keyframes mottoTranslateY {
        0%{ transform: translateY(0);}
        100%{ transform: translateY( -9.9rem );} //height of motto section
    }
}

@media screen and ( min-width: 768px) {
 
    .sm-screen{
        display: none;
    }

    .md-screen{
        display: block;
    }

    .motto{
        padding: 2rem 0;
    }

    .motto-field{
        max-width: 32rem;
    }
}

</style>
