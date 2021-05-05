<template>
    <section class="section">
        <div class="container">
            <navigation-logo />

            <div class="navigtion-box">
                <navigation-menu-button
                    @menu-button="toggleMenu"
                    :activeMenu="activeMenu"
                />

                <nav>
                    <ul
                        v-if="activeMenu || breakPointLarge < actualyWidnowSize"
                        @click="activeMenu = false"
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
                            O NÁS
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
            </div>
        </div>
    </section>
</template>

<script>
import tableMixin from '../../mixins/tableMixins.js'
import NavigationLogo from '../Navigation/TheNavigationLogo.vue'
import NavigationMenuButton from '../Navigation/TheNavigationMenuButton.vue'
import { throttle } from 'lodash-es'

export default {
    mixins: [tableMixin],
    
    components: {
        NavigationLogo,
        NavigationMenuButton
    },

    data() {
        return {
            breakPointLarge: 1023, //px
            activeMenu: false,
            navigation: Object,
            lastScrollPosition: 0,
            listItems: 
        }
    },

   mounted() {
       this.navigation = document.getElementsByClassName('section')[0]
        window.addEventListener("scroll", () => { 
            this.actualyWidnowSize > this.breakpoint ? this.hideNavBarWhenScroll() : false  
        }) 



        console.log( listItems );

   },

    methods: {
        toggleMenu() {
            this.activeMenu
                ? (this.activeMenu = false)
                : (this.activeMenu = true)
        },

        hideNavBarWhenScroll: throttle( function(){ 

            let viewPosition = window.pageYOffset || document.documentElement.scrollTop

            if ( viewPosition > this.lastScrollPosition ){
                this.navigation.classList.add('hide-navigation')
                this.navigation.classList.contains('show-navigation') ? this.navigation.classList.remove('show-navigation') : false
            } else {
                this.navigation.classList.add('show-navigation')
                this.navigation.classList.contains('hide-navigation') ? this.navigation.classList.remove('hide-navigation') : false
            }
            this.lastScrollPosition = viewPosition <= 0 ? 0 : viewPosition
        },250)
        
    }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {

    .show-navigation{
        transform: translateY(0%);
        animation: showNav 0.25s ease-in-out backwards;
    }

    .hide-navigation{
        transform: translateY(-100%);
        animation: hideNav 0.25s ease-in-out backwards;
    }

    @keyframes hideNav {
        0% { transform: translateY( 0% ); }
        100% { transform: translateY( -100% ); }
    }

    @keyframes showNav {
        0% { transform: translateY( -100% ); }
        100% { transform: translateY( 0% ); }
    }

    .section {
        position: fixed;
        width: 100%;
        height: 3.438rem;
        z-index: 10;
        background: $primary-dark;

        .container {
            width: 95%;
            display: flex;
            margin: 0rem auto;
            justify-content: space-between;
        }
    }

    nav {
        position: fixed;
        width: 100%;
        right: 0;
        margin-top: 0.338rem;
        z-index: 10;
        color: $darkest;
        text-align: center;
        background: $primary-semi-light;
    }

    li {
        color: $primary-dark;
        font: {
            size: 14px;
            weight: 500;
        }
        padding: 0.938rem 0;
        cursor: pointer;
        border-bottom: 0.25px solid $primary;
    }

    li:focus {
        background: $primary-semi-dark;
        color: $primary-light;
        transition: 0.25s;
    }
}

@media screen and (min-width: 1024px) {
    .section {
        height: 4.688rem;
        background: rgba($primary-dark, 75%);
    }

    nav {
        display: flex;
        justify-content: flex-end;
        margin-top: 1.5rem;
        background: inherit;
    }

    li {
        display: inline-block;
        padding: 0 2.5rem;
        border-radius: 5px;
        font: {
            size: 14px;
            weight: 300;
        }
        color: $primary-light;
        border-bottom: none;
    }

    li:hover {
        color: $fancy;
        transition: 0.25s;
    }

    li:focus {
        background: transparent;
        outline: 0;
    }
}
</style>
