<template>
    <section class="section">
        <div class="container">
            <div class="decorative-bucket-box">
                <div class="decorative-bucket lg-screen">
                    <img
                        src="../../assets/img/jupol.png"
                        alt="Jupol bucket"
                    />
                </div>
                <div class="decorative-bucket-paragraph">
                    <p class="p-1">
                        Vo veľkej miere využívame produkty od firmy
                        <strong>JUB</strong>. Cenou, kvalitou a krycou
                        schopnosťou je pre nás veľkým favoritom.
                    </p>

                    <div class="decorative-bucket sm-screen">
                        <img
                            src="../../assets/img/jupol.png"
                            alt="Jupol bucket"
                        />
                    </div>

                    <p class="p-2">
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
        width: $container;
        margin: 0 auto;
    }

    .decorative-bucket-box {
        align-items: center;
        width: 100%;
        margin: 0 auto;
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
            text-align: center;
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


</style>
