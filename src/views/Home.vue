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

        <section class="first-section">
            <div class="first-section-container">
                <div class="first-section-h3-wrapper">
                    <h3>
                        Široké možnosti maliarskych prác a vysoká kvalita je
                        našou samozrejmosťou.
                    </h3>
                </div>
                <aside class="first-section-decorative-circle"></aside>

                <div class="first-section-images-handler">
                    <div class="first-section-image-first">
                        <img
                            src="../assets/img/gallery/IMG_20200908_115947.jpg"
                            alt="Roof painting"
                        />
                    </div>
                    <div class="first-section-image-second">
                        <img
                            src="../assets/img/gallery/IMG_20200716_101559.jpg"
                            alt="Interior painting"
                        />
                    </div>
                    <div class="first-section-image-third">
                        <img
                            src="../assets/img/gallery/IMG_20200824_122141.jpg"
                            alt="Exterior painting"
                        />
                    </div>
                </div>
            </div>
            <aside class="first-section-decorative-rectangle"></aside>
            <aside class="first-section-decorative-line"></aside>
        </section>

        <section class="second-section">
            <div class="second-section-z-index-background"></div>
            <div class="second-section-background">
                <div class="second-section-container">
                    <div class="second-section-h3-handler">
                        <h3>
                            Keďže aj my ideme s dobou, ponúkame veľmi populárne a moderné
                            strojové maľovanie interiérov a exteriérov
                        </h3>
                    </div>
                </div>
                    <div class="second-section-wagner-color-splitter">
                        <div class="second-section-wagner-container">
                            <div class="second-section-wagner">
                                <div class="paint-machine-about">
                                    <div class="second-section-logo-holder">
                                        <img
                                            src="../assets/img/wagner.png"
                                            alt="wagner logo"
                                        />
                                    </div>
                                    <div class="second-section-paragraph-holder">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris.
                                        </p>
                                    </div>
                                </div>
                                <div class="second-section-top-image">
                                    <img
                                        src="../assets/img/airless-painting.jpg"
                                        alt="Airless painting"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-section-bottom-handler">
                        <div class="second-section-bottom-image">
                            <img
                                src="../assets/img/wagner-machine.jpg"
                                alt="Wagner Machine"
                            />
                        </div>
                    </div>
                </div>
                <aside class="second-section-decorative-line"></aside>
        </section>

        <aside class="center-content">
            <h4 class="center-content-h4">
                Za roky vykonávania nášho remesla sme vyskúšali a testovali
                desiatky výrobcov farieb.
            </h4>
        </aside>

        <section class="third-section">
            <div class="third-section-background-rectangle"></div>
            <div class="third-section-field">

                <div class="thrid-section-list-item">
                    <h6>Zabezpečujeme</h6>
                    <ul class="third-section-ul">
                        <li>Malovanie interiérov</li>
                        <li>Malovanie exteriérov</li>
                        <li>Strojové maľovanie interiérov</li>
                        <li>Strojové maľovanie exteriérov</li>
                        <li>Nátery striech</li>
                        <li class="reverse-color">Renovácia prasklín</li>
                        <li class="reverse-color">Renovácia drevených obkladov</li>
                        <li class="reverse-color">Nátery tatranských profilov</li>
                        <li class="reverse-color">Nátery kovových zárubní</li>
                    </ul>
                    <div class="color-splitter"></div>
                </div>

                <div class="decorative-bucket">
                    <img src="../assets/img/jupol.png" alt="Jupol bucket" />
                </div>

            </div>
            <div class="mirror-decorative-line"></div>
            <div class="third-section-decorative-rectangle">
                <div class="reverse-mirror-decorative-line"></div>
            </div>
            <aside class="third-section-aside">
                <div class="decorative-paint-roller">
                    <img src="../assets/img/paint-roller.png" alt="Paint roller"/>
                </div>
                <div class="third-section-paint-roller-paragraph">
                    <div class="third-section-paint-roller-paragraph-handler">
                        <p>
                            Vo veľkej miere využívame produkty od firmy
                            <strong>JUB</strong>. Cenou, kvalitou a krycou
                            schopnosťou je pre nás veľkým favoritom
                        </p>
                    </div>
                </div>
            </aside>
        </section>

        <footer>
            <div class="footer-handler" tabindex="1" @click="$router.push({ path: '/contact' })">
                <p class="contact-link-button">Kontaktujte nás</p>
            </div>
        </footer>
    </main>
</template>

<script>
export default {}
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

//first section-------------------------------------------

.first-section {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    background-color: $primary-semi-dark;
}

.first-section-container {
    max-width: 95%;
    margin: 0 auto;
    padding: 1.5rem 0;
}

.first-section-h3-wrapper {
    max-width: 75%;
    margin-bottom: 1.5rem;

    h3{
        color: $primary-light;
        font: {
            size: 14.5px;
            weight: 400;
        };
    }

}

.first-section-decorative-circle {
    position: absolute;
    width: 7rem;
    height: 7rem;
    right: 6%;
    margin-top: -3rem;
    z-index: 0;
    border-radius: 50%;
    background-color: $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
}

