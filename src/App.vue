<template>
    <header>
        <navigation />
    </header>

    <background-image v-show="actualyWidnowSize > breakPointExtraLarge" />

    <router-link class="hidden" to="/">home</router-link>
    <!-- Is good this using ? -->
    <router-link class="hidden" to="/about">about</router-link>
    <router-link class="hidden" to="/contact">contact</router-link>
    <router-link class="hidden" to="/equipment">equipment</router-link>
    <router-link class="hidden" to="/gallery">gallery</router-link>
    <router-view />

</template>

<script>
import tableMixin from './mixins/tableMixins'

import Navigation from './components/TheNavigation.vue'
import BackgroundImage from './components/TheBackgroundMain.vue'

export default {

    mixins: [tableMixin],

    components: {
      Navigation,
      BackgroundImage
  }
  
}
</script>

<style lang="scss">
@media screen and (min-width: $w-lg) {
    header {
        display: flex;
    }
}

@media screen and (min-width: $w-xl) {
    header {
        position: relative;
        background: white;
        border-radius: 0.5rem;
        width: 95%;
        top: 1.8rem;
        justify-content: space-between;
        align-items: stretch;
        z-index: 10;
        margin: 0 auto;
    }
}
</style>
