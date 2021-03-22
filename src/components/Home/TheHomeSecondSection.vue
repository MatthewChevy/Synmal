<template>
    <section class="second-section">
        <div class="second-section-background">
            <div class="second-section-container">
                <div class="second-section-h3-handler">
                    <h3>
                        Keďže aj my ideme s dobou, ponúkame veľmi populárne a
                        moderné strojové maľovanie interiérov a exteriérov.
                    </h3>
                </div>
            </div>

            <the-home-second-section-article-sm class="article-sm" />
            <the-home-second-section-article class="article-md" />

            <aside class="second-section-decorative-line"></aside>
        </div>
    </section>
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js'

import TheHomeSecondSectionArticleSm from './TheHomeSecondSectionArticleSm.vue'
import TheHomeSecondSectionArticle from './TheHomeSecondSectionArticle.vue'

export default {
    mixins: [tableMixins],

    components: {
        TheHomeSecondSectionArticleSm,
        TheHomeSecondSectionArticle
    },

}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {

    .second-section {
        position: relative;
        width: 100%;
        margin-top: -2rem;
        padding-top: 2rem;
        z-index: 2;
        background-color: $primary-light;
    }

    .second-section-background {
        position: relative;
        width: 100%;
        background-color: $primary-semi-dark;
        box-shadow: 7px 7px 3px rgba($darkest, 16%);
    }

    .second-section-container {
        width: 95%;
        margin: 0 auto;
    }

    .second-section-h3-handler {
        max-width: 87%;
        padding: 1.25rem 0;
        text-align: left;

        h3 {
            color: $primary-light;
            font: {
                size: 13.5px;
                weight: 400;
            }
        }
    }

    .second-section-decorative-line{
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        right: 0.813rem;
        z-index: 0;
        background-color: $fancy;
        box-shadow: 5px 0px 2px rgb( $darkest, 16%);
    }

}

@media screen and (min-width: 375px) {

    .second-section {
        display: flex;
        justify-content: flex-end;
    }

    .second-section-background {
        width: 95%;
        border-radius: 10px 0 0 10px;
    }

    .second-section-h3-handler {
        h3 {
            color: $primary-light;
            font: {
                size: 14px;
                weight: 400;
            }
        }
    }
}   

@media screen and (min-width: 550px) {

    .second-section-container{
        width: 90%;
        margin-left: 1.5rem;
    }   

    .second-section-background {
        width: 92%;
    }

    .second-section-h3-handler {
        width: 100%;
        h3 {
            font: {
                size: 17px;
            }
        }
    }
}

@media screen and (min-width: 640px) {

    .second-section {
        height: auto;
    }

    .second-section-background {
        width: 100%;
        height: auto;
        border-radius: 0;
    }

    .second-section-container {
        width: 100%;
        margin-left: unset;
    }

    .second-section-h3-handler {
        width: 30rem;
        text-align: center;
        margin: 0 auto;
        h3 {
            font: {
                size: 20px;
            }
        }
    }

    .second-section-decorative-line{
        width: 0.4rem;
    }

}
</style>
