<template>

    <the-home-header />

    <main>
        <the-home-first-section />

        <the-home-second-section />

        <the-home-aside-content />

        <the-home-third-section />

    </main>

    <the-home-footer />

</template>

<script>
import TheHomeHeader from '../components/Home/TheHomeHeader.vue'

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
    TheHomeFooter, },
}
</script>

<style lang="scss" scoped>

main{
    background-color: $primary-light;
}

</style>
