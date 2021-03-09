<template>
    <div class="banner">
        <navigation-logo />
        <navigation-menu-button @toggle-menu="toggleMenu($event)" />
    </div>
    <nav>
        <ul
            @click="toggleMenu(false)"
            v-if="activeMenu || breakPointLarge < actualyWidnowSize"
        >
            <li
                class="list-item"
                tabindex="1"
                @click="$router.push({ path: '/' })"
            >
                DOMOV
            </li>
            <li
                class="list-item"
                tabindex="1"
                @click="$router.push({ path: 'about' })"
            >
                O NAS
            </li>
            <li
                class="list-item"
                tabindex="1"
                @click="$router.push({ path: '/contact' })"
            >
                KONTAKT
            </li>
            <li
                class="list-item"
                tabindex="1"
                @click="$router.push({ path: '/gallery' })"
            >
                GALÉRIA
            </li>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    position: fixed;
    display: flex;
    width: 100%;
    height: 55px;
    z-index: 10;
    background: $primary-dark;
    justify-content: space-between;
}

nav {
    position: fixed;
    width: 100%;
    margin-top: 3.438rem;
    z-index: 10;
    color: $darkest;
    text-align: center;
    background: $primary-semi-light;
}

li {
    font: {
        size: 14px;
        weight: 500;
    }
    padding: 15px 0px;
    border-bottom: 1px solid $primary-dark;
    cursor: pointer;
}

li:focus {
    background: $primary-semi-dark;
    color: $primary-light;
    transition: 0.25s;
}

@media screen and ( min-width: 600px) {
    .banner {
        height: 80px;
    }

    nav {
        margin-top: 5rem;
    }

    li{
        font-size: 18px;
        padding: 24px 0px;
    }
}

@media screen and ( min-width: 1024px) {
    .banner {
        height: 90px;
    }

    
    nav {
        display: flex;
        justify-content: flex-end;;
        margin-top: 1.9rem;
        background: none;
    }

    li{
        display: inline-block;
        padding: 0rem 2.5rem;
        font: {
            size: 15px;
            weight: 300;
        };
        color: $primary-light;
    };


}
</style>
