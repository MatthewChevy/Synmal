<template>
    <section class="section">
        <div class="container">
            <div class="decorative-bucket-box">
                <div class="decorative-bucket lg-screen" data-aos="fade-right">
                    <img
                        src="../../assets/img/decoration/jupol.png"
                        alt="Jupol bucket"
                    />
                </div>
                <div class="decorative-bucket-paragraph">
                    <p class="p-1" data-aos="fade-left">
                        Vo veľkej miere využívame produkty od firmy
                        <strong>JUB</strong>. Cenou, kvalitou a krycou
                        schopnosťou je pre nás veľkým favoritom.
                    </p>

                    <div
                        class="decorative-bucket sm-screen"
                        data-aos="fade-right"
                    >
                        <img
                            src="../../assets/img/decoration/jupol.png"
                            alt="Jupol bucket"
                        />
                    </div>

                    <p class="p-2" data-aos="fade-left">
                        <strong>JUPOL</strong> Classic získal od nemeckého
                        inštitútu <i>eco-INSTITUT</i> certifikát, ktorý ju
                        zaraďuje do triedy A, čo znamená, že farba má veľmi
                        nízke emisie do priestoru a je šetrná pre životné
                        prostredie a spotrebiteľa.
                    </p>
                </div>
            </div>
            <aside class="decorative-line"></aside>
        </div>
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
        background-color: $primary-soft;
        border: {
            top: 1px solid $primary;
            bottom: 1px solid $primary;
        }
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;
    }

    .decorative-bucket-box {
        align-items: center;
        width: 100%;
        margin: 0 auto;
        overflow-x: hidden;
    }

    .decorative-bucket {
        position: relative;
        width: 70%;
        height: auto;
        margin: 3rem auto 3rem;

        img {
            max-width: 100%;
        }
    }

    .decorative-bucket-paragraph {
        width: 100%;

        p {
            text-align: justify;
            font: {
                weight: 300;
            }

            strong {
                font: {
                    weight: 500;
                }
            }
        }

        .p-1 {
            margin: 3rem 0;
        }
        .p-2 {
            margin-bottom: 3rem;
        }
    }

    .decorative-line {
        display: none;
    }
}

@media screen and (min-width: 500px) {
    .decorative-bucket-paragraph {
        p {
            text-align: center;
        }
    }
}

@media screen and (min-width: 768px) {
    .sm-screen {
        display: none;
    }

    .lg-screen {
        display: block;
    }

    .section {
        padding: 2.5rem 0;
    }

    .container {
        width: $md-width-container;
    }

    .decorative-bucket-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .decorative-bucket {
        width: 90%;
        img {
            max-width: 100%;
        }
    }

    .decorative-bucket-paragraph {
        width: 90%;
        padding-left: 2rem;
        p {
            font: {
                weight: 300;
            }

            strong {
                font: {
                    weight: 500;
                }
            }
        }

        .p-1 {
            margin-bottom: 2rem;
        }
    }

    .decorative-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        right: 0.813rem;
        z-index: 0;
        background-color: $fancy;
    }
}

@media screen and (min-width: 1024px) {
    .sm-screen {
        display: none;
    }

    .lg-screen {
        display: block;
    }

    .section {
        padding: 5rem 0;
    }

    .container {
        width: $lg-width-container;
    }

    .decorative-bucket-box {
        justify-content: space-evenly;
    }

    .decorative-bucket {
        width: 44%;
        margin: 0;
        img {
            max-width: 100%;
        }
    }

    .decorative-bucket-paragraph {
        width: 41%;
        padding-left: 2rem;
        p {
            font: {
                weight: 300;
            }

            strong {
                font: {
                    weight: 500;
                }
            }
        }

        .p-1 {
            margin-bottom: 2rem;
        }
    }

    .decorative-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        right: 0.813rem;
        z-index: 0;
        background-color: $fancy;
    }
}
</style>
