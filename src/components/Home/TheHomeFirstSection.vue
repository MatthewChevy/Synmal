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

            <article class="photo-box">
                <div class="image">
                    <img
                        src="../../assets/img/gallery/IMG_20200908_115947.jpg"
                        alt="Roof painting"
                    />
                </div>
                <div class="image">
                    <img
                        src="../../assets/img/gallery/IMG_20200716_101559.jpg"
                        alt="Interior painting"
                    />
                </div>
                <div class="image">
                    <img
                        src="../../assets/img/gallery/IMG_20200824_122152.jpg"
                        alt="Exterior painting"
                    />
                </div>
            </article>

            <article class="photo-slider">
                <splide :options="options">
                    <splide-slide>
                        <img
                            src="../../assets/img/gallery/IMG_20200908_115947.jpg"
                            alt="Roof painting"
                        />  
                    </splide-slide>
                    <splide-slide>
                        <img
                            src="../../assets/img/gallery/IMG_20200716_101559.jpg"
                            alt="Interior painting"
                            />
                    </splide-slide>
                    <splide-slide>   
                        <img
                            src="../../assets/img/gallery/IMG_20200824_122152.jpg"
                            alt="Exterior painting"
                        /> 
                    </splide-slide>
                </splide>
            </article>
        </div>
        <aside class="first-section-decorative-rectangle"></aside>
        <aside class="first-section-decorative-line"></aside>
    </section>
</template>

<script>
import tableMixin from '../../mixins/tableMixins.js'

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    mixins: [tableMixin],

    components: {
        Splide,
        SplideSlide,
    },

    data() {
        return{
            options: {
                rewind : true,
                type: 'loop',
                perPage: 1,
                gap    : '0.5rem',
                pagination: false,
                // autoplay: true,
                // interval: 3000
            },
        }
    },
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

    .photo-box{
        display: none;
    }

    img{
        max-width: 100%;
        border: 3px solid $primary-light;
        border-radius: 5px; 
    }

    .first-section-decorative-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        right: 0.813rem;
        z-index: -1;
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

@media screen and (min-width: 600px) {

    .first-section-container {
        max-width: 80%;
    }

    .first-section-decorative-line{
        width: 0.4rem;
    } 

}

@media screen and (min-width: 768px) {

    .first-section-container{
        max-width: 85%;
    }

    .photo-slider{
        display: none;
    }

    .photo-box{
        display: flex;

        .image{
            max-width: 33%;
            margin: 0 0.25rem;

            img{
                width: 100%;
            }
        }
    }

}

</style>
