<template>
    <div class="banner">
        <navigation-logo />
        <navigation-menu-button @toggle-menu="toggleMenu($event)" />
    </div>
    <nav>
        <ul v-if="activeMenu || breakPointLarge < actualyWidnowSize">
            <li tabindex="1" @click="$router.push({ path: '/' })">DOMOV</li>
            <li tabindex="1" @click="$router.push({ path: 'about' })">O NAS</li>
            <li tabindex="1" @click="$router.push({ path: '/contact' })">
                KONTAKT
            </li>
            <li tabindex="1" @click="$router.push({ path: '/gallery' })">
                GALÉRIA
            </li>
        </ul>
    </nav>
</template>

<script>
import tableMixin from '../mixins/tableMixins'

import NavigationLogo from './TheNavigationLogo'
import NavigationMenuButton from './TheNavigationMenuButton.vue'

export default {
    mixins: [tableMixin],

    components: {
        // NavigationSocialBar,
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
        }
    }
}
</script>

<style lang="scss" scoped>

.banner{
    display: flex;
    z-index: 10;
    position: fixed;
    height: 55px;
    justify-content: space-between;
    background: #373737 
}

nav{
    position: fixed;
    margin-top: 3.438rem;
    z-index: 10;
    width: 100%;
    background: $light-grey;
    color: $black;
    text-align: center;
    
}

li {
    font:{
        size: 14px;
        weight: 500;
    }
    padding: 15px 0px;
    border-bottom: 1px solid $dark;
}

li:focus {
    background: $light-dark;
    color: $white;
    transition: .25s;
}

</style>
