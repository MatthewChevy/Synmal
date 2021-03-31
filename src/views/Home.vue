<template>
    <header>
        <the-home-header @end-ani-titles="startMottoAni = $event" />
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
    },

    data() {
        return {
            startMottoAni: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    position: relative;
    height: calc(100% - 3.35rem); //3.35rem is height of URL bar on
}

@media screen and ( min-width: 1024px) {
    header {
        height: 45rem;
    }
}


</style>
