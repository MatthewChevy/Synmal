<template>
    <div class="footer-center">
        <div class="button">
            <the-path-button
                :path="'contact'"
                :textButton="'Kontaktujte nás'"
            />
        </div>
    </div>
</template>

<script>
import ThePathButton from '../ThePathButton.vue'

export default {
    components: {
        ThePathButton
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .footer-center {
        max-width: 18.75rem;
        margin: 0 auto;
    }

    .button {
        text-align: center;
        margin: 0 auto;
    }
}
</style>
