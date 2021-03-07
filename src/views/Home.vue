<template>
    <header>
        <img
            class="welcome-image"
            src="../assets/img/welcome-image.png"
            alt="painting"
        />
        <div class="title-center">
            <div class="title-handler">
                <h1>Synmal - Jozef Zigo</h1>
                <h2>Maliari s 20 ročnými skúsenosťami</h2>
            </div>
        </div>
    </header>
    <main>
        <section class="motto">
            <div class="motto-field">
                <h3>
                    Beautiful designs, powerful features and the freedom to
                    build anything you want.
                </h3>
                <div class="horizontal-line"></div>
            </div>
        </section>

        <the-first-section />

        <the-second-section />

    
        <aside class="center-content">
            <h4 class="center-content-h4">
                Za roky vykonávania nášho remesla sme vyskúšali a testovali
                desiatky výrobcov farieb.
            </h4>
        </aside>

        <the-third-section />

        <footer>
            <div class="footer-handler" tabindex="1" @click="$router.push({ path: '/contact' })">
                <p class="contact-link-button">Kontaktujte nás</p>
            </div>
        </footer>
    </main>
</template>

<script>
import TheFirstSection from '../components/TheFirstSection.vue'
import TheSecondSection from '../components/TheSecondSection.vue'

export default {
  components: { TheFirstSection, TheSecondSection },
}
</script>

<style lang="scss" scoped>
//welcome image-------------------------------------------

main{
    background-color: $primary-light;
}

header {
    padding-top: 3.4rem;
}

.welcome-image {
    position: fixed;
    max-width: 100%;
    z-index: 0;
    opacity: 45%;
}

.title-center{
    width: 100%;
}

.title-handler {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 0;

    h1 {
        padding-top: 3.6rem;
        color: $primary-dark;
        line-height: 24px;

        font: {
            size: 23px;
            weight: 700;
        }
    }

    h2 {
        color: $primary-dark;
        font: {
            size: 13.5px;
            weight: 400;
        }
    }
}

@media screen and ( min-width: 350px) {

    .title-handler {
        margin-left: 2rem;
        text-align: left;

        h1 {
            font: {
                size: 25px;
            }
        }
        h2 {
            font: {
                size: 14.5px;
            }
        }
    }
}

@media screen and ( min-width: 500px) {

    .title-handler {
        margin-top: 1rem;
        margin-left: 3rem;
        h1 {
            font: {
                size: 27.5px;
            }
        }
        h2 {
            font: {
                size: 16px;
            }
        }
    }
}

@media screen and ( min-width: 600px) {

    .title-handler {
        margin-left: 3rem;
        h1 {
            font: {
                size: 36px;
            }
        }
        h2 {
            margin-top: 0.25rem;
            font: {
                size: 21px;
            }
        }
    }
}

@media screen and ( min-width: 768px) {
    .welcome-image {
        opacity: 85%;
    }

    .title-handler {
        margin-top: 1rem;
        margin-left: 4rem;
        h1 {
            line-height: 40px;
            font: {
                size: 44.5px;
                weight: 700;
            }
        }

        h2 {
            font: {
                size: 26px;
            }
        }
    }
}


//Motto-------------------------------------------

.motto {
    position: relative;
    width: 100%;
    margin-top: 55%;
    padding: 1.8rem 0 2.2rem 0;
    background: $primary-light;
    border-radius: 10px 10px 0px 0px;
}

.motto-field {
    max-width: 17rem;
    margin: 0 auto;
    text-align: center;

    h3 {
        font: {
            size: 14.5px;
            weight: 300;
        }
    }
}

.horizontal-line {
    position: relative;
    height: 0.5px;
    background-color: $primary-semi-dark;
    z-index: 2;
}

@media screen and ( min-width: 375px) {

    .motto-field {
        max-width: 80%;

        h3 {
            font: {
                size: 16px;
            }
        }
    }

}

@media screen and ( min-width: 500px) {

    .motto-field {
        max-width: 22rem;

        h3 {
            font: {
                size: 16px;
            }
        }
    }

}

@media screen and ( min-width: 600px) {

    .motto-field {
        padding: 1rem 0;
        max-width: 80%;

        h3 {
            font: {
                size: 20px;
            }
        }
    }

}

// Center text section-----------------------------------

.center-content {
    position: relative;
    width: 100%;
    top: 2rem;
    z-index: 3;
    background-color: $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
}

.center-content-h4 {
    max-width: 17.875rem;
    margin: 0 auto;
    padding: 1.563rem 0px;
    text-align: center;
    font: {
        size: 14px;
        weight: 400;
    }
}

@media screen and ( min-width: 375px) {
    .center-content{
        top: 3rem;
    }

    .center-content-h4 {
        max-width: 85%;
        padding: 2rem 0px;
        font: {
            size: 16px;
        }
    }
}

@media screen and ( min-width: 500px) {

    .center-content {
        top: 7rem;
    }

    .center-content-h4 {
        max-width: 80%;
        padding: 2rem 0;
   
    }
}


//footer-------------------------------------------------

footer {
    position: relative;
    width: 100%;
    height: 6rem;
    top: 5rem;
    padding-top: 1.875rem;
    z-index: 1;
    background-color: $primary-light;
}

.contact-link-button {
    max-width: 11rem;
    margin: 0 auto;
    padding: 0.15rem 0;
    text-align: center;
    background-color: $fancy;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
    cursor: pointer;

    a {
        font: {
            size: 15px;
            weight: regular;
        }
        color: $darkest;
    }
}

.contact-link-button:focus {
    background-color: $primary-semi-dark;
    color: $primary-light;
    transition: 0.25s;
}

@media screen and ( min-width:375px ){
    footer {
        padding-top: 0rem;
    }
}

@media screen and ( min-width:500px ){
    footer {
        top: 8rem;
        padding-top: 1.5rem;
    }
}
</style>
