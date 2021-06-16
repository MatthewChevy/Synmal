<template>
    <section class="section">
        <div class="section-box">
            <div class="img"></div>
            <!-- <img
            
                src="../../assets/img/background/background2.jpg"
                alt="bg"
            /> -->
            <div class="background">
                <div class="container" data-aos="zoom-in">
                    <h2>Rýchlosť, Odbornosť, Spoľahlivosť</h2>
                    <p>
                        Chcete nás videť v plnom nasadení ? Pozrite sa do našej
                        <a
                            class="link"
                            @click="$router.push({ path: 'gallery' })"
                            >Galérie</a
                        >
                    </p>

                    <aside>
                        Naša práca je založená na individuálnom prístupe -
                        snažíme sa nájsť optimálne finančné riešenie pre
                        jednotlivcov ako aj organizácie pri dodržaní kvality
                        práce.
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixins],

    data() {
        return {
            wsvga: Boolean
        }
    },

    mounted() {
        this.windowSize()
    },

    methods: {
        windowSize() {
            this.actualyWidnowSize > this.breakpoint
                ? (this.wsvga = true)
                : (this.wsvga = false)
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .section {
        height: 29rem;
    }

    .section-box {
        .img {
            position: fixed;
            background-image: url('../../assets/img/background/background2.jpg');
            background-position: 50% 100%;
            height: 100vh;
            width: 100%;
            top: 3.4rem;
            z-index: -1;
        }

        .background {
            position: relative;
            background-color: rgba(0, 0, 0, 0.3);
            background-size: cover;
            background-position: center center;
            z-index: 2;
            height: 29rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;

        h2 {
            margin: 0 auto;
            position: relative;
            padding-bottom: 1rem;
            z-index: 3;
            letter-spacing: 1.5px;
            line-height: 2rem;
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
            .link {
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

@media screen and (min-width: 1024px) {
    .section-box {
        .background {
            height: 29rem;
        }
        .img {
            position: fixed;
            background-image: url('../../assets/img/background/background2.jpg');
            background-position: 0%;
            background-size: cover;
            height: 64rem;
            width: 100%;
            top: 0;
        }
    }
}
</style>
