<template>
    <header>
        <the-home-header />
    </header>
    <main>
        <the-home-motto-section />

        <the-home-first-section />

        <the-home-second-section />

        <the-home-aside-content />

        <the-home-third-section />

        <the-contact-button />
    </main>
</template>

<script>
import TheHomeHeader from '../components/Home/TheHomeHeader.vue'

import TheHomeMottoSection from '../components/Home/TheHomeMottoSection.vue'
import TheHomeFirstSection from '../components/Home/TheHomeFirstSection.vue'
import TheHomeSecondSection from '../components/Home/TheHomeSecondSection.vue'
import TheHomeAsideContent from '../components/Home/TheHomeAsideContent.vue'
import TheHomeThirdSection from '../components/Home/TheHomeThirdSection.vue'

import TheContactButton from '../components/TheContactButton.vue'

export default {
    components: {
        TheHomeHeader,
        TheHomeFirstSection,
        TheHomeSecondSection,
        TheHomeAsideContent,
        TheHomeThirdSection,
        TheContactButton,
        TheHomeMottoSection
    }
}
</script>

<style lang="scss" scoped>
header {
    padding-top: 1.7rem;
}

main {
    background-color: $primary-light;
    // transform: translateY(0%);
    transform: translateY(-210px);
    overflow: auto;
    animation: mainTranslateY 1.5s 3.5s ease-in-out forwards;  
}

// @keyframes mainTranslateY {
//     0%{ transform: translateY(0);}
//     80%{ transform: translateY( -210px);}
//     90%{ transform: translateY( -213px);}
//     100%{ transform: translateY( -210px);}
// }

</style>
