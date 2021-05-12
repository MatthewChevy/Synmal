<template>
    <section class="section-title">
        <div class="container-titles">
            <div class="text-top">
                <div class="h2-box">
                    <h2>Jozef Zigo</h2>
                </div>
            </div>
            <div class="span-box">
                <span class="span"></span>
            </div>
            <div class="text-bottom">
                <div class="h1-box">
                    <h1 class="h1">
                        Realizujeme maliarske práce na Liptove a okolí
                    </h1>
                </div>
            </div>
            <div class="button">
                <div class="contact-link-button">
                    <a
                        class="contact-link"
                        tabindex="1"
                        @click="$router.push({ path: 'contact' })"
                    >
                        Kontakt
                    </a>
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
            sectionTitle: Object
        }
    },

    mounted() {
        this.sectionTitle = document.getElementsByClassName('section-title')[0]
        window.addEventListener('scroll', () => {
            this.titleParallax()
        })
    },

    methods: {
        titleParallax() {
            if (this.actualyWidnowSize >= this.breakpoint) {
                //1024+
                this.parallax(this.sectionTitle, window.scrollY,-0.3)
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .section-title {
        position: absolute;
    }

    .text-top {
        position: absolute;
        width: 100%;
        top: 11rem;
        animation: textTopFadeIn 1s 0.5s ease-in-out both;

        .h2-box {
            width: 100vw;
            text-align: center;
            h2 {
                width: 100vw;
                position: absolute;
                color: $primary-soft;
                text-transform: uppercase;
                font: {
                    size: 28px;
                    weight: 500;
                    family: $font-lora;
                }
            }
        }
    }

    .span-box {
        position: absolute;
        width: 100vw;
        top: 15.5rem;
        display: flex;
        justify-content: center;

        .span {
            display: block;
            position: absolute;
            width: unset;
            height: 0.15rem;
            background-color: $primary-soft;
            animation: spanFadeIn 0.5s 0.25s ease-in-out both;
        }
    }

    .text-bottom {
        position: absolute;
        width: 100vw;
        display: flex;
        justify-content: center;
        top: 18rem;
        text-align: left;
        opacity: 0;
        animation: textBottomFadeIn 0.5s 1s ease-in-out forwards;

        h1 {
            width: 90vw;
            max-width: 35rem;
            text-align: center;
            color: $primary-soft;
            padding-bottom: 3rem;
            letter-spacing: 1px;
            line-height: 45px;
            font: {
                size: 40px;
                family: $font-lora;
                weight: 400;
            }
        }
    }

    .button {
        position: absolute;
        top: 30rem;
        width: 100vw;
        text-align: center;

        .contact-link-button {
            width: 14rem;
            margin: 0 auto;
            padding: 7px 20px;
            color: $primary-soft;
            border: 1.5px solid $primary-soft;
            background-color: transparent;
            cursor: pointer;
            opacity: 0;
            animation: contactButtonFadeIn 0.5s 1.25s ease-in-out forwards;

            a {
                letter-spacing: 2px;
                font: {
                    size: 20px;
                    weight: 300;
                }
            }
        }
    }

    @keyframes spanFadeIn {
        0% {
            width: 0rem;
        }

        100% {
            width: 20rem;
        }
    }

    @keyframes textTopFadeIn {
        0% {
            transform: scaleY(0%);
            opacity: 0;
        }

        100% {
            transform: scaleY(100%);
            opacity: 1;
        }
    }

    @keyframes textBottomFadeIn {
        0% {
            transform: translateY(-20%);
            opacity: 0;
        }

        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    @keyframes contactButtonFadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}

@media screen and (min-width: 1024px) {
    .section-title {
        position: fixed;
        width: 100%;
        margin: 0 auto;
        top: -5rem;
    }

    .container-titles {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        top: 18rem;
        margin: 0 auto;
        text-align: center;
    }

    .text-top {
        top: 0rem;
        text-align: center;

        .h2-box {
            h2 {
                top: 0px;
                font: {
                    size: 35px;
                }
            }
        }
    }

    .span-box {
        top: 4.7rem;
    }

    .text-bottom {
        top: 0rem;
        max-width: 55rem;
        margin: 0 auto;
        padding-top: 6rem;

        .h1-box {
            h1 {
                line-height: 80px;
                letter-spacing: 2px;
                max-width: 60rem;
                font: {
                    size: 62px;
                }
            }
        }
    }

    .button {
        top: 21rem;
    }

    .contact-link-button {
        max-width: 14rem;
    }

    .contact-link-button:hover,
    :focus {
        transition: 0.5s;
        transform: scale(1.1, 1.1);
    }

    @keyframes spanFadeIn {
        0% {
            width: 0rem;
        }
        100% {
            width: 30rem;
        }
    }
}
</style>
