<template>
    <article>
        <div class="bg-image-box">
            <div class="bg-image"></div>
        </div>

        <the-home-title-section />
    </article>
</template>

<script>
import TheHomeTitleSection from './TheHomeTitleSection'
import tableMixins from '../../mixins/tableMixins.js'
import { debounce } from 'lodash-es'

export default {
    mixins: [tableMixins],

    components: {
        TheHomeTitleSection
    },

    emits: ['end-ani-titles'],

    data() {
        return {
            bgImageBox: Object,
            ratio: Number
        }
    },

    mounted() {
        this.bgImageBox = document.getElementsByClassName('bg-image-box')[0]
        this.setParallaxRatio()

        window.addEventListener('scroll', () => {
            this.parallax(this.bgImageBox, window.scrollY, this.ratio)
        })

        window.addEventListener('resize', () => {
            this.ratioWindowSizeChanger()
        })
    },

    methods: {
        ratioWindowSizeChanger: debounce(function() {
            this.actualyWidnowSize > this.breakpoint
                ? (this.ratio = -0.20)
                : (this.ratio = 0.15)
        }, 150),

        setParallaxRatio() {
            this.actualyWidnowSize > this.breakpoint
                ? (this.ratio = -0.20)
                : (this.ratio = 0.15)
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    article {
        position: relative;
    }

    .bg-image-box {
        position: fixed;
        // background-image: url('../../assets/img/background/bg-image-mobile.jpg');
        background-image: url('../../assets/img/background/background.jpg');
        background-position: 35%;
        background-size: cover;
        height: 51.1rem;
        width: 100%;
        top: -3.5rem;

        .bg-image {
            position: absolute;
            background-color: rgba(0, 0, 0, 40%);
            background-size: cover;
            background-position: center center;
            z-index: 2;
            height: 51.1rem;
            width: 100%;
        }
    }
}

@media screen and (min-width: 1024px) {
    .bg-image-box {
        background-image: url('../../assets/img/background/background.jpg');
        background-position: center center;
        background-size: cover;
        height: 64rem;
        width: 100%;
        top: -3.5rem;

        .bg-image {
            position: absolute;
            background-size: cover;
            background-position: center center;
            z-index: 2;
            height: 64rem;
            width: 100%;
        }
    }
}
</style>
