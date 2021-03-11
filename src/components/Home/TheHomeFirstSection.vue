<template>
    <section class="first-section">
        <div class="first-section-container">
            <div class="first-section-h3-wrapper-flex">
                <div class="first-section-h3-wrapper">
                    <h3>
                        Široké možnosti maliarskych prác a vysoká kvalita je
                        našou samozrejmosťou.
                    </h3>
                </div>
            </div>
            <aside class="first-section-decorative-circle"></aside>

            <div class="first-section-images-handler">
                <div class="first-section-image-first">
                    <img
                        src="../../assets/img/gallery/IMG_20200908_115947.jpg"
                        alt="Roof painting"
                    />
                </div>
                <div class="first-section-image-second">
                    <img
                        src="../../assets/img/gallery/IMG_20200716_101559.jpg"
                        alt="Interior painting"
                    />
                </div>
                <div class="first-section-image-third">
                    <img
                        v-if="actualyWidnowSize > 1023"
                        src="../../assets/img/gallery/IMG_20200824_122152.jpg"
                        alt="Exterior painting"
                    />
                    <img
                        v-if="actualyWidnowSize < 1024"
                        src="../../assets/img/gallery/IMG_20200824_122141.jpg"
                        alt="Exterior painting"
                    />
                </div>
            </div>
        </div>
        <aside class="first-section-decorative-rectangle"></aside>
        <aside class="first-section-decorative-line"></aside>
    </section>
</template>

<script>
import tableMixin from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixin]
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    .first-section {
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
        background-color: $primary-semi-dark;
        z-index: 1;
    }

    .first-section-container {
        max-width: 95%;
        margin: 0 auto;
        padding: 1.5rem 0;
    }

    .first-section-h3-wrapper {
        max-width: 88%;
        margin-bottom: 1.5rem;

        h3 {
            color: $primary-light;
            font: {
                size: 14.5px;
                weight: 400;
            }
        }
    }

    .first-section-decorative-circle {
        position: absolute;
        width: 7rem;
        height: 7rem;
        right: 6%;
        margin-top: -3rem;
        z-index: 0;
        border-radius: 50%;
        background-color: $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);
    }

    .first-section-images-handler {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        z-index: 3;
    }

    .first-section-image-first {
        width: 49%;
        border-radius: 3px;
        height: fit-content;
        line-height: 0;
        border: 5px solid $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img {
            max-width: 100%;
        }
    }

    .first-section-image-second {
        width: 49%;
        height: fit-content;
        line-height: 0;
        border-radius: 3px;
        border: 5px solid $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);
        img {
            max-width: 100%;
        }
    }

    .first-section-image-third {
        width: 100%;
        margin-top: 0.3rem;
        line-height: 0;
        border-radius: 3px;
        border: 5px solid $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img {
            max-width: 100%;
        }
    }

    .first-section-decorative-rectangle {
        position: absolute;
        width: 100%;
        height: 30%;
        background-color: $primary-light;
        z-index: 1;
        bottom: 30%;
    }

    .first-section-decorative-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        right: 0.813rem;
        z-index: 0;
        background-color: $fancy;
        box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
    }
}

@media screen and (min-width: 375px) {
    .first-section-container {
        max-width: 85%;
        margin: 0 auto;
        padding: 1.5rem 0;
    }

    .first-section-h3-wrapper {
        max-width: 80%;
        margin-bottom: 1.5rem;
    }
}

@media screen and (min-width: 500px) {
    .first-section-h3-wrapper {
        h3 {
            font: {
                size: 17px;
            }
        }
    }
}

@media screen and (min-width: 640px) {

    .first-section-h3-wrapper {
        max-width: 71%;
        margin-bottom: 1.5rem;

        h3 {
            color: $primary-light;
            font: {
                size: 20px;
                weight: 400;
            }
        }
    }

    .first-section-decorative-circle {
        width: 11rem;
        height: 11rem;
        margin-top: -6rem;
    }

    .first-section-image-first,
    .first-section-image-second,
    .first-section-image-third {
    }

    .first-section-container {
        width: 85%;
    }
}

@media screen and (min-width: 768px) {
    .first-section-container {
        width: 80%;
    }
}

</style>
