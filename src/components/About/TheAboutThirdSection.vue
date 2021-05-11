<template>
    <section class="section">
        <article class="article-top">
            <div class="center">
                <div class="article-title" data-aos="fade-up">
                    <h2>Priebeh práce</h2>
                </div>
                <div class="contact-paragraph" data-aos="zoom-in">
                    <div class="center">
                        <p>
                            Po <strong>kontakte</strong> s Vami urobíme osobnú
                            prehliadku Vašich priestorov, na základe ktorej
                            vypracujeme cenovú ponuku a dohodneme termín
                        </p>
                    </div>

                    <div class="button">
                        <the-path-button
                            :path="'contact'"
                            :textButton="'Kontaktujte nás'"
                        />
                    </div>
                </div>

                <div class="paragraphs-holder">
                    <div class="paragraph-box" data-aos="fade-right">
                        <h4>Pred maľovaním</h4>
                        <p>
                            Všetko dôkladne zalepíme a pozakrývame fóliou. Tento
                            proces bývá časovo najnáročnejší. Pri strojovom
                            maľovaní si lepenie vyžaduje ešte väčšiu dôslednosť.
                        </p>
                        <div
                            class="center"
                            v-if="actualyWidnowSize < breakpoint"
                        >
                            <div class="image-holder">
                                <img
                                    src="../../assets/img/gallery/box.jpg"
                                    alt="before"
                                />
                            </div>
                            <div class="h3-box">
                                <h3>Pred</h3>
                            </div>
                        </div>
                    </div>

                    <div class="paragraph-box center-box" data-aos="fade-left">
                        <h4>Počas maľovania</h4>
                        <p>
                            V tejto fáze sa ukážu všetky nedostatky ako
                            napríklad praskliny na stenách, strope alebo okolo
                            okien. Všetko čo treba povyspravujeme a zasádrujeme.
                        </p>
                        <div
                            class="center"
                            v-if="actualyWidnowSize < breakpoint"
                        >
                            <div class="image-holder">
                                <img
                                    src="../../assets/img/gallery/box.jpg"
                                    alt="before"
                                />
                            </div>
                            <div class="h3-box">
                                <h3>Počas</h3>
                            </div>
                        </div>
                    </div>

                    <div class="paragraph-box" data-aos="fade-right">
                        <h4>Po maľovaní</h4>
                        <p>
                            Ak sme s výsledkom spokojný môžeme začať s
                            upratovacími prácami. Všetko dôklade vyzametáme,
                            poumývame a povysávame. Po skončení sa možete tešiť
                            z vymalovných priestorov.
                        </p>
                        <div
                            class="center"
                            v-if="actualyWidnowSize < breakpoint"
                        >
                            <div class="image-holder">
                                <img
                                    src="../../assets/img/gallery/box.jpg"
                                    alt="before"
                                />
                            </div>
                            <div class="h3-box">
                                <h3>Po</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <div class="photo-box" v-if="actualyWidnowSize > breakpoint">
            <article class="article-box" :data-aos="boxLeft">
                <div class="center">
                    <div class="image-holder">
                        <img
                            src="../../assets/img/gallery/box.jpg"
                            alt="before"
                        />
                    </div>
                    <div class="h3-box" :data-aos="textInPhoto">
                        <h3>Pred</h3>
                    </div>
                </div>
            </article>

            <article class="article-box" :data-aos="boxCenter">
                <div class="center">
                    <div class="image-holder">
                        <img
                            src="../../assets/img/gallery/box.jpg"
                            alt="in progress"
                        />
                    </div>
                    <div class="h3-box" :data-aos="textInPhoto">
                        <h3>Počas</h3>
                    </div>
                </div>
            </article>

            <article class="article-box last" :data-aos="boxRight">
                <div class="center">
                    <div class="image-holder">
                        <img
                            src="../../assets/img/gallery/box.jpg"
                            alt="after"
                        />
                    </div>
                    <div
                        class="h3-box"
                        :data-aos="textInPhoto"
                        data-aos-offset="10"
                    >
                        <h3>Po</h3>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import ThePathButton from '../ThePathButton.vue'
