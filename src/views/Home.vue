<template>
    <header>
        <the-home-header />
    </header>
    <main>
        <the-home-first-section />

        <the-home-second-section />

        <the-home-aside-content />

        <the-home-third-section />

        <the-home-fourth-section />
    </main>
</template>

<script>
import TheHomeHeader from '../components/Home/TheHomeHeader.vue'
import TheHomeFirstSection from '../components/Home/TheHomeFirstSection.vue'
import TheHomeSecondSection from '../components/Home/TheHomeSecondSection.vue'
import TheHomeAsideContent from '../components/Home/TheHomeAsideContent.vue'
import TheHomeThirdSection from '../components/Home/TheHomeThirdSection.vue'
import TheHomeFourthSection from '../components/Home/TheHomeFourthSection.vue'

export default {
    components: {
        TheHomeHeader,
        TheHomeFirstSection,
        TheHomeSecondSection,
        TheHomeAsideContent,
        TheHomeThirdSection,
        TheHomeFourthSection
    }
}
</script>

<style lang="scss" scoped>
header {
    position: relative;
    height: 47.625rem;
    overflow-x: hidden;
}

@media screen and (min-width: 1024px) {
    header {
        height: 61rem;
    }
}
</style>
