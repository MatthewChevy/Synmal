<template>
    <section class="section">
        <header>
            <div class="h1-box">
                <h1>O nás</h1>
            </div>
        </header>

        <article class="article-box">
            <div class="article-paragraph">
                <p>
                    Sme spoločnosť, ktorej hodnoty sú postavené na úprimnosti,
                    poctivej práci a zodpovednému prístupu ku klientom. S
                    dlhoročnými skúsenosťami sme sa stali v našom odbore silnou
                    konkurenciou. Našou výhodou je zodpovednosť, spoľahlivosť.
                    Disponujeme bohatým technickým vybavením. Pôsobíme prevažne
                    na
                    <strong>Liptove</strong> ale po vzájomnej dohode robíme
                    kompromisy.
                </p>
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
        border-radius: 10px 10px 0 0;
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

@media screen and (min-width: 500px) {
    .section {
        margin-top: 2rem;
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
    }
}

@media screen and (min-width: 1024px) {
    .section {
        margin-top: 4rem;
    }

    .article-box{
        box-shadow: unset;

        .article-paragraph{
            p{
                text-align: center;
            }
        }
    }

    header {
        .h1-box {
            h1::before,
            h1::after {
                width: 14rem;
            }
        }
    }
}

</style>