import tableMixins from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixins],

    components: {
        ThePathButton
    },

    data() {
        return {
            textInPhoto: String,
            boxLeft: String,
            boxCenter: String,
            boxRight: String
        }
    },

    mounted() {
        this.aosSettings()

        window.addEventListener('resize', () => {
            this.aosSettings()
        })
    },

    methods: {
        aosSettings() {
            if (this.actualyWidnowSize > this.breakpoint) {
                this.textInPhoto = ''
                this.boxLeft = 'fade-right'
                this.boxCenter = 'fade-down'
                this.boxRight = 'fade-left'
            } else {
                this.textInPhoto = 'zoom-in'
                this.boxLeft = ''
                this.boxCenter = ''
                this.boxRight = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .container {
        width: $sm-width-container;
        margin: 0 auto;
    }

    .section {
        position: relative;
        width: 100%;
        background: $primary-semi-light;
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        padding-top: 3.5rem;
        border-bottom: 1px solid $primary;
        padding-bottom: 2rem;

        .article-title {
            padding-bottom: 2rem;
            text-align: center;

            h2 {
                font: {
                    size: 30px;
                    weight: 300;
                }
            }

            h2::before,
            h2::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 10%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h2::before {
                right: 0.25rem;
            }
            h2:after {
                left: 0.25rem;
            }
        }
    }

    .contact-paragraph {
        width: $sm-width-container;
        max-width: 30rem;
        margin: 0 auto;

        .center {
            text-align: center;
            h3 {
                font: {
                    size: 20px;
                    weight: 400;
                }
            }

            p {
                text-align: justify;
                font: {
                    size: 16px;
                    weight: 300;
                }
                strong {
                    font: {
                        weight: 500;
                    }
                }
            }
        }

        .button {
            margin: 2rem auto 3rem;
            text-align: center;
        }
    }

    .paragraphs-holder {
        width: $sm-width-container;
        max-width: 30rem;
        margin: 0 auto;

        .paragraph-box {
            width: 100%;
            margin: 2rem auto;
            padding-top: 2rem;
            border-top: 1px solid $fancy;

            h4 {
                padding-bottom: 1rem;
                text-align: center;
                font: {
                    size: 20px;
                    weight: 400;
                }
            }

            p {
                font: {
                    size: 16px;
                    weight: 300;
                }
                width: 100%;
                text-align: justify;
            }
        }
    }

    .article-box {
        position: relative;
        width: 100%;
        line-height: 0;
    }

    .center {
        width: 100%;
        .image-holder {
            margin-top: 2rem;
            max-width: 100%;
            img {
                max-width: 100%;
            }
        }
    }

    .h3-box {
        position: relative;
        width: 100%;
        top: -3.5rem;
        text-align: center;

        h3 {
            color: $primary-light;
            font: {
                size: 35px;
                weight: 600;
            }
        }
    }
}

@media screen and (min-width: 350px) {
    .article-top {
        .center {
            .article-title {
                h2::before,
                h2::after {
                    width: 15%;
                }
                h2::before {
                    right: 0.5rem;
                }

                h2:after {
                    left: 0.5rem;
                }
            }
        }
        .container {
            p {
                font: {
                    size: 16px;
                }
            }
        }
    }
    .paragraphs-holder {
        .paragraph-box {
            p {
                font: {
                    size: 16px;
                    weight: 300;
                }
            }
        }
    }
}

@media screen and (min-width: 375px) {
    .center {
        .article-title {
            h2::before,
            h2::after {
                width: 19%;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .container {
        width: unset;
        margin: 0 auto;
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        border-bottom: 1px solid $primary;
        padding-bottom: 2rem;

        .article-title {
            text-align: center;

            h2 {
                font: {
                    size: 30px;
                    weight: 300;
                }
            }

            h2::before,
            h2::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 19%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h2::before {
                right: 1rem;
            }
            h2:after {
                left: 1rem;
            }
        }
    }

    .paragraphs-holder {
        width: 90%;

        .paragraph-box {
            p {
                margin: 0 auto;
                padding: 1rem 0 1rem 0;
                text-align: center;
                font: {
                    size: 16px;
                    weight: 300;
                }
            }
        }
    }

    .photo-box {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;

        .article-box {
            width: 37rem;
            p {
                text-align: center;
            }
        }
    }

    .last {
        margin: 0 auto;
    }
}

@media screen and (min-width: 1024px) {
    .section {
        top: 0;
    }

    .center {
        width: unset;
        margin: 3rem auto 0 auto;
    }

    .contact-paragraph {
        max-width: unset;
        margin: 2rem auto 0 auto;

        .center {
            h3 {
                padding-bottom: unset;
            }
            p {
                text-align: center;
            }
        }
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        border-bottom: 1px solid $primary;
        padding: 1rem 0 3rem 0;

        .article-title {
            padding: unset;
            text-align: center;

            h2 {
                font: {
                    size: 30px;
                    weight: 300;
                }
            }

            h2::before,
            h2::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 14rem;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h2::before {
                right: 1rem;
            }
            h2:after {
                left: 1rem;
            }
        }

        p {
            width: 47rem;
            margin: 0 auto;
            padding: 1rem 0 1rem 0;
            text-align: center;
            font: {
                size: 14px;
                weight: 300;
            }
            strong {
                font: {
                    weight: 500;
                }
            }
        }
    }

    .paragraphs-holder {
        max-width: 100%;
        margin: 2rem auto 0 auto;
        display: flex;

        .paragraph-box {
            width: 30%;
            margin: 0 auto;

            h4 {
                text-align: center;
                font: {
                    size: 20px;
                    weight: 400;
                }
            }

            p {
                width: 100%;
                text-align: justify;
            }
        }
    }

    .photo-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
        padding: 0;
        max-width: 80rem;

        .article-box {
            width: 33.333%;
            .center {
                margin: 0 auto;
                .article-image {
                    h3 {
                        position: relative;
                        width: 100%;
                        text-align: center;
                        top: -5rem;
                        font: {
                            size: 30px;
                            width: 700;
                            style: italic;
                        }
                        text-transform: uppercase;
                        color: $primary-soft;
                    }
                }
            }
        }
    }

    .last {
        margin: unset;
    }
}

@media screen and (min-width: 1280px) {
    .paragraphs-holder {
        max-width: 80rem;
    }
}
</style>
