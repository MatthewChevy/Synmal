<template>
    <section class="section">
        <div class="container">
            <div class="why-us" data-aos="zoom-in">
                <h2>Prečo si vybrať práve nás ?</h2>
                <p>
                    Maľovanie so sebou nesie riziká, niektoré sa ukážu až pri
                    samotnom maľovaní. Za 2 dekády vykonávania nášho remesla sme
                    si prešli už naozaj všetkým. Zvolíme vždy ten najlepší
                    spôsob prípravy podkladu. Pleseň, mastný povrch, praskliny,
                    zadymené alebo mokré steny pre nás nie sú problém.
                </p>
            </div>
            <div class="notes-box">
                <div class="list-box">
                    <ul>
                        <li data-aos="fade-right">
                            Široké možnosti maliarskych prác
                        </li>
                        <li data-aos="fade-right">Bezplatná obhliadka</li>
                        <li data-aos="fade-right">Záruka je samozrejmosťou</li>
                        <li data-aos="fade-right">Upratovanie po prácach</li>
                        <li data-aos="fade-right">20 rokov skúseností</li>
                        <li data-aos="fade-right">
                            Pracujeme aj počas víkendu
                        </li>
                        <li data-aos="fade-right">Individuálny prístup</li>
                        <li data-aos="fade-right">Odborne vykonaná práca</li>
                    </ul>
                </div>

                <div class="paragraph-box" data-aos="fade-up">
                    <p>
                        <strong>Liptov a okolie</strong> - miesto kde pôsobíme.
                        Treba Vám čokoľvek vymalovať ? Neváhajte nás
                        kontaktovať, tešíme sa na Vás.
                    </p>
                    <div class="button">
                        <the-path-button
                            :textButton="'Kontaktovať'"
                            :path="'contact'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ThePathButton from '../ThePathButton.vue'

export default {
    components: {
        ThePathButton
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .section {
        width: 100%;
        position: relative;
        background-color: $primary-light;
        padding-top: 1rem;
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;
        text-align: center;
    }

    .why-us {
        margin: 0 auto;

        h2 {
            margin: 2rem 0 1.5rem 0;
            font-size: 20px;
            font-weight: 300;
        }

        h2::before,
        h2::after {
            content: '⬤';
            position: relative;
            top: -0.4rem;
            color: $fancy;
            background: $fancy;
            font: {
                size: 5px;
            }
        }

        h2::after {
            left: 0.15rem;
        }

        h2::before {
            right: 0.15rem;
        }

        p {
            width: 100%;
            margin: 0 auto;
            text-align: justify;
            font: {
                weight: 300;
            }
        }
    }

    .notes-box {
        align-items: center;
        padding: 2rem 0;
        width: 100%;
        margin: 0 auto;
    }

    .list-box {
        margin: 0 auto;
        border-top: 1px solid $fancy;
        border-bottom: 1px solid $fancy;
        padding: 2rem 0;

        ul {
            margin: 0 auto;
            text-align: left;
            li {
                padding: 0.15rem 0;
                font: {
                    weight: 300;
                }
            }

            li::before {
                content: '>';
                color: $fancy;
                padding-right: 0.5rem;
            }
        }
    }

    .paragraph-box {
        width: 100%;
        padding-top: 2rem;
        text-align: justify;
        font: {
            weight: 300;
        }

        .button {
            text-align: center;
            margin: 2rem 0;
        }
    }
}

@media screen and (min-width: 350px) {
    .why-us {
        h2::before,
        h2::after {
            content: '';
            display: inline-block;
            width: 6%;
            border: 0.25px solid $fancy;
        }

        h2::after {
            left: 0.25rem;
        }

        h2::before {
            right: 0.25rem;
        }
    }
}

@media screen and (min-width: 375px) {
    .why-us {
        h2::before,
        h2::after {
            width: 10%;
        }

        h2::after {
            left: 0.5rem;
        }

        h2::before {
            right: 0.5rem;
        }
    }
}

@media screen and (min-width: 500px) {
    .why-us {
        h2::before,
        h2::after {
            width: 15%;
        }

        h2::after {
            left: 0.75rem;
        }

        h2::before {
            right: 0.75rem;
        }
    }
}

@media screen and (min-width: 640px) {
    .paragraph-box {
        width: 35rem;
        margin: 0 auto;
    }
}

@media screen and (min-width: 768px) {
    section {
        padding-top: 1rem;
    }

    .container {
        width: $md-width-container;
    }

    .why-us {
        width: 100%;
        h2 {
            margin: 4rem 0 2rem 0;
            font-size: 20px;
            font-weight: 300;
        }

        h2::before,
        h2::after {
            content: '';
            display: inline-block;
            position: relative;
            width: 21%;
            top: -0.4rem;
            border: 0.25px solid $fancy;
            background: $fancy;
        }

        h2::after {
            left: 1rem;
        }

        h2::before {
            right: 1rem;
        }

        p {
            width: 100%;
            padding-top: 1rem;
            font: {
                weight: 300;
            }
        }
    }

    .notes-box {
        padding: 4rem 0 6rem 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .list-box {
        width: 22rem;
        padding: 0.5rem;
        ul {
            li {
                padding: 0.15rem 0;
                font: {
                    weight: 300;
                }
            }
        }
    }

    .paragraph-box {
        width: 25rem;
        border-left: 1px solid $fancy;
        padding-left: 0.8rem;

        font: {
            weight: 300;
        }

        .button {
            margin-top: 2rem;
        }
    }
}

@media screen and (min-width: 1024px) {
    section {
        padding-top: 1rem;
    }

    .container {
        width: $lg-width-container;
    }

    .why-us {
        h2 {
            margin: 4rem 0 2rem 0;
            font-size: 20px;
            font-weight: 300;
        }

        h2::before,
        h2::after {
            content: '';
            display: inline-block;
            position: relative;
            width: 29%;
            top: -0.4rem;
            border: 0.25px solid $fancy;
            background: $fancy;
        }

        h2::after {
            left: 1rem;
        }

        h2::before {
            right: 1rem;
        }

        p {
            width: 55rem;
            padding-top: 1rem;
            text-align: center;
            font: {
                weight: 300;
            }
        }
    }

    .notes-box {
        width: 100%;
    }

    .list-box {
        padding: 1rem;
        ul {
            li {
                padding: 0.15rem 0;
                font: {
                    weight: 300;
                }
            }
        }
    }

    .paragraph-box {
        width: 47%;
        padding-left: 3rem;
        font: {
            weight: 300;
        }

        .button {
            margin-top: 2rem;
        }
    }
}
</style>
