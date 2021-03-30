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

</style>
