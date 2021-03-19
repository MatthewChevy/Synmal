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
    </main>

    <footer>
        <the-contact-button />
    </footer>
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
    },
}
</script>

<style lang="scss" scoped>

header{
    position: relative;
    height: calc( 100% - 3.35rem ); //3.35rem is height of URL bar on 
}

footer{
    position: relative;
    margin-top: -5rem;
}

</style>