.first-section-images-handler {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    z-index: 2;

}

.first-section-image-first{ 
    width: 49%;
    border: 3px solid $primary-light;
    border-radius: 3px;
    line-height: 0;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img{
            max-width: 100%;
        }
}

.first-section-image-second{ 
    width: 49%;
    border: 3px solid $primary-light;
    line-height: 0;
    border-radius: 3px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
        img{
            max-width: 100%;
        }
}

.first-section-image-third{ 
    width: 100%;
    margin-top: 0.3rem;
    line-height: 0;
    border: 3px solid $primary-light;
    border-radius: 3px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img{
            max-width: 100%;
        }
}

.first-section-decorative-rectangle {
    position: absolute; 
    width: 100%;
    height: 30%;
    background-color: $primary-light;
    z-index: 1;
    bottom: 30%;

}

.first-section-decorative-line {
    position: absolute;
    width: 0.313rem;
    height: 100%;
    top: 0;
    right: 0.813rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
}

@media screen and ( min-width: 400px) {
    .first-section-container{
        max-width: 85%;
    }
}

@media screen and ( min-width: 500px) {

    .first-section-h3-wrapper {
        max-width: 74%;
        h3{
            font: {
                size: 16px
            };
        }

    }

    .first-section-decorative-circle{
        width: 8rem;
        height: 8rem;
        margin-top: -5rem;
    }
}

@media screen and ( min-width: 600px) {

    .first-section-h3-wrapper {
        padding: 1rem 0;
        max-width: 85%;
        h3{
            font: {
                size: 20px;
            };
        }

    }
}

//second section-------------------------------------------

.second-section{
    position: relative;
    width: 100%;
    z-index: 3;
    background-color: $primary-light;
}

.second-section-z-index-background{
    position: absolute;
    width: 100%;
    height: 122%;
    top: -2rem;
    z-index: 0;
    background-color: $primary-light;
}

.second-section-background{
    position: relative;
    width: 100%;
    background-color: $primary-semi-dark;
}

.second-section-container{
    width: 95%;
    margin: 0 auto;
}

.second-section-h3-handler{
    max-width: 97%;
    padding: 1rem 0;

    h3{
        color: $primary-light;
        font:{
            size: 13.5px;
            weight: 400;
        }
    }
}

.second-section-wagner-color-splitter{
    position: relative;
    width: 100%;
    z-index: 1;
    background-color: $primary;
}

.second-section-wagner-container{
    width: 95%;
    margin: 0 auto;
    padding: 3% 0 7% 0;
}

.second-section-wagner{
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}

.paint-machine-about{
    width: 49%;
}

.second-section-logo-holder{
    width: 87%;
    img{
        max-width:100%;
    }
}

.second-section-paragraph-holder{
    max-width: 100%;
    padding-top: 5%;
    p{
        font:{
            size: 10px;
            weight: 400;
        }
    }
}

.second-section-top-image{
    width: 49%;
    height: fit-content;
    margin-top: 6%;
    border-radius: 3px;
    line-height: 0;
    border: 3px solid $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

    img{
        max-width:100%;
    }
}

.second-section-bottom-handler{
    max-height: 6rem;
}

.second-section-bottom-image{
    position: relative;
    width: 76%;
    top: -1rem;
    margin: 0 auto;
    border-radius: 3px;
    line-height: 0;
    z-index: 3;
    border: 3px solid $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

    img{
        max-width:100%;
    }
}

.second-section-decorative-line{
    position: absolute;
    width: 0.313rem;
    height: 100%;
    top: 0;
    right: 0.813rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgb(0 0 0 / 16%); 
}

@media screen and ( min-width: 375px){

    .second-section{
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        background-color: $primary-light;
    }

    .second-section-background{
        width: 95%;
        border-radius:10px 0 0 10px ;
    }

    .second-section-h3-handler{
    max-width: 95%;
    padding: 1rem 0;

    h3{
        color: $primary-light;
        font:{
            size: 14px;
            weight: 400;
        }
    }
}

    .second-section-paragraph-holder{
        p{
            font:{
                size: 11px;
            }
        }
    }
}

@media screen and ( min-width: 400px){
    .second-section-container{
        width: 85%;
    }

    .second-section-wagner-container {
        width: 85%;
    }

    .second-section-bottom-image{
        width: 70%;
    }
}

