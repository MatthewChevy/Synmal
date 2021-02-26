<template>
    <header>
        <navigation />
    </header>
    <div class="navigation-links">
        <!-- Is good this using ? -->
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/gallery">gallery</router-link>
    </div>
    <router-view />
</template>

<script>
import tableMixin from './mixins/tableMixins'

import Navigation from './components/TheNavigation.vue'

export default {
    mixins: [tableMixin],
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>
.navigation-links {
    display: none;
}
</style>
