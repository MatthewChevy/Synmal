<template>
    <main>
        <header class="title-section">
            <div class="h1-box" data-aos="fade-down">
                <h1>Vitajte v galérií</h1>
            </div>
        </header>

        <section class="gallery">
            <!-- <div class="big-size-photo mb">
                <img
                    src="../assets/img/gallery/IMG_20200824_122141.jpg"
                    alt=""
                />
            </div> -->

            <div class="medium-size-photo">
                <img
                    src="../assets/img/gallery/IMG_20200716_101559.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo">
                <img
                    src="../assets/img/gallery/118260538_733966200498589_1098778560232869015_n.jpg"
                    alt=""
                />
            </div>

            <div class="big-size-photo mt mb">
                <img
                    src="../assets/img/gallery/119987617_776257346495114_2021740783302182201_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/124433574_3103074533311293_1603057553737455252_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/131895848_411182313570877_2920369544276251577_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/116499270_948887002253501_1938145470334382927_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/145412079_638020656922323_5279528269855082552_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/145669555_248697023432866_1945074314893257057_n.jpg"
                    alt=""
                />
            </div>

            <div class="big-size-photo mb">
                <img
                    src="../assets/img/gallery/152938083_479595056387947_5873967824539428064_n.jpg"
                    alt=""
                />
            </div>

            <div class="big-size-photo mb">
                <img
                    src="../assets/img/gallery/152733172_455407695728760_1812710264514215851_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/153745678_1863339030500067_4936763343887441247_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/153395508_731065417799133_9052157701160206406_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/153122093_430000728265065_4900322006202288397_n.jpg"
                    alt=""
                />
            </div>

            <div class="medium-size-photo mb">
                <img
                    src="../assets/img/gallery/131931852_862531657835488_5843638348138736376_n.jpg"
                    alt=""
                />
            </div>

            <div class="big-size-photo mb">
                <img
                    src="../assets/img/gallery/153180572_867949184057199_3902027427851372289_n.jpg"
                    alt=""
                />
            </div>

            <div class="big-size-photo l-mb">
                <img
                    src="../assets/img/gallery/153228751_2736311053287795_6348408275480615625_n.jpg"
                    alt=""
                />
            </div>
        </section>

        <div class="button" data-aos="zoom-out" data-aos-offset="10">
            <the-path-button
                :path="'contact'"
                :textButton="'Kontaktujte nás'"
            />
        </div>
    </main>
</template>

<script>

import ThePathButton from '../components/ThePathButton.vue'

export default {
    
    components: {
        ThePathButton
    },
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px){

    main{
        overflow-x: hidden;
    }

    header {
        .h1-box {
            text-align: center;

            h1 {
                padding: 2rem 0;
                color: $primary-dark;
                font: {
                    size: 30px;
                    weight: 300;
                }
            }
            h1::before,
            h1::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 18%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h1::before {
                right: 0.75rem;
            }
            h1::after {
                left: 0.75rem;
            }
        }
    }

    .mt {
        margin-top: 0.3rem;
    }

    .mb {
        margin-bottom: 0.3rem;
    }

    .l-mb {
        margin-bottom: 2em;
    }

    main {
        position: relative;
        padding-top: 3.4rem;
        background-color: $primary-soft;
        z-index: 1;
    }

    .title-section {
        position: relative;
        width: 90%;
        margin: 0 auto;
        z-index: 1;
    }

    .gallery {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;
        margin: 1rem auto 0 auto;
    }

    .big-size-photo {
        max-width: 100%;
        border-radius: 5px;
        line-height: 0;

        img {
            width: 100%;
        }
    }

    .medium-size-photo {
        max-width: 49.5%;
        border-radius: 5px;
        line-height: 0;

        img {
            width: 100%;
        }
    }

    .button {
        margin: 0rem auto 3rem;
        text-align: center;
    }
}

@media screen and (min-width: 640px) {
    .title-section {
        width: 80%;
    }

    .gallery {
        width: 80%;
    }
}

@media screen and (min-width: 700px) {
    .gallery {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 0.5rem;
    }

    .big-size-photo {
        all: initial;
        * {
            all: unset;
        }
    }

    .medium-size-photo {
        all: initial;
        * {
            all: unset;
        }

        width: 100%;
    }

    .button {
        margin: 3rem auto 3rem;
    }
}



</style>
