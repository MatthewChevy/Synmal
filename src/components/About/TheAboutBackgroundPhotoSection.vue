<template>
    <section>
        <div class="background">
            <div class="container">
                <h2>Rýchlosť, Odbornosť, Spoľahlivosť</h2>
                <p>
                    Chcete nás videť v plnom nasadení ? Pozrite na do našej
                    <a @click="$router.push({ path: 'gallery' })">Galérie</a>
                </p>

                <aside>
                    Naša práca je založená na individuálnom prístupe - snažíme
                    sa nájsť optimálne finančné riešenie pre jednotlivcov ako aj
                    organizácie pri dodržaní kvality práce.
                </aside>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    section {
        position: relative;
        background-image: url('../../assets/img/DCS01.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
        height: 27rem;
        top: -3rem;

        .background {
            position: relative;
            background-color: rgba(0, 0, 0, 0.3);
            background-size: cover;
            background-position: center center;
            z-index: 2;
            height: 27rem;
        }
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;

        h2 {
            margin: 0 auto;
            position: relative;
            padding-top: 3rem;
            padding-bottom: 1rem;
            z-index: 3;
            font: {
                size: 30px;
                weight: 500;
            }
            text-transform: uppercase;
            color: $primary-soft;
            text-align: center;
        }

        p {
            margin: 0 auto;
            padding-bottom: 3rem;
            font: {
                size: inherit;
                weight: 300;
            }
            text-align: center;
            color: $primary-soft;
            border-bottom: 1px solid $primary-soft;
            a {
                text-decoration: underline;
                font-style: italic;
                cursor: pointer;
            }
        }

        aside {
            margin: 1rem auto;
            padding-top: 2rem;
            font: {
                size: inherit;
                weight: 300;
            }
            text-align: center;
            color: $primary-soft;
        }
    }
}

@media screen and (min-width: 960px) {
    section {
        background-attachment: fixed;
        height: 30rem;

        .background {
            height: 30rem;
        }
    }

    .container {
        width: $lg-width-container;
        padding-top: 4rem;
        h2 {
            font: {
                size: 40px;
                weight: 500;
            }
        }

        p {
            font: {
                size: 20px;
                weight: 400;
            }
        }

        aside {
            font: {
                size: 20px;
                weight: 500;
            }
        }
    }
}
</style>
