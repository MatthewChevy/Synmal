<template>
    <header>
        <img
            class="welcome-image"
            src="../assets/img/brothers.jpg"
            alt="brothers"
        />
        <div class="title-wrapper">
            <div class="title-wrapper-center">
                <h1>Pár slov o nás a našej práci</h1>
            </div>
        </div>
    </header>

    <main>
        <section class="section">

            <div class="top-aside-box">
                <div class="right-side-rectangle">
                    <h4>
                        Za roky našej práce máme mnoho spokojných ľudí, ktorým
                        sme pomohli zveľadiť ich <strong>bytové</strong> a
                        <strong>nebytové</strong> priestory
                    </h4>
                </div>
            </div>

            <div class="bottom-aside-box">
                <div class="left-side-rectangle">
                    <h4>
                        Sme rodinná firma s 20 ročnými skúsenosťami
                    </h4>
                    <div class="decorative-paint-roller">
                        <img
                            src="../assets/img/paint-roller.png"
                            alt="Paint roller"
                        />
                    </div>
                </div>
            </div>

            <div class="center-box">
                <div class="center-box-h2">
                    <h2>Naše pôsobenie</h2>
                </div>
                <article class="center-box-paragraph">
                    <p>
                        Sme spoločnosť, ktorej hodnoty sú postavené na
                        úprimnosti, poctivej práci a zodpovednému prístupu ku
                        klientom. S dlhoročnými skúsenosťami sme sa stali v
                        našom odbore silnou konkurenciou. Našou výhodou je
                        zodpovednosť, spoľahlivosť. Disponujeme bohatým
                        technickým vybavením. Pôsobíme prevažne na
                        <strong>Liptove</strong> ale po vzájomnej dohode robíme
                        kompromisy.
                    </p>
                </article>
            </div>

        </section>

        <section class="second-section">

            <div class="cartoon-person">
                <img src="../assets/img/person2.png" alt="Cartoon person" />
            </div>

            <span class="decorative-circle-box">
                <div class="decorative-circle-bigger">
                    <div class="decorative-circle-smaller"></div>
                </div>
            </span>

            <article class="article">

                <div class="article-header-box">
                    <h3>Naše najväčšie úspechy</h3>
                </div>

                <div class="top-box">
                    <div class="top-box-paragraph">
                        <p>
                            Náš najväčší úspech je že môžeme vykonávať remeslo
                            ktoré nás už dlhé roky baví napĺňa a pomáha ľudom
                        </p>
                    </div>
                </div>

                <div class="bottom-box">
                    <div class="bottom-box-paragraph">
                        <p>
                            Jaslovské Bohunice, Bešeňová, VW Group, alebo Mondi
                            S.C.P. sú spoločnosti s ktorým sme mali možnosť
                            pomôcť vymaľovať ich priestory.
                        </p>
                    </div>
                </div>

                <span class="decorative-line"></span>

            </article>

        </section>

        <section class="thrid-section">
            <div class="container">

                <div class="thrid-section-layer-top">
                    <aside class="article-top-center">
                        <h3>Priebeh našej práce</h3>
                        <p>
                            Po kontakte s Vami urobíme osobnú prehliadku Vašich
                            priestorov, na základe ktorej vypracujeme cenovú
                            ponuku a dohodneme termín
                        </p>
                    </aside>
                </div>

                <div class="thrid-section-center">
                    <article class="article-left-side">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magnaqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis autrure dolor in
                            reprehenderit
                        </p>
                        <div class="image-before-paint">
                            <p>Fotka pred maľovaním</p>
                        </div>
                    </article>
                    <div class="thrid-section-cartoon-person">
                        <div class="thrid-section-cartoon-person-align">
                            <img
                                src="../assets/img/person.png"
                                alt="Cartoon person"
                            />
                        </div>
                    </div>
                    <div class="decoration-line-handler">
                        <div class="article-left-side-decoration-line-hr"></div>
                        <div class="article-left-side-decoration-line-vr"></div>
                        <div class="article-bottom-decoration-line-vr"></div>
                    </div>
                </div>
            </div>
            <article class="article-right-side">
                <div class="thrid-section-center">
                    <div class="article-right-side-paragraph-handler">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor dunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            itation ullamco laboris nisi ut aliquip ex commodo
                            consequat. Duis aute irure
                        </p>
                    </div>
                    <div class="image-painting-handler">
                        <div class="image-painting">
                            <p>Fotka počas maľovania</p>
                        </div>
                    </div>
                </div>
            </article>
            <article class="article-bottom">
                <div class="article-bottom-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor dunt ut labore et dolore magna
                        aliqua. Ut eni ad minim veniam, quis nostru
                    </p>
                    <div class="image-after-paint">
                        <p>Fotka po maľovaní</p>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <footer class="footer">
        <div class="footer-center">
            <div
                class="contact-link-button-wrapper"
                tabindex="1"
                @click="$router.push({ path: '/contact' })"
            >
                <p class="contact-link-button">Kontaktujte nás</p>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
