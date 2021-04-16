<template>
    <section>
        <div class="container">
            <div class="h3-wrapper">
                <h3>Naša ponuka</h3>
                <div class="arrow-box">
                    <span>⇩</span>
                </div>
            </div>

            <article class="to-do-box">
                <div class="box-container" :data-aos="slideRight">
                    <h4>Malovanie interiérov</h4>

                <div class="image-holder" :data-aos="zoom">
                    <img
                        src="../../assets/img/painbrush.png"
                        alt="Roof painting"
                    />
                    </div>
                    <p>
                        Postaráme sa o všetky Vaše kancelárske obchodné, bytové
                        a nebytové priestory, rodinné domy... Rôzne dekoratívne
                        prvky, pačokovanie, vyspravenie prasklín, renovácia
                        povrchu, penetračné nátery. Všetko dôkladne pozakrývame,
                        zalepíme a prípravíme na malovanie. Po skončení prác
                        všetko poumývame a povysávame.
                    </p>
                </div>

                <div class="box-container center-border active" :data-aos="slideDown">
                    <h4>Malovanie exteriérov</h4>
                    <div class="image-holder" :data-aos="zoom">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Tak isto ako v prípade interiérov, aj maľovanie
                        exteriérov zabezpečíme s najvyššou možnou kvalitou. Je u
                        nás zvykom že v prípade rodiných domov zakryjeme fóliou
                        nielen terasy, markízy, okná ale aj trávnik. Máme
                        vymalovaných nespočetne rodinných domov a bytoviek po
                        celom Liptove a okolí.
                    </p>
                </div>

                <div class="box-container center-border" :data-aos="slideLeft">
                    <h4>Nátery striech</h4>
                    <div class="image-holder" :data-aos="zoom">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Pri práci na strechách používame istiace a bezpečnostné
                        prvky. Máme platné všetky potvrdenia na vykonávanie prác
                        vo výškach. V prípade potreby robíme opravy komínov.
                        Najčastejšie používame dvojzložkové farby ktoré sa nám
                        osvedčili a aj po rokoch je strecha vo výbornom stave.
                    </p>
                </div>

                <div class="box-container last-box sm-screen">
                    <h4>Nátery drevených profilov</h4>
                    <div class="image-holder" :data-aos="zoom">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Či už drevený plot, tatranský profil, drevené obklady,
                        staupláty, altánky alebo drevenice o všetko drevo sa Vám
                        postaráme aby bolo vo výbornej kondicií. Maľovanie dreva
                        a drevených obkladov realizujeme v interiéri aj
                        exteriéri.
                    </p>
                </div>
            </article>

            <aside class="aside">
                <div class="aside-box" data-aos="fade-down">
                    <h5>Máte špecálne požiadavky alebo otázky ?</h5>
                    <div class="button">
                        <the-path-button
                            :textButton="'Kontaktuje nás'"
                            :path="'contact'"
                        />
                    </div>
                </div>
            </aside>
        </div>
        <aside class="first-section-decorative-rectangle"></aside>
    </section>
</template>

<script>
import tableMixin from '../../mixins/tableMixins.js'
import ThePathButton from '../ThePathButton.vue'
import { throttle } from 'lodash-es'

