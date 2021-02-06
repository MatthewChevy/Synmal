<template>
    <navigation-social-bar />

    <navigation-logo />

    <navigation-menu-button @toggle-menu="toggleMenu($event)" />

    <nav>
        <ul v-if="activeMenu || breakPointLarge < actualyWidnowSize">
            <li tabindex="1" @click="$router.push({ path: '/' })">DOMOV</li>
            <li tabindex="1" @click="$router.push({ path: 'about' })">O NAS</li>
            <li tabindex="1" @click="$router.push({ path: '/contact' })">
                KONTAKT
            </li>
            <li tabindex="1" @click="$router.push({ path: '/equipment' })">
                VYBAVENIE
            </li>
            <li tabindex="1" @click="$router.push({ path: '/gallery' })">
                GALÉRIA
            </li>
        </ul>
    </nav>
</template>

<script>
import tableMixin from '../mixins/tableMixins'

import NavigationSocialBar from './TheNavigationSocialBar.vue'
import NavigationLogo from './TheNavigationLogo'
import NavigationMenuButton from './TheNavigationMenuButton.vue'

export default {
    mixins: [tableMixin],

    components: {
        NavigationSocialBar,
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
nav {
    position: absolute;
    text-align: center;
    color: $navigation-text-color;
    font-weight: 600;
}

nav {
    width: 100%;
    z-index: 10;
}
ul {
    li {
        background-color: $navigation-background-color;
        border-top: 1px solid gray;
        padding: 0.8rem 0rem;
    }
    li:last-child {
        border-bottom: 1px solid gray;
    }
    li:focus,
    li:hover {
        transition: 0.25s;
        background-color: grey;
        border-radius: 0.2rem;
        color: white;
    }
}

@media screen and (min-width: $w-lg) {
    nav {
        position: relative;
        top: 0.7rem;
    }

    ul {
        li {
            display: inline-block;
            border: none;
            padding: 0.8rem 2.5rem;
        }
        li:last-child {
            border-bottom: none;
        }
    }
}

@media screen and (min-width: $w-xl) {
    nav {
        position: relative;
        top: 0.7rem;
    }

    ul {
        li {
            display: inline-block;
            border: none;
            padding: 0.8rem 2.5rem;
        }
        li:last-child {
            border-bottom: none;
        }
    }
}
</style>
