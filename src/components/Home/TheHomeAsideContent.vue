<template>
    <article>
        <aside class="container">
            <div class="title-box">
                <h4>
                    Zaujíma Vás pribeh našej práce alebo informácie o našej
                    firme ?
                </h4>
            </div>
            <div class="button">
                <the-path-button :textButton="'Kliknite sem'" :path="'about'"/>
            </div>
        </aside>
    </article>
</template>

<script>

import ThePathButton from '../ThePathButton.vue';

export default {

    components: {
        ThePathButton,
    },
    
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {

    article {
        position: relative;
        width: 100%;
        background-color: $primary-light;
    }

    .container {
        width: $sm-width-container;
        margin: 0 auto;
        padding: 4rem 0;
    }

    .title-box {
        margin: 0 auto;
        max-width: 100%;
        text-align: center;
        h4 {
            font: {
                size: 20px;
                weight: 300;
            }
        }
    }

    .button {
        width: 100%;
        margin: 2.5rem auto 0 auto;
        text-align: center;
    }
}

@media screen and (min-width: 640px) {

    .title-box {
        width: 30rem;
    }
}

@media screen and (min-width: 1024px) {
    .container {
        width: $lg-width-container;
        padding: 5rem 0;
    }

    .title-box {
        width: 100%;
        font: {
            size: 20px;
            weight: 300;
        }
    }
}
</style>
