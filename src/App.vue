<template>
    <header>
        <navigation />
    </header>

    <background-image v-show="actualyWidnowSize > breakPointExtraLarge" />

    <div class="links">
        <!-- Is good this using ? -->
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/equipment">equipment</router-link>
        <router-link to="/gallery">gallery</router-link>
    </div>
    <router-view />

    <footer>
        <div class="footer-img-wrapper">
            <img class="footer-img" src="./assets/img/blackwhitepaint.png" alt="Logo">
        </div>           
        
        <div class="contact-footer-wrapper">
            <h3 class="contact-information">KONTAKTNÉ INFROMÁCIE</h3>
            <ul class="contact-information-list">
                <li>Jozef Zigo SYNMAL</li>
                <li>Ivachnová 183</li>
                <li>034 83  Ivachnová</li>
                <li>0904 669 843</li>
            </ul>
        </div>

        <div class="footer-menu-wrapper">
            <h3 class="footer-menu">SPOLOČNOSŤ</h3>
            <ul class="footer-menu-list">
                <li tabindex="1" @click="$router.push({ path: '/' })">Domov</li> 
                <li tabindex="1" @click="$router.push({ path: 'about' })">O nás</li> 
                <li tabindex="1" @click="$router.push({ path: '/contact' })">Kontakt</li> 
                <li tabindex="1" @click="$router.push({ path: '/equipment' })">Vybavenie</li> 
                <li tabindex="1" @click="$router.push({ path: '/gallery' })">Galéria</li>
            </ul>
        </div>

    </footer>    

    <aside class="post-footer">
        <h4>Designed by <strong>Matthew Chewy</strong></h4>
        <span>
            <a href="#">www.mattewchevy.sk</a>
        </span>
    </aside>
</template>

<script>
import tableMixin from './mixins/tableMixins'

import Navigation from './components/TheNavigation.vue'
import BackgroundImage from './components/TheBackgroundMain.vue'

export default {
    mixins: [tableMixin],
    components: {
        Navigation,
        BackgroundImage
    },

    data() {
        return {
            breakPointExtraLarge: 1023 //px
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .links {
        display: none;
    }

    footer .w-md-resolution {
        position: absolute;
        z-index: 100;
        display: flex;
    }

    footer {
        font-family: 'Roboto', sans-serif;
        max-width: 100vw;
        height: auto;
        background-color: rgb(0, 0, 0);
        color: white;
        padding: 1.5rem 1.5rem;
    }

    .footer-img-wrapper {
        max-width: 35vw;
    }

    .footer-img {
        max-width: 100%;
    }

    .contact-footer-wrapper {
        max-width: 16rem;
    }

    .contact-information {
        padding-top: 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .contact-information-list {
        padding-top: 1rem;

        li {
            padding-top: 0.8rem;
            font-weight: 400;
            color: rgb(155, 155, 155);
        }

        li:hover,
        :focus {
            transition: 0.3s;
            color: white;
        }
    }

    .footer-menu-wrapper {
        max-width: 11rem;
    }

    .footer-menu {
        padding-top: 4rem;
        font-size: 1.2rem;
        font-weight: 900;
    }

    .footer-menu-list {
        padding-top: 1rem;

        li {
            padding-top: 0.8rem;
            font-weight: 400;
            color: rgb(155, 155, 155);
            text-decoration: underline;
        }

        li:hover,
        :focus {
            text-decoration: none;
            transition: 0.3s;
            cursor: pointer;
            color: white;
        }
    }

    .post-footer {
        // font-family: 'Roboto', sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 2rem 2rem;
        text-align: center;
        color: white;
        background: #7d7d7d;
    }

    .post-footer > h4 > strong {
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 1.1rem;
    }

    .post-footer > span > a {
        font-family: 'Lobster', cursive;
        text-decoration: none;
        letter-spacing: 5px;
        color: rgb(0, 0, 0);
    }

    .post-footer > span > a:hover,
    :focus {
        transition: 0.3s;
        color: rgb(255, 255, 255);
    }
}

@media screen and (min-width: $w-md) {
}
</style>