@media screen and ( min-width: 500px) {

    .second-section-z-index-background{
        height: 46rem;
    }

    .second-section-h3-handler{
        h3{
            font:{
                size: 16px;
            }
        }
    }

    .second-section-paragraph-holder{
        p{
            font:{
                size: 12px;
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
//third section-------------------------------------------

.third-section {
    position: relative;
    top: 2rem;
    z-index: 1;
    background-color: $primary-light;
}

.third-section-background-rectangle {
    position: absolute;
    width: 100%;
    height: 298px;
    top: -4rem;
    background: $primary-light;
}

.third-section-field {
    position: relative;
    width: 95%;
    height: 23.5rem;
    margin: 3.2rem auto 0 auto;
    z-index: 2;
}

.thrid-section-list-item {
    position: relative;
    width: 75%;
    max-height: 15.4rem;
    top: 0.1rem;
    margin: 0 auto;
    text-align: center;
    background-color: $primary;
    border-radius: 5px;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);

    h6 {
        padding: 0.938rem 1.25rem 0px;
        text-align: center;
        color: $darkest;

        font: {
            size: 16px;
            weight: 600;
        }
    }
}

.third-section-ul {
    position: relative;
    z-index: 2;
    padding: {
        top: 0.625rem;
        right: 1.25rem;
        bottom: 0.625rem;
        left: 1.25rem;
    }

    li {
        font: {
            size: 10px;
            weight: 500;
        }
        line-height: 1.2rem;
    }

    li:before {
        content: '-';
        padding-right: 0.188rem;
    }
}

.reverse-color {
    color: $primary-light;
}

.color-splitter {
    position: relative;
    width: 100%;
    height: 6.35rem;
    bottom: 5.335rem;
    z-index: 1;
    background: $primary-semi-dark;
    border-radius: 0px 0px 5px 5px;
}

.third-section-decorative-rectangle {
    width: 100%;
    height: 22.5rem;
    position: absolute;
    top: 9.2rem;
    z-index: 1;
    background-color: $primary;
}

.mirror-decorative-line {
    display: none;
}

.reverse-mirror-decorative-line {
    display: none;
}

.decorative-bucket {
    position: relative;
    width: 9rem;
    height: auto;
    top: 1.45rem;
    left: 50%;
    z-index: 1;

    img {
        max-width: 100%;
    }
}

.third-section-aside{
    position: relative;
    width: 100%;
    z-index: 2;
}

.third-section-paint-roller-paragraph{
    width: 100%;
    height: 5rem;
    background-color: $primary-light;
}

.third-section-paint-roller-paragraph-handler{
    width: 85%;
    margin: 0 auto;
    padding-top: 4%;
    text-align: center;
    p{
        font:{
            size: 11px;
        }
    }
}

.decorative-paint-roller{
     display: none;
}


@media screen and ( max-width:300px ){
    .thrid-section-list-item {
        width: 85%;
    }
}

@media screen and ( min-width:350px ){

    .thrid-section-list-item {
        width: 15rem;
        margin: 0 0 0 5%; 
        text-align: left;
            h6 {
                padding: 0.938rem 1.25rem 0px;
                text-align: left;
                color: $darkest;

                font: {
                    size: 16px;
                    weight: 600;
                }
            }
    }

    .mirror-decorative-line {
        display: block;
        position: absolute;
        width: 1.25rem;
        height: 3.438rem;
        top: 5.85rem;
        z-index: 0;
        right: 19%;
        background-color: $primary-semi-dark;
        border-radius: 2px 2px 0px 0px;
        box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
    }

    .reverse-mirror-decorative-line {
        display: block;
        position: absolute;
        z-index: 0;
        width: 1.25rem;
        height: 3.438rem;
        top: 0;
        right: 19%;
        background-color: $primary-light;
        border-radius: 2px 2px 0px 0px;
        box-shadow: 5px 5px 2px rgb(0 0 0 / 16%);
    }

    .third-section-aside{
        width: 100%;  
        display: flex;
        justify-content: flex-end;
    }

    .third-section-paint-roller-paragraph{
        width: 76%;
    }

    .third-section-paint-roller-paragraph-handler{

        p{
            text-align: right;
            font:{
                size: 10px;
            }
        }
    }

    .decorative-paint-roller {
        position: relative;
        display: block;
        width: 5.15rem;
        top: -0.95rem;
        transform: rotate(90deg);

        img {
            max-width: 100%;
        }
    }
}

@media screen and ( min-width:375px ){

    .third-section-ul {
        li {
            font: {
                size: 11px;
                weight: 400;
            }
        }
    }

    .third-section-paint-roller-paragraph{
        width: 72%;
    }

    .third-section-paint-roller-paragraph-handler{
        p{
            font:{
                size: 11px;
            }
        }
    }
}

@media screen and ( min-width: 500px) {
    
    .third-section{
        top: 7rem;
    }
    
    .third-section-background-rectangle{
        top: -8rem;
    }

    .thrid-section-list-item{
        max-height: 16.8rem;
    }

   .third-section-ul{
        li {
            line-height: 22px;
            font: {
                size: 12px;
                weight: 400;
            }
        }
    }

    .color-splitter{
        position: relative;
        width: 100%;
        height: 6.75rem;
        bottom: 6.035rem;
        z-index: 1;
        background: $primary-semi-dark;
        border-radius: 0px 0px 5px 5px;
    }

    .mirror-decorative-line{
        top: 6.85rem;
    }

    .third-section-decorative-rectangle{
        top: 10.2rem;
    }

    .decorative-bucket {
        top: -0.55rem;
        left: 60%;
    }

    .third-section-paint-roller-paragraph-handler{
        width: 75%;
        padding-top: 3.1%;
        p{
            font:{
                size: 12px;
            }
        }
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
