<template>
    <div class="footer-center">
        <div
            class="contact-link-button-wrapper"
            tabindex="1"
            @click="$router.push({ path: '/contact' })"
        >
            <p class="contact-link-button">Kontaktujte nás</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px ) {

    .footer-center {
        max-width: 18.75rem;
        margin: 0 auto;
    }

    .contact-link-button-wrapper {
        width: 11rem;
        margin: 0 auto;
        text-align: center;
    }

    .contact-link-button {
        background-color: $fancy;
        padding: 1px 0px;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);
        cursor: pointer;
    }

    .contact-link-button:focus {
        background-color: $primary-light;
        transition: 0.25s;
    }
}

</style>