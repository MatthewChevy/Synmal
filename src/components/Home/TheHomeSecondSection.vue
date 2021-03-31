<template>
    <section class="section">
        <div class="container">
            <div class="h3-handler">
                <h3>
                    Interérové a exterierové nátery stien a fasád realizujeme aj
                    <strong>strojovím maľovaním</strong>
                </h3>
            </div>
            <article>
                <div class="airless-box">
                    <div class="logo-holder">
                        <img
                            class="sm-screen"
                            src="../../assets/img/wagner.png"
                            alt="wagner logo"
                        />
                    </div>
                    <div class="flex">
                        <div class="paragraph-box">
                            <div class="logo-holder">
                                <img
                                    class="lg-screen"
                                    src="../../assets/img/wagner.png"
                                    alt="wagner logo"
                                />
                            </div>
                            <p class="p-1">
                                Pracujeme s prvotriednou technológiou od firmy
                                <strong>WAGNER</strong>. Primárnou výhodou
                                vysokotlakových bezvzduchových striekacích
                                zariadení je vysoký plošný výkon, rýchlosť a
                                nízky odpad striekaného materiálu.
                            </p>
                            <div class="paint-machine-image sm-screen">
                                <img
                                    src="../../assets/img/wagner-machine.jpg"
                                    alt="airless painting unit"
                                />
                            </div>
                            <p class="p-2">
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
                                src="../../assets/img/wagner-machine.jpg"
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

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    .sm-screen {
        display: block;
    }

    .lg-screen {
        display: none;
    }

    .section {
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
        text-align: right;
    }

    .h3-handler {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0;

        h3 {
            color: $darkest;
            font-size: 19px;
            font-weight: 400;
        }
    }

    article {
        max-width: 100%;
        margin: 0 auto;
    }

    .airless-box {
        align-items: center;
        margin: 0 auto 5rem auto;
    }

    .logo-holder {
        width: 80%;
        padding: 1rem 0;

        img {
            width: 100%;
        }
    }

    .p-1,
    .p-2 {
        text-align: left;
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
        width: 95%;
        margin: 0 auto;
        text-align: right;
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

@media screen and (min-width: 500px) {
    .p-1 {
        width: 26rem;
    }
}

@media screen and (min-width: 640px) {
    .h3-handler {
        width: 28rem;
        margin: 2rem 0;
    }

    .logo-holder {
        width: 24rem;
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
        width: 34rem;
        margin: 0rem auto;
        padding: 0;
        text-align: right;

        h3 {
            font-size: 20px;
            font-weight: 300;
        }
    }

    .logo-holder {
        display: block;
        width: 22rem;
    }

    .paint-machine-image {
        width: 60%;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        text-align: left;
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
        display: flex;
        justify-content: flex-end;
        width: 93%;
        margin: 2rem auto;
        padding: 0;

        h3 {
            width: 38rem;
            font-size: 20px;
            font-weight: 300;

            strong{
                font:{
                    weight: 400
                }
            }
        }
    }

    article {
        max-width: 60rem;
    }

    .airless-box {
        margin: 0 auto 5rem auto;
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

    .flex{
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
