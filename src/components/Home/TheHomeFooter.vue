<template>
    <footer>
        <div class="footer-handler" tabindex="1" @click="$router.push({ path: '/contact' })">
            <p class="contact-link-button">Kontaktujte nás</p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

footer {
    position: relative;
    width: 100%;
    height: 6rem;
    top: 5rem;
    padding-top: 1.875rem;
    z-index: 1;
    background-color: $primary-light;
}

.contact-link-button {
    max-width: 11rem;
    margin: 0 auto;
    padding: 0.15rem 0;
    text-align: center;
    background-color: $fancy;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
    cursor: pointer;

    a {
        font: {
            size: 15px;
            weight: regular;
        }
        color: $darkest;
    }
}

.contact-link-button:focus {
    background-color: $primary-semi-dark;
    color: $primary-light;
    transition: 0.25s;
}

@media screen and ( min-width:375px ){
    footer {
        padding-top: 0rem;
    }
}

@media screen and ( min-width:500px ){
    footer {
        top: 8rem;
        padding-top: 1.5rem;
    }
}

</style>