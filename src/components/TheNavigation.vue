<template>
    <div class="banner">
        <navigation-logo />
        <navigation-menu-button @toggle-menu="toggleMenu($event)" />
    </div>
    <nav>
        <ul @click="toggleMenu(false)" v-if="activeMenu || breakPointLarge < actualyWidnowSize">
            <li class="list-item" tabindex="1" @click="$router.push({ path: '/' })">DOMOV</li>
            <li class="list-item" tabindex="1" @click="$router.push({ path: 'about' })">O NAS</li>
            <li class="list-item" tabindex="1" @click="$router.push({ path: '/contact' })">KONTAKT</li>
            <li class="list-item" tabindex="1" @click="$router.push({ path: '/gallery' })">GALÉRIA</li>
        </ul>
    </nav>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
// import { watch } from 'vue'
import tableMixin from '../mixins/tableMixins'

import NavigationLogo from './TheNavigationLogo'
import NavigationMenuButton from './TheNavigationMenuButton.vue'

export default {
    mixins: [tableMixin],

    components: {
        NavigationLogo,
        NavigationMenuButton
    },

    data() {
        return {
            activeMenu: false,
            breakPointLarge: 1023 //px
        }
    },

    methods: {
        toggleMenu(boolen) {
            if (boolen) {
                this.activeMenu = true 
            } else {
                this.activeMenu = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>

.banner{
    position: fixed;
    display: flex;
    width: 100%;
    height: 55px;
    z-index: 10;
    background: #373737;
    justify-content: space-between;
}

nav{
    position: fixed;
    width: 100%;
    margin-top: 3.438rem;
    z-index: 10;
    color: $black;
    text-align: center;
    background: $light-grey;
    
}

li {
    font:{
        size: 14px;
        weight: 500;
    }
    padding: 15px 0px;
    border-bottom: 1px solid $dark;
    cursor: pointer;
}

li:focus {
    background: $light-dark;
    color: $white;
    transition: .25s;
}

</style>
