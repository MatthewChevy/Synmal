<template>
    <header>
        <img
            class="welcome-image"
            src="../assets/img/brothers.jpg"
            alt="brothers"
        />
        <div class="title-wrapper">
            <div class="title-wrapper-center">
                <h1>Pár slov o nás a našej práci</h1>
            </div>
        </div>
    </header>

    <main>
        <section class="first-section">
            <div class="first-section-center">
                <aside class="first-section-top-aside">
                    <div class="right-side-rectangle"></div>
                    <h4>
                        Za roky našej práce máme mnoho spokojných ľudí, ktorým
                        sme pomohli zveľadiť ich <strong>bytové</strong> a
                        <strong>nebytové</strong> priestory
                    </h4>
                </aside>
                <aside class="first-section-bottom-aside">
                    <div class="left-side-rectangle">
                        <div class="decorative-paint-roller">
                            <img src="../assets/img/paint-roller.png" alt="Paint roller"/>
                        </div>
                    </div>
                    <h4>
                        Sme rodinná firma s 20 ročnými skúsenosťami
                    </h4>
                </aside>
            </div>
            <div class="first-section-bottom-title">
                <h2>Naše pôsobenie</h2>
            </div>
            <div class="first-section-article-center">
                <article class="first-section-article">
                    <p>
                        Sme spoločnosť, ktorej hodnoty sú postavené na
                        úprimnosti, poctivej práci a zodpovednému prístupu ku
                        klientom. S dlhoročnými skúsenosťami sme sa stali v
                        našom odbore silnou konkurenciou. Našou výhodou je
                        zodpovednosť, spoľahlivosť. Disponujeme bohatým
                        technickým vybavením. Pôsobíme prevažne na <strong>Liptove</strong> ale
                        po vzájomnej dohode robíme kompromisy.
                    </p>
                </article>
            </div>
        </section>
            <section class="second-section">   
                <div class="second-section-cartoon-top-person-holder">
                    <img src="../assets/img/person2.png" alt="Cartoon person">
                </div>
                <aside class="decorative-circle-holder">
                    <div class="decorative-circle-bigger">
                        <div class="decorative-circle-smaller"></div>
                    </div>
                </aside>
                <article class="second-section-article">
                    <div class="decoration-rectangle-three-quarters"></div>
                    <div class="second-section-article-center">
                        <h3>Naše najväčšie úspechy</h3>
                        <div class="first-paragraf-holder">
                            <p>
                                Náš najväčší úspech je že 
                                môžeme vykonávať remeslo 
                                ktoré nás už dlhé roky baví
                                napĺňa a pomáha ľudom
                            </p>
                        </div>
                        <div class="second-paragraf-holder">
                            <p>
                                Jaslovské Bohunice, Bešeňová, VW Group, 
                                alebo Mondi S.C.P. sú spoločnosti s ktorým 
                                sme mali možnosť pomôcť vymaľovať ich 
                                priestory. 
                            </p>
                        </div>
                        <div class="decorative-line"></div>
                    </div>
                    <div class="decoration-rectangle-full-size"></div>
                </article>
            </section>

            <section class="thrid-section">
                <div class="thrid-section-layer-top">
                    <div class="thrid-section-center">
                        <article class="article-top-center">
                            <h3>Priebeh našej práce</h3>
                            <p> kontakte s Vami urobíme osobnú 
                                prehliadku Vašich priestorov, na základe
                                ktorej vypracujeme cenovú ponuku a 
                                dohodneme termín
                            </p>
                        </article>
                        <article class="article-left-side">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magnaqua. 
                                Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat.  Duis autrure 
                                dolor in reprehenderit
                            </p>
                        <div class="image-before-paint">
                            <p>Fotka pred maľovaním</p>
                        </div>
                        </article>
                    </div>
                </div>
                <article class="article-right-side">
                    <div class="thrid-section-center">
                        <div class="article-right-side-paragraph-handler">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                dunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud 
                                itation ullamco laboris nisi ut aliquip ex 
                                commodo consequat.  Duis aute irure 
                            </p>
                        </div>
                        <div class="image-painting-handler">
                            <div class="image-painting">
                                <p>Fotka počas maľovania</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="article-bottom-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor dunt ut labore et dolore magna aliqua. Ut eni
                        ad minim veniam, quis nostru
                    </p>
                    <div class="image-after-paint">
                        <p>Fotka po maľovaní</p>
                    </div>
                </article>

            </section>


            <!-- <footer>
                <div tabindex="1" @click="$router.push({ path: '/contact' })">
                    <p class="contact-link-button">Kontaktujte nás</p>
                </div>
            </footer> -->
    </main>
