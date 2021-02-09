<template>
    <div class="banner">
        <navigation-logo />
        <navigation-menu-button @toggle-menu="toggleMenu($event)" />
    </div>
    <!-- <navigation-social-bar /> -->

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

// import NavigationSocialBar from './TheNavigationSocialBar.vue'
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
.banner {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
}

nav {
    min-width: 100vw;
    position: absolute;
    z-index: 10;
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-navigation;
    letter-spacing: 1px;
    text-align: center;

    ul {
        background: $navigation-background-color;

        li:first-child {
            border-top: 1px solid $navigation-border-color;
        }

        li {
            background: $navigation-background-color;
            color: $navigation-text-color;
            border-bottom: 1px solid $navigation-text-color;
            padding: {
                top: 0.9em;
                bottom: 0.9rem;
            }
        }

        li:hover,
        :focus {
            transition: 0.3s;
            background: rgb(141, 141, 141);
            color: $navigation-background-color;
        }
    }
}

@media screen and (min-width: $w-lg) {
    nav {
        z-index: 1;
        top: 1.9rem;

        ul {
            li:first-child {
                border-top: none;
            }

            li {
                padding: 0rem 1.5rem;
                border-bottom: none;
                display: inline-block;
            }
        }
    }
}

@media screen and (min-width: $w-xl) {
    nav {
        ul {
            border-radius: 0.5rem;
            max-width: 95%;
            margin: 0 auto;

            li {
                padding: 1.3rem 2rem;
            }

            li:hover,
            :focus {
                border-radius: 0.5rem;
                transition: 0.5s;
            }
        }
    }
}

@media screen and (min-width: $w-3xl) {
    nav {
        font-size: 1rem;
        ul {
            li {
                padding: 1.6rem 3rem;
            }
        }
    }
}

@media screen and (min-width: $w-4xl) {
    nav {
        font-size: 1.2rem;
        ul {
            li {
                padding: 1.4rem 4rem;
            }
        }
    }
}

@media screen and (min-width: $w-4k) {
    nav {
        top: 3.7rem;
        font-size: 2.5rem;
        ul {
            li {
                padding: 2.8rem 5.5rem;
            }
        }
    }
}
</style>
