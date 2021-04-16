<template>
    <article>
        <div class="bg-image-box">
            <div class="bg-image">
            </div>
        </div>

        <the-home-title-section />
    
        <h3 class="width">Width: {{ width }}</h3>
        <h3 class="height">Height: {{ height }}</h3>
    </article>
</template>

<script>

import TheHomeTitleSection from './TheHomeTitleSection'
import tableMixins from '../../mixins/tableMixins.js'

export default {

    mixins: [tableMixins],

    components: {

        TheHomeTitleSection,
    },

    emits: ['end-ani-titles'],

    data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            bgImageBox: Object
        }
    },

    mounted () {
        this.bgImageBox = document.getElementsByClassName('bg-image-box')[0]

        window.addEventListener('scroll', () => {
        //    this.parallax(this.bgImageBox, window.scrollY, -0.1) //lg
            this.parallax(this.bgImageBox, window.scrollY, 0.15)
        })
    },

}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {

    article {
        position: relative;
    }

    .bg-image-box{
        position: fixed;
        background-image: url("../../assets/img/city.jpg");
        background-position: center center;
        background-size: cover;
        height: 51.1rem;
        width: 100%;
        top: -3.5rem;

        .bg-image{
            position: absolute;
            background-color: rgba(0, 0, 0, 30%);
            background-size: cover;
            background-position: center center;
            z-index: 2;
            height: 51.1rem;
            width: 100%;
        }
    }
}

@media screen and (min-width: 1024px) {

    .bg-image-box{
        background-image: url("../../assets/img/DCS02.jpg");
        background-position: center center;
        background-size: cover;
        height: 64rem;
        width: 100%;
        top: -3.5rem;

        .bg-image{
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