</template>

<style lang="scss" scoped>
//header------------------------------------
header {
    padding-top: 3.4rem;
}

.welcome-image {
    position: fixed;
    max-width: 100%;
    z-index: -2;
    opacity: 100%;
}

.title-wrapper {
    max-width: 18.75rem;
    height: 13rem;
    margin: 0 auto;

    h1 {
        position: fixed;
        width: 13rem;
        padding-top: 0.5rem;
        z-index: -1;
        color: $primary-dark;
        font: {
            size: 25px;
            weight: 700;
        }
    }
}

//first-section-----------------------------

.first-section {
    position: relative;
    width: 100%;
    height: 39rem;
    top: 2rem;
    background: $primary-light;
    border-radius: 10px 10px 0 0;
}

.first-section-center {
    width: 18.75rem;
    margin: 0 auto;
}

.first-section-top-aside {
    h4 {
        position: relative;
        padding-top: 3.5rem;
        text-align: right;
        font: {
            size: 14.5px;
            weight: 400;
        }

        strong{
            font-weight: 600;
        }
    }
}

.right-side-rectangle {
    position: absolute;
    width: 93%;
    height: 5.625rem;
    right: 0;
    margin-top: 2.938rem;
    z-index: 0;
    background-color: $primary;
    border-radius: 5px 0 0 5px;
    box-shadow: 5px 5px 5px rgba($darkest, 16%);
}

.first-section-bottom-aside {
    height: 10rem;
    h4 {
        position: relative;
        width: 10.563rem;
        padding-top: 4.3rem;
        text-align: center;

        font: {
            size: 14.5px;
            weight: 400;
        }
    }
}

.left-side-rectangle {
    position: absolute;
    width: 62.5%;
    height: 5.2rem;
    left: 0;
    margin-top: 2.938rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 5px 6px rgba($darkest, 16%);
}

.decorative-paint-roller {
    position: absolute;
    width: 9.375rem;
    height: 9.375rem;
    // left: 85%;
    left: 38%;
    bottom: -2.2em;
    transform: rotate3d(1, 1, 0, 180deg);
    img {
        width: 100%;
    }
}

.first-section-bottom-title{
    position: relative;
    width: 100%;
    height: 3.75rem;
    padding-top: 0.563rem;
    text-align: center;
    box-shadow: 5px 5px 6px rgba($darkest, 16%);

    h2{
        font:{
            size: 25px;
            weight: 500;
        }
    }
}

.first-section-article-center{
    position: relative;
    max-width: 18.75rem;
    top: 2rem;
    margin: 0 auto;
}

.first-section-article{

    p{
        text-align: center;
        font:{
            size: 13px
        };
    }
}

@media screen and (max-width: 374px) {
    .first-section {
        top: -1rem;
    }

    .right-side-rectangle {
        width: 100%;
    }
}

//second-section-----------------------------

.second-section{
    position: relative;
    width: 100%;
    height: 42rem;
    top: 2rem;
    background: $primary-semi-light;
}

.second-section-cartoon-top-person-holder{
    position: relative;
    width: 16.875rem;
    height: 16.875rem;
    top: -5rem;
    right: 7rem;
    margin: 0 auto;

    img{
        width: 100%;
    }
}

.decorative-circle-holder{

    .decorative-circle-bigger{
        position: absolute;
        width: 15rem;
        height: 15rem;
        top: 3rem;
        right: 0;
        background: $primary;
        border-radius: 50%;
        box-shadow: 5px 5px 5px rgba($darkest, 16%);

        .decorative-circle-smaller{
            position: relative;
            width: 6rem;
            height: 6rem;
            top: -1rem;
            background: $fancy;
            border-radius: 50%;
            box-shadow: 5px 5px 5px rgba($darkest, 16%);
        }
    }
}

