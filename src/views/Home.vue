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
        <the-home-footer />
    </footer>
</template>

<script>
import TheHomeHeader from '../components/Home/TheHomeHeader.vue'

import TheHomeMottoSection from '../components/Home/TheHomeMottoSection.vue'
import TheHomeFirstSection from '../components/Home/TheHomeFirstSection.vue'
import TheHomeSecondSection from '../components/Home/TheHomeSecondSection.vue'
import TheHomeAsideContent from '../components/Home/TheHomeAsideContent.vue'
import TheHomeThirdSection from '../components/Home/TheHomeThirdSection.vue'

import TheHomeFooter from '../components/Home/TheHomeFooter.vue'

export default {
    components: {
        TheHomeHeader,
        TheHomeFirstSection,
        TheHomeSecondSection,
        TheHomeAsideContent,
        TheHomeThirdSection,
        TheHomeFooter,
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
}

footer {
    width: 100%;
    background-color: $primary-light;
    margin: 2rem 0;
}

@media screen and ( min-width:640px ){
    footer{
        margin: 2rem auto 3rem auto
    }
}
</style>