export default {

    mixins: [tableMixin],

    components: {
        ThePathButton
    },
    data(){
        return {
            boxContainer: Object,
            percentage: 70, // 60% percent from height of box-container
            timer: 100,
            zoom: 'zoom-in',
            slideRight: String,
            slideDown: String,
            slideLeft: String,

        }
    },

    mounted() {

        this.boxContainer = document.getElementsByClassName('box-container')

        if( this.actualyWidnowSize > this.breakpoint){
            this.zoom = '';
            this.slideRight = 'fade-right'
            this.slideDown = 'fade-down'
            this.slideLeft = 'fade-left'
        } 

        window.addEventListener(
            'scroll',
            throttle(() => {
                if (this.actualyWidnowSize <= this.breakpointmd) {
                    this.scrollSelectBox() 
                }
            }, this.timer)
        )
        window.addEventListener(  
            'resize',
            throttle(() => {
                if (this.actualyWidnowSize > this.breakpointmd) {
                    for (let i = 0; i < this.boxContainer.length; i++) {
                        this.boxContainer[i].classList.remove(
                            'box-container-bg'
                        )
                    }
                }

                if( this.actualyWidnowSize > this.breakpoint ){  // AOS responsive
                    this.zoom = ''
                    this.slideRight = 'fade-right'
                    this.slideDown = 'fade-up'
                    this.slideLeft = 'fade-left'
                } else {
                    this.zoom = 'zoom-in'
                    this.slideRight = ''
                    this.slideUp = ''
                    this.slideLeft = ''
                }
            }, this.timer)
        )
    },

    methods: {
        scrollSelectBox() {
            for (let i = 0; i < this.boxContainer.length; i++) {
                if (
                    window.scrollY >
                    this.boxContainer[i].offsetTop +
                        (this.percentage / 100) *
                            this.boxContainer[i].offsetHeight
                ) {
                    this.boxContainer[i].classList.add('box-container-bg')
                    if (
                        window.scrollY >
                        this.boxContainer[i].offsetTop +
                            (this.boxContainer[i].offsetHeight +
                                (this.percentage / 100) *
                                    this.boxContainer[i].offsetHeight)
                    ) {
                        this.boxContainer[i].classList.remove(
                            'box-container-bg'
                        )
                    }
                } else {
                    this.boxContainer[i].classList.remove('box-container-bg')
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>



@media screen and (min-width: 0px) {

    //move animation


    section {
        width: 100%;
        position: relative;
        background-color: $primary-light;
        border-radius: 10px 10px 0 0;
    }

    .container {
        max-width: $sm-width-container;
        padding: 3rem 0 1.5rem 0;
        margin: 0 auto;
    }

    .h3-wrapper {
        max-width: 100%;
        margin: 0.5rem auto 2rem auto;
        text-align: center;

        h3 {
            padding-bottom: 1rem;
            font: {
                size: 30px;
                weight: 300;
            }
            color: $primary-semi-dark;
        }

        .arrow-box{
            animation: bounce 2s infinite ease-in-out;
            span {
                color: $fancy;
                font: {
                    size: 50px;
                }
                
            }
        }
    }

    .to-do-box {
        display: flex;
        flex-wrap: wrap;

        .box-container {
            max-width: 100%;
            margin: 0 auto;
            padding: 2rem 0;
            text-align: center;

            h4 {
                color: $primary-dark;
                font: {
                    size: 17px;
                    weight: 400;
                }
            }

            p {
                width: 15rem;
                margin: 0 auto;
                text-align: justify;
                font: {
                    size: 14px;
                    weight: 300;
                }
            }

            .image-holder {
                img {
                    width: 22%;
                }
            }

            .image-holder::before,
            .image-holder::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 25%;
                top: -2rem;
                border: 0.25px solid $fancy;
            }
        }

        .box-container-bg {
            background-color: $primary-soft;
        }

        .center-border {
            border: {
                top: 1px solid $primary-soft;
                bottom: 1px solid $primary-soft;
            }
        }

        .last-box {
            margin-bottom: 3rem;
        }
    }

    .aside {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        border-top: 1px solid $fancy;

        h5 {
            width: 18rem;
            margin: 2rem auto 2rem auto;

            font: {
                size: 20px;
                weight: 300;
                family: $font-family;
            }
        }
    }

    .button {
        margin: 2rem 0;
    }
}

@media screen and (min-width: 350px) {
    .to-do-box {
        .box-container {
            border-radius: 10px;
            min-height: 400px;
            h4 {
                font: {
                    size: 22px;
                    weight: 300;
                }
            }
            p {
                width: 90%;
                max-width: 21rem;
                margin: 0 auto;
                font: {
                    size: 16px;
                    weight: 300;
                }
            }

            .image-holder::before,
            .image-holder::after {
                width: 30%;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    .to-do-box {
        .box-container {
            width: 70%;
        }
    }

    .aside {
        h5 {
            width: 100%;
        }
    }
}

@media screen and (min-width: 700px) {
    .to-do-box {
        .box-container {
            width: 65%;
        }
    }
}

@media screen and (min-width: 768px) {
    .to-do-box {
        .box-container {
            width: 20.5rem;
            border-top: unset;
            border-bottom: unset;
        }
    }

    .aside {
        h5 {
            width: 100%;
        }
    }
}

@media screen and (min-width: 1024px) {
    .sm-screen {
        display: none;
    }

    .container {
        max-width: $lg-width-container;
        padding: 3rem 0 1.5rem 0;
    }

    .h3-wrapper {
        margin: 1.5rem auto 4rem auto;

        h3 {
            font: {
                size: 40px;
                weight: 300;
            }
        }
    }

    .to-do-box {
        width: 100%;
        margin-bottom: 4rem;

        .box-container {
            padding-top: 2rem;
            width: 33.33333%;
            h4 {
                font: {
                    size: 19px;
                    weight: 400;
                }
            }

            p {
                width: 16rem;
                font: {
                    size: 15px;
                    weight: 300;
                }
            }

            .image-holder {
                img {
                    width: 20%;
                }
            }
        }

        .active {
            background-color: $primary-semi-light;
        }

        .center-border {
            border: unset;
        }
    }

    .aside {
        padding: 3rem 0;

        h5 {
            font: {
                size: 20px;
                weight: 300;
            }
        }
    }
}

@media screen and (min-width: 1280px) {
    .sm-screen {
        display: none;
    }

    .container {
        max-width: $xl-width-container;
    }
}

//animations

@keyframes bounce {
    0% { transform: translateY( 0rem ); }
    50% { transform: translateY( 1rem ); }
    100% { transform: translateY( 0rem ); }
}
</style>