//header------------------------------------
header {
    padding-top: 3.4rem;
}

.welcome-image {
    position: fixed;
    max-width: 100%;
    z-index: -2;
    opacity: 100%;
}

.title-wrapper {
    max-width: 18.75rem;
    height: 13rem;
    margin: 0 auto;

    h1 {
        position: fixed;
        width: 13rem;
        padding-top: 0.5rem;
        z-index: -1;
        color: $primary-dark;
        font: {
            size: 25px;
            weight: 700;
        }
    }
} 

//first-section-----------------------------

.section {
    position: relative;
    width: 100%;
    background: $primary-light;
    border-radius: 10px 10px 0 0;
}

.container {
    width: $sm-width-container;  
    margin: 0 auto;
}

.top-aside-box {
   padding-top: 2rem;
   width: 100%;

    .right-side-rectangle {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0.75rem 0; 
        background-color: $primary;
        border-radius: 5px 0 0 5px;

        h4 {
            width: 19rem;
            position: relative;
            text-align: center;
            margin: 0 auto;
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

.bottom-aside-box {

    .left-side-rectangle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62.5%;
        max-height: 4.7rem;
        margin: 3rem 0;
        padding: 1rem;
        z-index: 0;
        background-color: $fancy;
        box-shadow: 5px 5px 6px rgba($darkest, 16%);

        h4 {
            position: relative;
            width: 10.563rem;
            text-align: center;

            font: {
                size: 14px;
                weight: 300;
            }
        }
    
        .decorative-paint-roller {
            position: absolute;
            left: 65%;
            width: 4.9rem;
            transform: rotate3d(1, 1, 0, 180deg);
            img {
                width: 100%;
            }
        }
    }
}

.center-box {
    position: relative;
    width: 100%;
    padding-top: 0.563rem;
    padding-bottom: 3rem;
    text-align: center;
    box-shadow: 5px 5px 6px rgba($darkest, 16%);

    .center-box-h2 {
        h2 {
            font: {
                size: 25px;
                weight: 400;
            }
        }
    }

    .center-box-paragraph {
        width: $sm-width-container;
        margin: 2rem auto 0 auto;

        p {
            margin: 0 auto;
            text-align: center;
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

//second-section-----------------------------

.second-section {
    position: relative;
    width: 100%;
    background: $primary-semi-light;
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
    padding-bottom: 2rem;
    z-index: 1;
    background-color: $primary-dark;
    box-shadow: 8px 8px 5px rgba($darkest, 16%);

    .article-header-box {
        position: relative;
        width: 18.75rem;
        margin: 0 auto;
        z-index: 1;

        h3 {
            padding: 1.5rem 0;
            text-align: center;
            color: $primary-light;
            font: {
                size: 24px;
                weight: 700;
            }
        }
    }

    .top-box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 76%;
        padding: 1rem 0;
        z-index: 2;
        background-color: $primary;
        border-radius: 0 5px 5px 0;

        .top-box-paragraph{  
            position: relative;
            max-width: 85%;
            z-index: 2;

            p {
               font: {
                    size: 14px;
                    weight: 300;
                }
            }
        }

    }

    .bottom-box{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 4rem;
        padding: 1rem;
        z-index: 1;
        background-color: $primary-light;


        .bottom-box-paragraph {
            width: 90%;
            position: relative;
            z-index: 3;

            p {
                text-align: center;
                font: {
                    size: 14px;
                    weight: 300;
                }
            }
        }
    }

}

.decorative-line {
    position: absolute;
    width: 0.313rem;
    height: 100%;
    top: 0;
    left: 1rem;
    z-index: 0;
    background-color: $fancy;
}

//third-section-----------------------------

.thrid-section {
    position: relative;
    width: 100%;
    margin: 0 auto;
    background: $primary-semi-light;

    .container{
        width: $sm-width-container;
        margin: 0 auto;
    }
}

.thrid-section-layer-top {
    position: absolute;
    width: 100%;
    height: 12.5rem;
    top: -1.7rem;
    background: $primary-light;
    z-index: 0;
    border-bottom: 1px solid $primary;
}

.thrid-section-center {
    position: relative;
    width: 18.75rem;
    margin: 0 auto;
}

.article-top-center {
    text-align: center;
    h3 {
        font: {
            size: 24px;
            weight: 600;
        }
    }
    p {
        padding-top: 2rem;
        font: {
            size: 14.5px;
            weight: 400;
        }
    }
}

.article-left-side {
    position: relative;
    width: 16.563rem;
    top: 2.5rem;
    p {
        padding-left: 5px;
        max-width: 79%;
        font: {
            size: 10px;
            weight: 500;
        }
    }
    .image-before-paint {
        position: relative;
        width: 12.5rem;
        height: 16.563rem;
        top: 1rem;
        z-index: 3;
        border: 5px solid $primary-light;
        background-color: $primary-semi-dark;
        box-shadow: 5px 5px 5px rgba($darkest, 16%);
        p {
            min-width: 100%;
            padding-top: 7rem;
            text-align: center;
            font: {
                size: 11px;
                weight: 300;
            }
            color: $primary-light;
        }
    }
}

.thrid-section-cartoon-person {
    position: relative;
}

.thrid-section-cartoon-person-align {
    position: absolute;
    width: 4.438rem;
    height: auto;
    top: -12.3rem;
    left: 14.5rem;

    img {
        width: 100%;
    }
}

.decoration-line-handler {
    position: relative;
}

.article-left-side-decoration-line-hr {
    position: absolute;
    width: 18.013rem;
    height: 0.313rem;
    top: 0rem;
    left: 1.2rem;
    z-index: 2;
    background-color: $fancy;
    box-shadow: 5px 0px 1px rgba($darkest, 16%);
}

.article-left-side-decoration-line-vr {
    position: absolute;
    width: 0.313rem;
    height: 23.813rem;
    top: 0rem;
    left: 1.2rem;
    z-index: 2;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgba($darkest, 16%);
}

.article-bottom-decoration-line-vr {
    position: absolute;
    width: 0.313rem;
    height: 15rem;
    top: 18.6rem;
    left: 3.2rem;
    z-index: 2;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgba($darkest, 16%);
}

.article-right-side {
    position: relative;
    height: 28.1rem;
    margin-top: 5.5rem;
    z-index: 1;
    background-color: $primary-light;
    border-radius: 0 0 20px 20px;
    box-shadow: 8px 8px 5px rgba($darkest, 16%);
}

.article-right-side-paragraph-handler {
    width: 100%;
    padding-top: 2rem;
    padding-left: 5rem;
    text-align: right;

    p {
        margin-right: 5px;
        font: {
            size: 10px;
            weight: 500;
        }
    }
}

.image-painting-handler {
    margin-top: 1rem;
    margin-bottom: 3rem;
    padding-left: 6.1rem;
}

.image-painting {
    width: 12.5rem;
    height: 16.563rem;
    border: 5px solid $primary-light;
    background-color: $primary-semi-dark;
    box-shadow: 5px 5px 5px rgba($darkest, 16%);

    p {
        min-width: 100%;
        padding-top: 7rem;
        text-align: center;
        font: {
            size: 11px;
            weight: 300;
        }
        color: $primary-light;
    }
}

.article-bottom {
    position: relative;
    width: 100%;
    top: -1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    background-color: $primary-semi-dark;
    p {
        text-align: center;
        padding-top: 1.5rem;
        font: {
            size: 10px;
            weight: 400;
        }
        color: $primary-light;
    }

    .article-bottom-center {
        max-width: 300px;
        margin: 0 auto;
    }

    .image-after-paint {
        width: 300px;
        height: 180px;
        background-color: #ececec;
        border: 5px solid white;
        margin-top: 1.5rem;
        p {
            color: $darkest;
            padding-top: 5rem;
        }
    }
}

.footer {
    position: relative;
    width: 100%;
    height: 5rem;
    bottom: -48.6rem;
    z-index: 10;
    background-color: $primary-semi-dark;
}

.footer-center {
    max-width: 18.75rem;
    margin: 0 auto;
}

.contact-link-button-wrapper {
    width: 11rem;
    margin: 0 auto;
    text-align: center;
}

.contact-link-button {
    background-color: $fancy;
    padding: 1px 0px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
    cursor: pointer;
}

.contact-link-button:focus {
    background-color: $primary-light;
    transition: 0.25s;
}


@media screen and (min-width: 374px) {

}
</style>
