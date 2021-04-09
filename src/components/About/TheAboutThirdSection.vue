<template>
    <section class="section">
        <article class="article-top">
            <div class="center">
                <div class="article-title">
                    <h2>Priebeh práce</h2>
                </div>
                <div class="contact-paragraph">
                    <div class="center">
                        <h3>Kontakt</h3>
                        <p>
                            Po kontakte s Vami urobíme osobnú prehliadku Vašich
                            priestorov, na základe ktorej vypracujeme cenovú
                            ponuku a dohodneme termín
                        </p>
                    </div>
                </div>

                <div class="paragraphs-holder">
                    <div class="paragraph-box">
                        <h4>Pred maľovaním</h4>
                        <p>
                            Všetko dôkladne zalepíme a pozakrývame fóliou. Tento
                            proces bývá časovo najnáročnejší. Pri strojovom
                            maľovaní si lepenie vyžaduje ešte väčšiu dôslednosť.
                        </p>
                    </div>

                    <div class="paragraph-box center-box">
                        <h4>Počas maľovania</h4>
                        <p>
                            V tejto fáze sa ukážu všetky nedostatky ako
                            napríklad praskliny na stenách, strope alebo okolo
                            okien. Všetko čo treba povyspravujeme a zasádrujeme.
                        </p>
                    </div>

                    <div class="paragraph-box">
                        <h4>Po maľovaní</h4>
                        <p>
                            Ak sme s výsledkom spokojný môžeme začať s
                            upratovacími prácami. Všetko dôklade vyzametáme,
                            poumývame a povysávame. Po skončení sa možete tešiť
                            z vymalovných priestorov.
                        </p>
                    </div>
                </div>
            </div>
        </article>

        <div class="photo-box">
            <article class="article-box">
                <div class="center">
                    <div class="image-holder">
                        <img
                            src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg"
                            alt="before"
                        />
                    </div>
                    <div class="h3-box">
                        <h3>Pred</h3>
                    </div>
                </div>
            </article>

            <article class="article-box">
                <div class="center">
                    <div class="image-holder">
                        <img
                            src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg"
                            alt="in progress"
                        />
                    </div>
                    <div class="h3-box">
                        <h3>Počas</h3>
                    </div>
                </div>
            </article>

            <article class="article-box last">
                <div class="center">
                    <div class="image-holder">
                        <img
                            src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg"
                            alt="after"
                        />
                    </div>
                    <div class="h3-box">
                        <h3>Po</h3>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

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
        border-bottom: 1px solid $primary;
        padding-bottom: 2rem;

        .article-title {
            padding-bottom: 3rem;
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
                right: 0.5rem;
            }
            h2:after {
                left: 0.5rem;
            }
        }
    }

    .contact-paragraph {
        width: $sm-width-container;
        margin: 0 auto;

        .center {
            text-align: center;
            h3 {
                padding-bottom: 1rem;
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
    }

    .paragraphs-holder {
        width: $sm-width-container;
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

    .photo-box {
    }

    .article-box {
        position: relative;
        width: 100%;
        line-height: 0;

        .center {
            .image-holder {
                max-width: 100%;

                img {
                    max-width: 100%;
                }
            }

            .h3-box {
                position: absolute;
                z-index: 5;
                bottom: 2rem;
                width: 100%;
                display: flex;
                justify-content: center;
                h3 {
                    font: {
                        size: 30px;
                    }
                    text-transform: uppercase;
                    letter-spacing: -1.5px;
                    color: white;
                }
            }
        }
    }
}

@media screen and (min-width: 350px) {
    .article-top {
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
            padding: 0;
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
            h3 {
            }
            p {
                margin: 0 auto;
                padding: 1rem 0 1rem 0;
                text-align: center;
                font: {
                    size: 14px;
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
    .center {
        width: unset;
        margin: 0 auto;
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        border-bottom: 1px solid $primary;
        padding: 3rem 0 5rem 0;

        .article-title {
            padding: 0;
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
            width: 37rem;
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
        width: 60rem;
        margin: 3rem auto 0 auto;
        display: flex;

        .center-box::before {
            position: absolute;
            display: inline-block;
            content: '';
            width: 1px;
            height: 17rem;
            top: 12rem;
            color: $fancy;
            margin-left: -1rem;
            background-color: $fancy;
        }

        .center-box::after {
            position: absolute;
            display: inline-block;
            content: '';
            width: 1px;
            height: 17rem;
            top: 12rem;
            color: $fancy;
            margin-right: -1rem;
            background-color: $fancy;
        }

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
        padding: 4rem 0;

        .article-box {
            width: 33.333%;
            .center {
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

// @media screen and ( min-width: 1200px ) {

//     .article-box{
//         width: 21rem;
//         p{
//             text-align: center;
//             width: 100%;
//             margin: 0 auto;
//         }
//     }

//     .photo-box{
//         display: flex;
//         justify-content: space-between;
//         flex-wrap: wrap;
//         width: 70rem;
//         margin: 0 auto;
//         padding: 4rem 0;
//     }

//     .last{
//         margin: unset
//     }

// }
</style>
