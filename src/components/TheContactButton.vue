<template>
<div class="contact-link-wrapper">
    <div class="contact-link-button">
        <a class='contact-link' tabindex="1" @click="$router.push({ path: '/contact' })">
            Kontaktujte nás
        </a>
    </div>
</div>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px){

    .contact-link-wrapper{
        height: 12rem;
        background: $primary-light;
        position: relative;
        margin-top: -1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2.5rem;
    }

    .contact-link-button{
        background-color: $fancy;
        padding: 3px 15px;
        cursor: pointer;
        border-radius: 3px;
        box-shadow: 3px 3px 3px rgba( $darkest, 16% );
    }

    .contact-link-button:hover,:focus{
        transition: .25s;
        // color: $primary-semi-light;
        // background-color: $primary-semi-dark;
        transform: scale(1.1);
        box-shadow: 5px 5px 3px rgba( $darkest, 16% );
    }

}

@media screen and ( min-width: 375px) {

    .contact-link-button{
        background-color: $fancy;
        padding: 2px 30px;
        cursor: pointer;
        border-radius: 3px;
        box-shadow: 3px 3px 3px rgba( $darkest, 16% );
        font:{
            size: 17px
        };
    }
}

@media screen and ( min-width: 640px) {

    .contact-link-wrapper{
        margin-top: 0rem;
    }
}

</style>
