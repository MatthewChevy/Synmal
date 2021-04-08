<template>

    <header>

        <the-about-header />

    </header>

    <main>
        
        <the-about-first-section />

        <the-about-second-section />

        <the-about-background-photo-section />

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
import TheAboutBackgroundPhotoSection from '../components/About/TheAboutBackgroundPhotoSection';
import TheAboutThirdSection from '../components/About/TheAboutThirdSection';
import TheAboutFooter from '../components/About/TheAboutFooter';

export default {
    components: {
        TheAboutHeader,
        TheAboutFirstSection,
        TheAboutSecondSection,
        TheAboutBackgroundPhotoSection,
        TheAboutThirdSection,
        TheAboutFooter
    },
}
</script>

<style lang="scss" scoped>

// body{
//     background-color: $primary-semi-light;
// }

header {
    padding-top: 3.4rem;
}

footer {
    position: relative;
    width: 100%;
    padding: 1rem 0 3rem 0;
    background-color: $primary-semi-light;
}

</style>
