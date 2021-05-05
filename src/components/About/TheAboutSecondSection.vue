<template>
    <section class="section">
        <div class="container">
            <aside class="cartoon-person" data-aos="fade-right">
                <img
                    src="../../assets/img/decoration/person2.png"
                    alt="Cartoon person"
                />
            </aside>

            <span class="decorative-circle-box">
                <div class="decorative-circle-bigger" data-aos="fade-left">
                    <div
                        class="decorative-circle-smaller"
                        data-aos="fade-left"
                    ></div>
                </div>
            </span>

            <article class="article">
                <div class="h2-box" data-aos="fade-down">
                    <h2>Naše úspechy</h2>
                </div>

                <div class="top-box">
                    <div class="top-box-paragraph" data-aos="fade-right">
                        <p>
                            Náš najväčší úspech je že môžeme vykonávať remeslo
                            ktoré nás už dlhé roky baví napĺňa a pomáha ľudom
                        </p>
                    </div>
                </div>

                <div class="bottom-box">
                    <div class="bottom-box-paragraph" data-aos="fade-left">
                        <p>
                            Jaslovské Bohunice, Bešeňová, VW Group, alebo Mondi
                            S.C.P. sú spoločnosti s ktorým sme mali možnosť
                            pomôcť vymaľovať ich priestory.
                        </p>
                    </div>
                </div>

                <div class="article-paragraph lg">
                    <div class="paragraph-box" data-aos="fade-right">
                        <p>
                            Náš najväčší úspech je že môžeme vykonávať remeslo
                            ktoré nás už dlhé roky baví napĺňa a pomáha ľudom.
                            Jaslovské Bohunice, Bešeňová, VW Group, alebo Mondi
                            S.C.P. sú spoločnosti s ktorým sme mali možnosť
                            pomôcť vymaľovať ich priestory.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixins],

    data() {
        return {
            smallCircle: Object,
            bigCircle: Object
        }
    },

    mounted() {
        this.smallCircle = document.getElementsByClassName(
            'decorative-circle-smaller'
        )[0]
        this.bigCircle = document.getElementsByClassName(
            'decorative-circle-bigger'
        )[0]

        window.addEventListener('scroll', () => {
            this.parallax(this.smallCircle, window.scrollY, 0.1)
            this.parallax(this.smallCircle, window.scrollY, 0.05)
        })
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .lg {
        display: none;
    }

    .section {
        position: relative;
        width: 100%;
        background: $primary-light;
        overflow-x: hidden;
    }

    .cartoon-person {
        position: relative;
        width: 5.688rem;
        height: 19.4rem;
        top: 2.6rem;
        right: 33%;
        margin: 0 auto;
        z-index: 4;

        img {
            max-width: 100%;
        }
    }

    .decorative-circle-box {
        .decorative-circle-bigger {
            position: absolute;
            width: 15rem;
            height: 15rem;
            top: 5rem;
            right: 0;
            background: $primary;
            border-radius: 50%;
            box-shadow: 5px 5px 5px rgba($darkest, 16%);

            .decorative-circle-smaller {
                position: relative;
                width: 6rem;
                height: 6rem;
                top: -1rem;
                right: 2rem;
                background: $fancy;
                border-radius: 50%;
                box-shadow: 5px 5px 5px rgba($darkest, 16%);
            }
        }
    }

    .article {
        position: relative;
        width: 100%;
        padding: 3rem 0 1rem 0;
        z-index: 1;
        background-color: $primary-light;
        border-top: 1px solid $primary;

        .h2-box {
            text-align: center;

            h2 {
                padding-bottom: 2.5rem;
                color: $primary-dark;
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
                right: 0.5rem;
            }
            h2::after {
                left: 0.5rem;
            }
        }

        .article-title {
            position: relative;
            margin: 0 auto;
            z-index: 1;
        }

        .top-box {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 100%;
            padding: 2rem 0;
            z-index: 2;
            background-color: $primary-soft;
            border-radius: 0 5px 5px 0;
            border-top: 1px solid $primary;
            border-bottom: 1px solid $primary;

            .top-box-paragraph {
                position: relative;
                max-width: 85%;
                text-align: justify;
                z-index: 2;

                p {
                    font: {
                        size: 14px;
                        weight: 300;
                    }
                }
            }
        }

        .bottom-box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 1rem;
            padding: 1rem 0;
            z-index: 1;
            background-color: $primary-light;

            .bottom-box-paragraph {
                width: $sm-width-container;
                position: relative;
                z-index: 3;

                p {
                    text-align: justify;
                    font: {
                        size: 14px;
                        weight: 300;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 350px) {
    .article {
        .h2-box {
            h2::before,
            h2::after {
                width: 13%;
            }

            h2::before {
                right: 1rem;
            }
            h2::after {
                left: 1rem;
            }
        }
        .top-box {
            .top-box-paragraph {
                p {
                    font: {
                        size: 16px;
                        weight: 300;
                    }
                }
            }
        }

        .bottom-box {
            .bottom-box-paragraph {
                p {
                    font: {
                        size: 16px;
                        weight: 300;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 660px) {
    .lg {
        display: block;
    }

    .article {
        padding: 5rem 0;
        background: rgb(240,240,240);
        background: radial-gradient(circle, rgba(240,240,240,1) 60%, rgba(255,255,255,1) 90%);
        box-shadow: none;

        .h2-box {
            h2::before,
            h2::after {
                width: 15%;
            }
        }

        .top-box,
        .bottom-box {
            display: none;
        }

        .article-title {
            h3 {
                color: $darkest;
            }
        }
    }

    .article-paragraph {
        .paragraph-box {
            width: 37rem;
            text-align: center;
            margin: 0 auto;
            text-align: justify;

            p {
                font: {
                    weight: 300;
                }
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .section {
        overflow-x: unset;
    }

    .cartoon-person {
        width: 7.688rem;
        height: 11.4rem;
        top: -11.3rem;
        left: -38%;
    }

    .decorative-circle-box {
        .decorative-circle-bigger {
            position: absolute;
            width: 15rem;
            height: 15rem;
            top: -2rem;
            right: 5rem;
        }
    }

    .paragraph-box {
        p {
            text-align: center;
            font: {
                weight: 300;
            }
        }
    }
}

@media screen and (min-width: 1280px) {
    .section {
        width: 100%;
    }

    .container {
        max-width: 80rem;
        margin: 0 auto;
    }

    .decorative-circle-box {
        .decorative-circle-bigger {
            right: 5rem;
            top: -7rem;
        }
    }
}
</style>
