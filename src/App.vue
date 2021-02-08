<template>
    <header>
        <navigation />
    </header>

    <background-image v-show="actualyWidnowSize > breakPointExtraLarge" />

    <div class="links">
        <!-- Is good this using ? -->
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/equipment">equipment</router-link>
        <router-link to="/gallery">gallery</router-link>
    </div>    
        <router-view />  

    <footer>
        
    </footer>  
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
    },

    data() {
        return {
            breakPointExtraLarge: 1023 //px
        }
    },
}
</script>

<style lang="scss" scoped>

.links{
    display:none;
}


</style>
