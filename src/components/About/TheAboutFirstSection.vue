<template>
    <section class="section">
        <article class="article-box" data-aos="fade-down">
            <div class="article-paragraph">
                <header>
                    <div class="h1-box" data-aos="fade-down">
                        <h1>O nás</h1>
                    </div>
                </header>
                <p>
                    <strong>Synmal</strong> je spoľahlivou firmou s dlhoročnými
                    skúsenosťami. Na trhu sme už od roku 2003, od vtedy sme sa
                    stali v našom odbore silnou konkurenciou. Disponujeme
                    bohatými zručnosťami a kvalitným technickým vybavením.
                    Pôsobíme prevažne na <strong>Liptove</strong>
                    ale po vzájomnej dohode robíme kompromisy. Naším hlavným
                    cieľom je maximálna spokojnosť klienta.
                </p>
            </div>
            <div class="article-image" data-aos="fade-right">
                <img
                    src="../../assets/img/decoration/wall-painter.png"
                    alt="Cartoon wall painter"
                />
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .section {
        position: relative;
        width: 100%;
        background: $primary-light;
        overflow-x: hidden;
    }

    header {
        .h1-box {
            text-align: center;
            padding-top: 4rem;

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
                width: 25%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h1::before {
                right: 1rem;
            }
            h1::after {
                left: 1rem;
            }
        }
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;
    }

    .article-box {
        position: relative;
        width: 100%;
        padding-top: 0.563rem;
        padding-bottom: 3rem;
        text-align: center;
        background-color: $primary-light;
        box-shadow: 5px 5px 6px rgba($darkest, 16%);

        .article-h2 {
            padding-top: 1rem;
            h2 {
                font: {
                    size: 25px;
                    weight: 400;
                }
            }
        }

        .article-paragraph {
            width: $sm-width-container;
            margin: 0 auto;

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
            padding-top: 2rem;
            width: 21rem;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }
}

@media screen and (min-width: 350px) {
    .article-box {
        .article-paragraph {
            p {
                font: {
                    size: 16px;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .article-box {
        .article-paragraph {
            margin: 0 auto;

            p {
                width: 37rem;
            }
        }

        .article-image {
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .section {
        padding-top: 5rem;
    }

    .article-box {
        box-shadow: unset;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header {
        .h1-box {
            padding-top: 2rem;
            h1::before,
            h1::after {
                width: 10rem;
            }
        }
    }

    .article-box {
        max-width: 80rem;
        margin: 0 auto;

        .article-paragraph {
            margin: 0 auto;

            p {
                max-width: 40rem;
                text-align: justify;
            }
        }

        .article-image {
            margin: 0 auto;
            width: 65%;
            padding-top: 1rem;
            img {
                max-width: 24rem;
            }
        }
    }
}
</style>
