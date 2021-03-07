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
        TheHomeMottoSection, 
    },
}
</script>

<style lang="scss" scoped>

header {
    padding-top: 1.7rem;
}

main{
    background-color: $primary-light;
}

footer {
    position: relative;
    width: 100%;
    height: 7rem;
    top: 3rem;
    padding-top: 9%;
    z-index: 1;
    background-color: $primary-light;
}

@media screen and ( min-width:500px ){
    footer {
        top: 7rem;
        height: 6rem;
        padding-top: 3%;
    }
}

@media screen and ( min-width:600px ){
    footer {
        height: 8rem;
        padding-top: 5%;
    }
}

</style>
