<template>

    <div class="footer-handler" tabindex="1" @click="$router.push({ path: '/contact' })">
        <p class="contact-link-button">Kontaktujte nás</p>
    </div>

</template>

<script>
    export default {
        
    }
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
    color: $darkest
 
}

.contact-link-button:focus {
    background-color: $primary-semi-dark;
    color: $primary-light;
    transition: 0.25s;
}

@media screen and ( max-width: 349px ){

    .contact-link-button {
        margin: 1.5rem auto;
    }
}

@media screen and ( min-width: 500px ){

    .contact-link-button {
        max-width: 13rem;
        font: {
            size: 18px;
            weight: regular;
        }
    }
}

@media screen and ( min-width: 600px ){

    .contact-link-button {
        max-width: 16rem;
        font:{
            size: 22px;
        }
    }
}

@media screen and ( min-width: 900px ){

    .contact-link-button {
        max-width: 20rem;

        font:{
            size: 25px;
        }
    }
}
</style>