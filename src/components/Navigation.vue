<template>
    <nav
        class="flex max-w-screen-lg justify-center lg:justify-end lg:flex-none lg:h-12 lg:mt-6"
    >
        <ul
            v-if="activeMenu || breakPointPX < browserInnerWidth"
            class="w-full lg:w-max-1/3 lg:text-end"
        >
            <li
                @click="$router.push({ path: '/' })"
                class="list-item lg:inline-block lg:border-none lg:px-5 lg:bg-rounded"
            >
                DOMOV
            </li>
            <li
                @click="$router.push({ path: 'about' })"
                class="list-item lg:inline-block lg:border-none lg:px-5 lg:bg-rounded"
            >
                O NAS
            </li>
            <li
                @click="$router.push({ path: '/contact' })"
                class="list-item lg:inline-block lg:border-none lg:px-5 lg:bg-rounded"
            >
                KONTAKT
            </li>
            <li
                @click="$router.push({ path: '/equipment' })"
                class="list-item lg:inline-block lg:border-none lg:px-5 lg:bg-rounded"
            >
                VYBAVENIE
            </li>
            <li
                @click="$router.push({ path: '/gallery' })"
                class="list-item lg:inline-block lg:border-none lg:px-5 lg:bg-rounded"
            >
                GALÉRIA
            </li>
        </ul>
    </nav>
</template>

<script>
import { throttle } from 'lodash-es'

export default {
    data() {
        return {
            browserInnerWidth: 900,
            breakPointPX: 1023
        }
    },

    props: {
        activeMenu: {
            type: Boolean,
            default: false
        }
    },

    created() {
        this.browserInnerWidth = window.innerWidth
        window.addEventListener('resize', throttle(this.sizeWindow, 350))
    },

    methods: {
        sizeWindow(e) {
            return (this.browserInnerWidth = e.srcElement.innerWidth)
        }
    }
}
</script>

<style scoped></style>;
