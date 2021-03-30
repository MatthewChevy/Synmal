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
                <a
                    class="contact-link"
                    tabindex="1"
                    @click="$router.push({ path: '/about' })"
                >
                    Kliknite sem
                </a>
            </div>
        </aside>
    </article>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    article {
        position: relative;
        width: 100%;
        background-color: $primary-light;
    }

    .container {
        width: $container;
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

    .contact-link {
        padding: 3px 40px;
        border-radius: 3px;
        color: $darkest;
        background-color: $fancy;
        cursor: pointer;
        font: {
            size: 16px;
            weight: 300;
        }
    }

    .contact-link:hover,
    :focus {
        background-color: darken($fancy, 10%);
    }
}

@media screen and (min-width: 640px) {
    .title-box {
        width: 30rem;
    }
}

@media screen and (min-width: 1024px) {
    .container {
        width: $container;
        padding: 5rem 0;
    }

    .title-box {
        max-width: 80%;
        line-height: 3rem;
        font: {
            size: 20px;
            weight: 300;
        }
    }

    .contact-link {
        margin: 3rem 0;
        padding: 3px 40px;
        border-radius: 3px;
        color: $darkest;
        background-color: $fancy;
        cursor: pointer;
        font: {
            size: 16px;
        }
    }

    .contact-link:hover,
    :focus {
        background-color: darken($fancy, 10%);
    }
}

</style>
