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

        <the-about-footer />

    </footer>

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

header {
    padding-top: 3.4rem;
}

footer {
    position: relative;
    width: 100%;
    height: 5rem;
    z-index: 10;
    top: -2rem;
    background-color: $primary-semi-dark;
}

</style>
