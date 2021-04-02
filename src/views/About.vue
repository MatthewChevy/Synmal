<template>

    <header>
        <the-about-header />
    </header>


    <main>
        
        <the-about-first-section />

        <the-about-second-section />

        <the-about-third-section />

    </main>

    <footer>
        <div class="footer-center">
            <div
                class="contact-link-button-wrapper"
                tabindex="1"
                @click="$router.push({ path: '/contact' })"
            >
                <p class="contact-link-button">Kontaktujte nás</p>
            </div>
        </div>
    </footer>

    <the-about-footer />

</template>

<script>
import TheAboutHeader from '../components/About/TheAboutHeader';
import TheAboutFirstSection from '../components/About/TheAboutFirstSection';
import TheAboutSecondSection from '../components/About/TheAboutSecondSection';
import TheAboutThirdSection from '../components/About/TheAboutThirdSection';
import TheAboutFooter from '../components/About/TheAboutFooter';

export default {
    components: {
        TheAboutHeader,
        TheAboutFirstSection,
        TheAboutSecondSection,
        TheAboutThirdSection,
        TheAboutFooter

    },
}
</script>

<style lang="scss" scoped>
//header------------------------------------
header {
    padding-top: 3.4rem;
}

//footer

footer {
    position: relative;
    width: 100%;
    height: 5rem;
    z-index: 10;
    top: -2rem;
    background-color: $primary-semi-dark;
}

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



</style>
