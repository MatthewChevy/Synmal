<template>
    <section class="section">
        <div class="container">
            <article class="article">
                <div
                    class="h2-box"
                    data-aos="fade-down"
                    v-if="actualyWidnowSize < breakpoint"
                >
                    <h2>Naše úspechy</h2>
                </div>

                <div class="article-image" data-aos="zoom-in">
                    <img
                        src="../../assets/img/decoration/trophy.png"
                        alt="cartoon trophy"
                    />
                </div>

                <div class="article-text" data-aos="fade-down">
                    <div
                        class="h2-box"
                        data-aos="fade-down"
                        v-if="actualyWidnowSize > breakpoint"
                    >
                        <h2>Naše úspechy</h2>
                    </div>
                    <p>
                        Pomohli sme zrekonštruovať priestory rodinám, veľkým aj
                        malým firmám, detské domovy, paneláky, domy a mnoho
                        iného. Za 20 rokov na Liptove, nie je kút v ktorom by
                        sme nedržali v ruke štetec a valec. Je to zadosťučinenie
                        prechádzať Liptovom a spomínať na to kde všade sme boli
                        a komu sme pomohli. Naša práca nás po dvoch dekádach
                        stále veľmi baví a nevieme si predstaviť robiť niečo
                        iné.
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import tableMixin from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixin]
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .section {
        position: relative;
        width: 100%;
        background: $primary-light;
        overflow-x: hidden;
    }

    .article {
        position: relative;
        width: 100%;
        padding: 3rem 0 1rem 0;
        z-index: 1;
        background-color: $primary-light;
        border-top: 1px solid $primary;

        .article-text {
            width: $sm-width-container;
            margin: 1.5rem auto;

            p {
                width: 100%;
                max-width: 30rem;
                margin: 0 auto;
                text-align: justify;
                font: {
                    size: 14px;
                    weight: 300;
                }

                strong {
                    font-weight: 500;
                }
            }
        }

        .article-image {
            width: 40%;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }

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

        .article-text {
            p {
                font: {
                    size: 16px;
                }
            }
        }
    }
}

@media screen and (min-width: 660px) {
    .article {
        padding: 5rem 0;
        box-shadow: none;

        .h2-box {
            h2::before,
            h2::after {
                width: 15%;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .article {
        .article-image {
            width: 30%;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .section {
        overflow-x: unset;
    }

    .container {
        max-width: 75rem;
        margin: 0 auto;
    }

    .article {
        display: flex;
        justify-content: center;
        align-items: center;

        .article-text {
            width: 30rem;
        }

        .article-image {
            img {
                width: 17rem;
            }
        }
    }
}

@media screen and (min-width: 1280px) {
    .section {
        width: 100%;
    }
}
</style>