.second-section-article{
    position: relative;
    width: 100%;
    height: 27.813rem;
    bottom: 6.9rem;
    background-color: $primary-dark;
    border-radius: 15px;
    box-shadow: 8px 8px 5px rgba( $darkest, 16%);
}

.decoration-rectangle-three-quarters{
    position: absolute;
    width: 76%;
    height: 6.25rem;
    top: 7rem;
    z-index: 2;
    background-color: $primary;
    border-radius: 0 5px 5px 0 ;
    box-shadow: 5px 5px 5px rgba($darkest, 16%);
}

.second-section-article-center{
    width: 18.75rem;
    margin: 0 auto;

    h3{
        padding: 1.5rem 0;
        text-align: center;
        color: $primary-light;
        font:{
            size: 24px;
            weight: 700;
        };
    }
}

.first-paragraf-holder{
    position: relative;
    max-width: 13.063rem;
    top: 2.3rem;
    z-index: 2;
    
    p{
        font:{
            size: 14.5px;
            weight: 400;
        }
    }
}

.second-paragraf-holder{
    position: relative;
    top: 6.05rem;
    z-index: 3;

    p{
        text-align: right;
        font:{
            size: 14.5px;
            weight: 400;
        }
    }
}

.decorative-line{
        position: absolute;
        width: 0.313rem;
        height: 27.813rem;
        top: 0;
        left: 1.5rem;
        z-index: 0;
        background-color: $fancy;
        box-shadow: 5px 0px 2px rgba($darkest, 16%);
}

.decoration-rectangle-full-size{
        position: absolute;
        width: 100vw;
        height: 7.188rem;
        bottom: 5rem;
        z-index: 2;
        background-color: $primary-light;
        box-shadow: 5px 5px 5px rgba($darkest, 16%);
}

@media screen and (max-width: 374px) {
  .second-section{
    top: -1rem;
  }

  .decorative-line{
        height: 24rem;
        top: 3.8rem;
  }
}

//third-section-----------------------------

.thrid-section{
    position: relative;
    width: 100%;
    top: 2rem;
    height: 40.1rem;
    background: $primary-semi-light;
}

.thrid-section-center{
    width: 300px;
    margin: 0 auto;
    border: 1px solid blue;
}

.article-top-center{
    text-align: center;
    h3{
        font:{
            size: 24px;
            weight: 600;
        }
    }

    p{

        padding-top: 2rem;
        font:{
            size: 14.5px;
            weight: 400;
        }  
    }
}

.article-left-side{

        position: relative;
        width: 265px;
        top: 2.5rem;

        p{
            padding-left: 5px;
            max-width: 79%;
            font:{
               size: 10px;
               weight: 500;
            }
        }
    
        .image-before-paint{      
                position: relative;
                width: 200px;
                height: 265px;
                top: 1rem;
                border: 5px solid $primary-light;
                background-color: $primary-semi-dark;
                box-shadow: 5px 5px 5px rgba($darkest, 16%);

            p{
                min-width: 100%;
                padding-top: 7rem;
                text-align: center;
                font:{
                    size: 11px;
                    weight: 300;
                }
                color: $primary-light;
            }
        }
}

//------------------------------------------

.article-right-side{
    margin-top: 5.5rem;
    background-color: $primary-light;
}

.article-right-side-paragraph-handler{
    width: 100%;
    padding-top: 2rem;
    padding-left: 5rem;
    text-align: right;
    
    p{
        margin-right: 5px;
        font:{
            size: 10px;
            weight: 500;
        }
    }
}

.image-painting-handler{
    padding-left: 6.1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
}

.image-painting{
    width: 200px;
    height: 265px;
    border: 5px solid $primary-light;
    background-color: $primary-semi-dark;
    box-shadow: 5px 5px 5px rgba($darkest, 16%);

    p{
        min-width: 100%;
        padding-top: 7rem;
        text-align: center;
        font:{
            size: 11px;
            weight: 300;
        }
        color: $primary-light;
    }
}

//-------------------------------------------------
    
.article-bottom-center{
    position: relative;
    p{

    }

    .image-after-paint{

        p{
            
        }
    }
}

footer{
    div{
        p{

        }
    }

}

</style>

   
