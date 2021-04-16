<template>
    <section class="section">
        <aside class="cartoon-person">
            <img src="../../assets/img/person2.png" alt="Cartoon person" />
        </aside>

        <span class="decorative-circle-box">
            <div class="decorative-circle-bigger">
                <div class="decorative-circle-smaller"></div>
            </div>
        </span>

        <article class="article">
            <div class="article-title">
                <h3>Naše najväčšie úspechy</h3>
            </div>

            <div class="top-box">
                <div class="top-box-paragraph">
                    <p>
                        Náš najväčší úspech je že môžeme vykonávať remeslo ktoré
                        nás už dlhé roky baví napĺňa a pomáha ľudom
                    </p>
                </div>
            </div>

            <div class="bottom-box">
                <div class="bottom-box-paragraph">
                    <p>
                        Jaslovské Bohunice, Bešeňová, VW Group, alebo Mondi
                        S.C.P. sú spoločnosti s ktorým sme mali možnosť pomôcť
                        vymaľovať ich priestory.
                    </p>
                </div>
            </div>

            <div class="article-paragraph lg">
                <div class="paragraph-box">
                    <p>
                        Náš najväčší úspech je že môžeme vykonávať remeslo ktoré
                        nás už dlhé roky baví napĺňa a pomáha ľudom. Jaslovské
                        Bohunice, Bešeňová, VW Group, alebo Mondi S.C.P. sú
                        spoločnosti s ktorým sme mali možnosť pomôcť vymaľovať
                        ich priestory.
                    </p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js';

export default {

    mixins: [tableMixins],

    data() {
        return {
            smallCircle: Object,
            bigCircle: Object
        }
    },
    

    mounted(){

        this.smallCircle = document.getElementsByClassName('decorative-circle-smaller')[0]
        this.bigCircle =  document.getElementsByClassName('decorative-circle-bigger')[0]

            window.addEventListener( 'scroll', () => {
            this.parallax(this.smallCircle, window.scrollY, 0.1)
            this.parallax( this.smallCircle, window.scrollY, 0.05)
        })
    },
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
    }

    .cartoon-person {
        position: relative;
        width: 5.688rem;
        height: 18.4rem;
        top: -1.3rem;
        right: 33%;
        margin: 0 auto;
        z-index: 1;

        img {
            max-width: 100%;
        }
    }

    .decorative-circle-box {
        .decorative-circle-bigger {
            position: absolute;
            width: 15rem;
            height: 15rem;
            top: 3rem;
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
        top: -3rem;
        padding: 3rem 0 2rem 0;
        z-index: 1;
        background-color: $primary-light;
        box-shadow: 8px 8px 5px rgba($darkest, 16%);

        .article-title {
            position: relative;
            margin: 0 auto;
            z-index: 1;

            h3 {
                padding-bottom: 3rem;
                text-align: center;
                color: $darkest;
                font: {
                    size: 30px;
                    weight: 300;
                }
            }
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
        border-top: 1px solid $primary;
        border-bottom: 1px solid $primary;
        background-color: $primary-light;
        box-shadow: none;

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
        }
    }
}

@media screen and (min-width: 1024px) {


    .cartoon-person {
        width: 7.688rem;
        height: 11.4rem;
        top: -14.3rem;
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

    .paragraph-box{
        p{
            text-align: center;
        }
    }
}

@media screen and (min-width: 1280px) {
    .section{
        max-width: 80rem;
        margin: 0 auto;
    }

    .decorative-circle-box{
        .decorative-circle-bigger{
            right: 7rem;
        }
    }
}
</style>
