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
                    <ul class="ul" @click="switchButton()">
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
import { throttle } from 'lodash'
import tableMixin from '../../mixins/tableMixins.js'
import NavigationLogo from '../Navigation/TheNavigationLogo.vue'
import NavigationMenuButton from '../Navigation/TheNavigationMenuButton.vue'

export default {
    mixins: [tableMixin],

    components: {
        NavigationLogo,
        NavigationMenuButton
    },

    data() {
        return {
            activeMenu: Boolean,
            nav: Object,
            li: Object
        }
    },
    mounted() {
        this.section = document.getElementsByClassName('section')[0]
        this.nav = document.getElementsByClassName('ul')[0]

        this.li = document.querySelectorAll('li')
        this.li.forEach(li => {
            li.addEventListener('click', () => {
                this.hideNavigation()
            })
        })

        window.addEventListener('resize', () => {
            this.navigationSetup()
        })
    },

    methods: {
        hideNavigation() {
            for (let i = 0; i < this.li.length; i++) {
                this.li[i].classList.add('deactive')
                this.li[i].classList.remove('active')
            }
        },

        navigationSetup: throttle(function() {
            if (this.actualyWidnowSize < this.breakpoint) {
                this.nav.classList.remove('display')
            } else {
                this.nav.classList.add('display')
            }
        }, 250),

        switchButton() {
            if (this.activeMenu) {
                this.activeMenu = false
            } else {
                this.activeMenu = true
            }
        },

        toggleMenu() {
            for (let i = 0; i < this.li.length; i++) {
                if (this.li[i].classList.contains('active')) {
                    this.li[i].classList.remove('active')
                    this.li[i].classList.add('deactive')
                } else {
                    this.li[i].classList.remove('deactive')
                    this.li[i].classList.add('active')
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .section {
        position: fixed;
        width: 100%;
        height: 3.438rem;
        z-index: 10;
        background: $primary-dark;

        .container {
            width: 98%;
            display: flex;
            margin: 0rem auto;
            justify-content: space-between;
        }
    }

    nav {
        position: fixed;
        width: 100%;
        right: 0;
        z-index: 10;
        color: $darkest;
        text-align: center;
        margin-top: 0.11rem;
    }

    li {
        display: none;
        outline: none;
        color: $primary-dark;
        background: $primary-semi-light;
        font: {
            size: 14px;
            weight: 500;
        }
        padding: 0.938rem 0;
        cursor: pointer;
        border-bottom: 0.25px solid $primary;
    }

    .display {
        display: block;
    }

    li:first-child.active {
        display: block;
        transform: translateX(-100%);
        animation: slideNav 0.5s 0.1s ease-in-out both;
    }

    li:nth-child(2).active {
        display: block;
        transform: translateX(-100%);
        animation: slideNav 0.5s 0.2s ease-in-out both;
    }

    li:nth-child(3).active {
        display: block;
        transform: translateX(-100%);
        animation: slideNav 0.5s 0s ease-in-out both;
    }

    li:nth-child(4).active {
        display: block;
        transform: translateX(-100%);
        animation: slideNav 0.5s 0.15s ease-in-out both;
    }

    @keyframes slideNav {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    li:first-child.deactive {
        display: none;
        transform: translateX(-110%);
        animation: unslideNav 0.5s 0.1s ease-in-out both;
    }

    li:nth-child(2).deactive {
        display: none;
        transform: translateX(-110%);
        animation: unslideNav 0.5s 0.2s ease-in-out both;
    }

    li:nth-child(3).deactive {
        display: none;
        transform: translateX(-110%);
        animation: unslideNav 0.5s 0.35s ease-in-out both;
    }

    li:nth-child(4).deactive {
        display: none;
        transform: translateX(-110%);
        animation: unslideNav 0.5s 0.15s ease-in-out both;
    }

    @keyframes unslideNav {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    li:focus {
        background: $primary;
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
        background-color: transparent;
        border-bottom: none;
    }

    li:first-child.active,
    li:nth-child(2).active,
    li:nth-child(3).active,
    li:nth-child(4).active {
        display: unset;
        animation: unset;
        transform: translateX(0);
    }

    li:first-child.deactive,
    li:nth-child(2).deactive,
    li:nth-child(3).deactive,
    li:nth-child(4).deactive {
        display: unset;
        animation: unset;
        transform: translateX(0);
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
