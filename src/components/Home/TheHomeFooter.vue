<template>
    <div
        class="footer-handler"
        tabindex="1"
        @click="$router.push({ path: '/contact' })"
    >
        <p class="contact-link-button">Kontaktujte nás</p>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.contact-link-button {
    max-width: 11rem;
    margin: 0 auto;
    padding: 0.15rem 0;
    text-align: center;
    background-color: $fancy;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
    cursor: pointer;
    font: {
        size: 15px;
        weight: regular;
    }
    color: $darkest;
}

.contact-link-button:focus,:hover {
    background-color: $primary-semi-dark;
    color: $primary-light;
    transition: 0.25s;
}

@media screen and (min-width: 640px) {

    .footer-handler{
        margin: -1.5rem 0 2rem 0 ;
    }
    .contact-link-button{
        max-width: 15rem;
        padding: 0.3rem 0;
        font: {
            size: 16px;
            weight: 500;
        }
    }
}
</style>
