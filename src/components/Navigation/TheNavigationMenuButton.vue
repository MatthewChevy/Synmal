<template>
    <div class="button-wrapper">
        <button
            @click="$emit('menu-button'), buttonToggle()"
            class="menu-toggle"
        >
            Menu
        </button>
    </div>
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixins],

    emits: ['menu-button'],

    props: {
        activeMenu: {
            type: Boolean
        }
    },

    data() {
        return {
            button: Object
        }
    },

    methods: {
        buttonToggle() {
            this.button.classList.toggle('is-active')
        }
    },

    watch: {
        activeMenu() {
            if (this.activeMenu === false)
                this.button.classList.remove('is-active')
        }
    },

    mounted() {
        this.button = document.getElementsByTagName('button')[0]
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .button-wrapper {
        margin: 0.938rem 0;
    }

    .menu-toggle {
        position: relative;
        display: block;
        width: 1.875rem;
        height: 1.25rem;
        font: {
            size: 0;
        }
        border-top: 2px solid;
        border-bottom: 2px solid;
        color: darken($primary-light, 15%);
        background: transparent;
        transition: all 0.25s ease-in-out;

        &:before,
        &:after {
            position: absolute;
            content: '';
            display: block;
            width: 100%;
            height: 0.125rem;
            top: 50%;
            left: 50%;
            background: currentColor;
            transform: translate(-50%, -50%);
            transition: transform 0.25s ease-in-out;
        }
    }

    button:hover {
        color: darken($primary-light, 15%);
    }

    button.is-active {
        border-color: transparent;

        &:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    button {
        border: none;
        cursor: pointer;
        outline: none;
    }
}

@media screen and (min-width: 1024px) {
    .button-wrapper {
        display: none;
    }
}
</style>
