<template>
    <main>
        <section class="title-section">
            <div class="title-handler">
                <h3>Vitajte v našej galerií</h3>
            </div>
        </section>

        <section class="gallery">

            <div class="big-size-photo mb">
                <img src="../assets/img/gallery/IMG_20200824_122141.jpg" alt="">
            </div>

            <div class="medium-size-photo">
                <img src="../assets/img/gallery/IMG_20200716_101559.jpg" alt="">
            </div>

            <div class="medium-size-photo">
                <img src="../assets/img/gallery/118260538_733966200498589_1098778560232869015_n.jpg" alt="">
            </div>

            <div class="big-size-photo mt mb">
                <img src="../assets/img/gallery/119987617_776257346495114_2021740783302182201_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/124433574_3103074533311293_1603057553737455252_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/131895848_411182313570877_2920369544276251577_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/116499270_948887002253501_1938145470334382927_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/145412079_638020656922323_5279528269855082552_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/145669555_248697023432866_1945074314893257057_n.jpg" alt="">
            </div>

            <div class="big-size-photo mb">
                <img src="../assets/img/gallery/152938083_479595056387947_5873967824539428064_n.jpg" alt="">
            </div>

            <div class="big-size-photo mb">
                <img src="../assets/img/gallery/152733172_455407695728760_1812710264514215851_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/153745678_1863339030500067_4936763343887441247_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/153395508_731065417799133_9052157701160206406_n.jpg" alt="">
            </div>
            
            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/153122093_430000728265065_4900322006202288397_n.jpg" alt="">
            </div>

            <div class="medium-size-photo mb">
                <img src="../assets/img/gallery/131931852_862531657835488_5843638348138736376_n.jpg" alt="">
            </div>

            <div class="big-size-photo mb">
                <img src="../assets/img/gallery/153180572_867949184057199_3902027427851372289_n.jpg" alt="">
            </div>

            <div class="big-size-photo l-mb">
                <img src="../assets/img/gallery/153228751_2736311053287795_6348408275480615625_n.jpg" alt="">
            </div>
        </section>
        <div class="background-splitter"></div>
    </main>
    <footer class="footer">
        <div class="footer-center">
            <div class="contact-link-button-wrapper" tabindex="1" @click="$router.push({ path: '/contact' })">
                <p class="contact-link-button">Kontaktujte nás</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

.mt{
    margin-top: 0.3rem;
}

.mb{
    margin-bottom: 0.3rem;
}

.l-mb{
    margin-bottom: 2em;
}


main{
    position: relative;
    padding-top: 3.4rem;
    background-color: $primary;
    z-index: 1;
    
}

.title-section{
    position: relative;
    width: 80%;
    margin: 0 auto;
    z-index: 1;
}

.title-handler{
    margin-top: 3rem;
    padding: 1rem 1.25rem;
    text-align: right;
    background-color: $primary-semi-dark;
    border-radius: 3px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

    h3{
        font: {
            size: 18px;
            weight: 400;
        };
        color: $primary-light;
    }
}

.gallery{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 1rem auto 0 auto;
    z-index: 2;
}

.big-size-photo{
    max-width: 100%;
    border: 5px solid $primary-light;
    line-height: 0;

        img{
            width: 100%;
    }
}

.medium-size-photo{
    max-width: 49.5%;
    border: 5px solid $primary-light;
    line-height: 0;

        img{
            width: 100%;
        }
}
.background-splitter{
    position: absolute;
    width: 100%;
    height: 83.7rem;
    top: 110.1rem;
    background-color: $primary-semi-dark;
    z-index: 0;
}

.footer{
    position: relative;
    width: 100%;
    height: 5rem;
    z-index: 10;
    background-color: $primary-semi-dark;
}

.footer-center{
    max-width: 80%;
    margin: 0 auto;
}

.contact-link-button-wrapper{
    width: 11rem;
    margin: 0 auto;
    padding-top: 1rem;
    text-align: center; 
}

.contact-link-button{
    background-color: $fancy;
    padding: 1px 0px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
    cursor: pointer;
}

.contact-link-button:focus{
    background-color: $primary-light;
    transition: .25s;
    
}

@media screen and (max-width: 374px){
    
    .title-section{
        width: 95%;
    }

    .gallery{
        width: 95%;
    }
    .background-splitter{
        display: none;
    }
}   


</style>
