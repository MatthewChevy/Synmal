<template>
    <section class="section">
        <div class="container">
            <div class="h3-handler" data-aos="fade-down">
                <h3>
                    Interérové a exterierové nátery stien a fasád realizujeme aj
                    <strong>strojovím maľovaním</strong>
                </h3>
            </div>
            <article>
                <div class="airless-box">
                    <div class="flex" :data-aos="aosBox">
                        <div class="paragraph-box">
                            <p class="p-1" :data-aos="firstParagraph">
                                Pracujeme s prvotriednou technológiou od firmy
                                <strong>WAGNER</strong>. Primárnou výhodou
                                vysokotlakových bezvzduchových striekacích
                                zariadení je vysoký plošný výkon, rýchlosť a
                                nízky odpad striekaného materiálu.
                            </p>
                            <div
                                class="paint-machine-image sm-screen"
                                :data-aos="imageParagraph"
                            >
                                <img
                                    src="../../assets/img/decoration/wagner-machine.jpg"
                                    alt="airless painting unit"
                                />
                            </div>
                            <p class="p-2" :data-aos="secondParagraph">
                                Tieto zariadenia sú väčšinou konštruované tak,
                                že nasávanie materiálu je priamo z vedra.
                                Materiál sa na upravovaný podklad nanáša bez
                                využitia vzduchu ako nosiča. Na rozprašovanie sa
                                používa vysoký tlak materiálu prúdiaceho cez
                                trysku.
                            </p>
                        </div>
                        <div class="paint-machine-image lg-screen">
                            <img
                                src="../../assets/img/decoration/wagner-machine.jpg"
                                alt="airless painting unit"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <aside class="decorative-line"></aside>
    </section>
</template>

<script>
import { throttle } from 'lodash-es'

import tableMixin from '../../mixins/tableMixins.js'
export default {
    mixins: [tableMixin],

    data() {
        return {
            aosBox: String,
            firstParagraph: String,
            imageParagraph: String,
            secondParagraph: String
        }
    },

    mounted() {
        window.addEventListener('resize', () => {
            this.aosSetup()
        })
        this.aosSetup()
    },

    methods: {
        aosSetup: throttle(function() {
            if (this.actualyWidnowSize <= this.breakpointmd) {
                this.aosBox = ''
                this.firstParagraph = 'fade-right'
                this.imageParagraph = 'fade-left'
                this.secondParagraph = 'fade-right'
            } else {
                this.aosBox = 'fade-up'
                this.firstParagraph = ''
                this.imageParagraph = ''
                this.secondParagraph = ''
            }
        }, 100)
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .sm-screen {
        display: block;
    }

    .lg-screen {
        display: none;
    }

    .section {
        width: 100%;
        position: relative;
        padding-top: 2rem;
        border: {
            top: 1px solid $primary;
            bottom: 1px solid $primary;
        }
        background-color: $primary-soft;
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;
        text-align: left;
    }

    .h3-handler {
        width: 100%;
        margin: 0 auto 3rem 0;
        text-align: center;
        padding: 0;

        h3 {
            color: $darkest;
            font-size: 19px;
            font-weight: 300;

            strong {
                font: {
                    weight: 600;
                }
            }
        }
    }

    article {
        max-width: 100%;
        margin: 0 auto;
    }

    .airless-box {
        align-items: center;
        margin: 0 auto 4rem auto;
        overflow-x: hidden;
    }

    .logo-holder {
        position: relative;
        width: 60%;
        top: 5rem;
        padding-bottom: 0.5rem;
        margin: 0 auto;
        left: -4rem;
        z-index: 1;

        img {
            width: 100%;
        }
    }

    .flex {
        overflow-y: hidden;
    }

    .p-1,
    .p-2 {
        text-align: justify;
        strong {
            font: {
                weight: 500;
            }
        }

        font: {
            weight: 300;
        }
    }

    .p-2 {
        margin: 0 auto;
        text-align: justify;
    }

    .paint-machine-image {
        width: 90%;
        margin: 2rem auto;

        img {
            width: 100%;
        }
    }

    .decorative-line {
        display: none;
    }
}

@media screen and (min-width: 375px) {
    .h3-handler {
        width: 100%;
        margin: 2rem auto 3rem auto;
        text-align: center;
        padding: 0;

        h3 {
            text-align: center;
            line-height: 1.75rem;
            color: $darkest;
            font-size: 23px;
            font-weight: 300;

            strong {
                font: {
                    weight: 600;
                }
            }
        }
    }
}

@media screen and (min-width: 500px) {
    .h3-handler {
        width: 100%;

        h3 {
            text-align: center;
        }
    }

    .p-1,
    .p-2 {
        margin: 0 auto;
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .sm-screen {
        display: none;
    }

    .lg-screen {
        display: block;
    }

    .h3-handler {
        position: relative;
        display: flex;
        justify-content: flex-start;
        top: 3rem;
        width: 100%;
        margin: 0 auto;
        padding: 0;

        h3 {
            text-align: left;
            width: 38rem;
            font-size: 20px;
            font-weight: 300;

            strong {
                font: {
                    weight: 400;
                }
            }
        }
    }

    .logo-holder {
        display: block;
        width: 22rem;
    }

    .paint-machine-image {
        width: 43%;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2.5rem;
    }

    .p-1,
    .p-2 {
        width: 23rem;
    }

    .p-1 {
        margin-top: 1rem;
    }

    .p-2 {
        margin-top: 3rem;
    }
}

@media screen and (min-width: 950px) {
    .h3-handler {
        position: relative;
        display: flex;
        justify-content: flex-start;
        top: 5rem;
        width: 100%;
        margin: 0 auto;
        padding: 0;

        h3 {
            width: 38rem;
            font-size: 22px;
            font-weight: 300;

            strong {
                font: {
                    weight: 400;
                }
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .section {
        padding-top: 2rem;
    }

    .container {
        width: $lg-width-container;
        margin: 0 auto;
        text-align: right;
    }

    .h3-handler {
        width: 93%;
        padding: 0;

        h3 {
            font-size: 25px;
            line-height: 2rem;
        }
    }

    article {
        max-width: 60rem;
    }

    .airless-box {
        margin: 0 auto 5rem auto;
        overflow-y: hidden;
    }

    .logo-holder {
        width: 22rem;
        padding: 0;

        img {
            width: 100%;
        }

        .p-1,
        .p-2 {
            margin-top: 2rem;

            strong {
                font: {
                    weight: 500;
                }
            }

            font: {
                weight: 300;
            }
        }
    }

    .flex {
        justify-content: space-evenly;
    }

    .paint-machine-image {
        width: 30rem;
        margin: 0;
        img {
            width: 100%;
        }
    }
}
</style>
