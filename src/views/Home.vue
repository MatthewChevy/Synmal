<template>
    <header>
        <img class="welcome-image" src="../assets/img/welcome-image.png" alt="painting">
        <div class="title-wrapper">
            <h1>Synmal - Jozef Zigo</h1>
            <h2>Maliari s 20 ročnými skúsenosťami</h2>
        </div>
    </header>
    
    <main>
        <section class="motto">
            <div class="motto-field">
                <h3>Beautiful designs, powerful features and the freedom to build anything you want.</h3>
                <div class="horizontal-line"></div>
            </div>
        </section>

        <section class="first-section">
            <div class="first-section-container">
                <div class="first-section-h3-wrapper">
                    <h3>Široké možnosti maliarskych prác a vysoká kvalita je našou samozrejmosťou.</h3>
                </div>
                <aside class="first-section-fancy-circle"></aside>
                <div class="first-section-images-wrapper">
                    <div class="first-section-half-size-images">
                        <img src="../assets/img/gallery/IMG_20200908_115947.jpg" alt="Roof painting">
                        <img src="../assets/img/gallery/IMG_20200716_101559.jpg" alt="Interior painting">
                    </div>
                    <div class="first-section-full-size-image">
                        <img src="../assets/img/gallery/IMG_20200824_122141.jpg" alt="Exterior painting">
                    </div>
                </div>
            </div>
            <aside class="first-section-fancy-rectangle"></aside>
            <aside class="first-section-fancy-line"></aside>
        </section>

        <section class="second-section">
            <div class="second-section-field">
                <aside class="second-section-fancy-rectangle"></aside>
                <div class="second-section-container"> 
                    <div class="second-section-h3-wrapper">
                        <h3>Keďže aj my ideme s dobou, ponúkame veľmi populárne a 
                            moderné <strong>strojové maľovanie interiérov a exteriérov</strong>
                        </h3>
                    </div>
                    <article>
                        <div class="paint-machine-logo">
                            <img src="../assets/img/wagner.png" alt="wagner logo">
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
                        </p>
                    </article>
                    <div class="second-section-half-size-images">
                        <img src="../assets/img/airless-painting.jpg" alt="Airless painting">
                    </div>
                    <div class="second-section-full-size-images">
                        <img src="../assets/img/wagner-machine.jpg" alt="Wagenr Machine">
                    </div>
                </div>
                <aside class="second-section-fancy-line"></aside>
            </div>
        </section>
        
        <aside class="center-content">
            <h4 class="center-content-h4">
                Za roky vykonávania nášho remesla sme
                vyskúšali a testovali desiatky výrobcov farieb. 
            </h4>
        </aside>

        <section class="third-section">
            <div class="third-section-cover-layer"></div>
            <div class="third-section-field">
                <div class="thrid-section-list-item">
                    <h6>Zabezpečujeme</h6>
                    <ul>
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

                <div class="fancy-bucket">
                    <img src="../assets/img/jupol.png" alt="Jupol bucket">
                </div>

            </div>

            <div class="mirror-fancy-line"></div>

            <div class="third-section-fancy-rectangle">
                <div class="reverse-mirror-fancy-line"></div>
            </div>

            <aside class="third-field-aside"> 
                <div class="third-field-aside-rectangle">
                    <div class="fancy-paint-roller">
                        <img src="../assets/img/paint-roller.png" alt="Paint roller">
                    </div>
                </div>

                <div class="third-field-aside-wrapper">
                    <p>
                        Vo veľkej miere využívame produkty od firmy <strong>JUB</strong>. 
                        Cenou, kvalitou a krycou schopnosťou je pre nás veľkým favoritom
                    </p>
                </div>

            </aside>

        </section>

        <footer>
            <div tabindex="1" @click="$router.push({ path: '/contact' })">
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

header{
    padding-top: 3.4rem;
}

.welcome-image{
    position: fixed;
    z-index: -2;
    opacity: 45%;
    max-width: 100%
}

.title-wrapper{
    max-width: 18.75rem;
    height: 13rem;
    margin: 0 auto;

     h1{  
        position: fixed;
        z-index: -1;
        color: $dark;
        padding-top: 3.6rem;
        line-height: 24px;
        font:{
            size: 23px;
            weight: 700;
        }
    }

    h2{
        position: fixed;
        z-index: -1;
        margin-top: 5.1rem;
        color: $dark;
        font:{
            size: 13.5px;
            weight: 400;
        }
    }
}


//Motto-------------------------------------------

.motto{
    background: #fff;
    height: 8.25rem;
    border-radius: 10px 10px 0px 0px;

}

.motto-field{
    padding-top: 1.438rem;
    width: 17.188rem;
    margin: 0 auto;
    text-align: center;

    h3{
        font:{
            size: 14.5px;
            weight: 300;
        }
    }
}

.horizontal-line{
    position: relative;
    z-index: 2;
    height: 0.063rem;
    background-color: $light-dark;
    margin-top: .6rem;
}

//first section-------------------------------------------

.first-section{
    background-color: $light-dark;
    width: 100%;
    height: 33.5rem;
}

.first-section-container{
    margin: 0 auto;
    max-width: 18.75rem;

}

.first-section-h3-wrapper{
     padding: 1.563rem 0;

     h3{
        color: $white;

        font:{
            size: 14.5px;
            weight: 500;
        }
    }
}


.first-section-fancy-circle{
    position: relative;
    z-index: 2;
    bottom: 3rem;
    width: 6.25rem;
    height: 6.25rem;
    background-color: #ffffff;
    border-radius: 50%;
    right: -11rem;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.first-section-images-wrapper{
    position: relative;
    bottom: 6.25rem;
}

.first-section-half-size-images{
    display: flex;
    justify-content: space-between;
    max-width: 18.75rem;

    img{
        border: 5px solid $white;
        max-width: 9.063rem;
        height: 13rem;
        border-radius: 5px;
        position: relative;
        z-index: 2;
        box-shadow: 5px 5px 2px rgba(#000000, 16%);
    }

    img:first-child{
        margin-right: 0.313rem;
        margin-left: 0.125rem;
    }
}

.first-section-full-size-image > img{
    width: 18.75rem;
    height: 10.625rem;
    border: 5px solid $white;
    border-radius: 5px;
    margin-left: -0.063rem;
    margin-top: 0.5rem;
    margin-left: 0.063rem;
    position: relative;
    z-index: 2;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.first-section-fancy-rectangle{
    position: absolute;
    z-index: 1;
    top: 41rem;
    width: 100%;
    height: 9.375rem;
    background-color: $white;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.first-section-fancy-line{
    position: absolute;
    z-index: 0;
    top: 24.7rem;
    width: 0.313rem;
    height: 33.5rem;
    background-color: #49d0b4;
    right: 0.813rem;
    box-shadow: 5px 0px 2px rgba(#000000, 16%);
}

//second section-------------------------------------------

.second-section{
    position: relative;
    background-color: $white;
    width: 100%;
    height:31.5rem;
    border-bottom: 0.5px solid $grey;
}

.second-section-field{
    background: $light-dark;
    height: 22.5rem;
    border-radius: 10px 0 0 10px;
    width: 22.188rem;
    position: absolute;
    right: 0;
    margin-top: 2.5rem;
}

.second-section-fancy-rectangle{
    position: absolute;
    width: 22.25rem;
    height: 12.5rem;
    background-color: $grey;
    top: 6.7rem;
    z-index: 1;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.second-section-container{
    width: 18.75rem;
    margin: 0 auto;
}

.paint-machine-logo{
    width: 5.375rem;
    position: relative;
    z-index: 1;
    margin-top: 2rem;

    img{
        max-width: 100%;
    }
}

.second-section-h3-wrapper > h3{
    margin-top: 1.2rem;
    color: $white;
    font:{
        size: 14px;
        weight: 500; 
    }
    strong{
        font:{
            weight: 600; 
        }
    }
}


article > p {
    position: relative;
    z-index: 1;
    max-width: 9.75rem;
    font:{
        size: 10px;
        weight: 400; 
    }
}

.second-section-half-size-images{
    position: relative;
    z-index: 1;
    width: 8.438rem;
    height: 8.438rem;
    border-radius: 3px;
    bottom: 8.25rem;
    border: 5px solid $white;
    left: 10.2rem;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
    img{
        width: 100%;
    }   
}

.second-section-full-size-images{
    position: relative;
    z-index: 1;
    width: 15.625rem;
    height: 9.05rem;
    border: 5px solid $white;
    border-radius: 3px;
    bottom: 7.063rem;
    left: 3rem;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
    img{
        width: 100%;
    }
}

.second-section-fancy-line{
    position: absolute;
    z-index: 0;
    top: 0;
    width: 0.313rem;
    height: 22.5rem;
    background-color: #49d0b4;
    right: 0.813rem;
    box-shadow: 5px 0px 2px rgba(0, 0, 0, 0.16);
}

// Center text section-----------------------------------

.center-content{
    position: relative;
    z-index: 2;
    width: 100%;
    background-color: $white;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.16);
}

.center-content-h4{
    max-width: 17.875rem;
    margin: 0 auto;
    padding: 1.563rem 0px;
    text-align: center;
    font:{
        size: 14px;
        weight: 400;
    }
}

//third section-------------------------------------------

.third-section{
    background-color: white;
    position: relative;
    z-index: 1;
    bottom: 1.6rem;
}

.third-section-cover-layer{
    width: 100%;
    height: 10.938rem;
    background-color: $white;
    position: absolute;
    z-index: 0;
    margin-top: -1.55rem;
}

.third-section-field{
    width: 18.75rem;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}


.thrid-section-list-item{

    width: 13.438rem;
    max-height: 15.4rem;
    margin-top: 3rem;
    background-color: #CFCFCF;
    border-radius: 5px;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
        
        h6 {
            color: $black;
            padding: 0.938rem 1.25rem 0px;

            font:{
                size: 16px;
                weight: 600;
            }
        }
}

ul{
    position: relative;
    z-index: 2;
    padding:{
        top: 0.625rem;
        right: 1.25rem;
        bottom: 0.625rem;
        left: 1.25rem
    }

    li{
        font:{
        size: 10px;
        weight: 500;
        }
        color: $black;
        line-height: 1.2rem;
    }

    li:before {
        content: "-"; 
        padding-right: 0.188rem;
    }
}

.reverse-color{
     color: $white;
 }

.color-splitter{
    width: 100%;
    height: 6.25rem;
    background: #707070;
    position: relative;
    z-index: 1;
    bottom: 5.375rem;
    border-radius: 0px 0px 5px 5px;
}

.third-section-fancy-rectangle{
    width: 100%;
    height: 22.5rem;
    background-color: #CFCFCF;
    position: absolute;
    z-index: 1;
    margin-top: -13.55rem;
}

.mirror-fancy-line{
    position: absolute;
    z-index: 0;
    top: 5.75rem;
    width: 1.25rem;
    height: 3.438rem;
    background-color: #707070;
    right: 2.375rem;
    border-radius: 2px 2px 0px 0px;
    box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
}

.reverse-mirror-fancy-line{
    position: absolute;
    z-index: 0;
    top: 0;
    width: 1.25rem;
    height: 3.438rem;
    background-color: #ffffff;
    right: 2.375rem;
    border-radius: 2px 2px 0px 0px;
    box-shadow: 5px 5px 2px rgb(0 0 0 / 16%);
}

.third-field-aside{
    position: relative;
    width: 100%;
    padding-top: 0.938rem;
    z-index: 2;
}

.third-field-aside-rectangle{
    width: 69%;
    height: 4.563rem;
    background-color: $white;
    position: absolute;
    right: 0;
    top: 0.2rem;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.fancy-bucket{
    width: 8.125rem;
    height: auto;
    position: relative;
    top: 1.45rem;
    left: 10.5rem;
    z-index: 1;

    img{
        max-width: 100%;
    }
}

.fancy-paint-roller{
    position: relative;
    width: 8.25rem;
    height: 8.25rem;
    transform: rotate(90deg);
    top: -1.7rem;
    left: -6.4rem; 

    img{
        max-width: 100%;
    }
}

.third-field-aside-wrapper{
    max-width: 18.75rem;
    text-align: right;
    margin: 0 auto;

    p{
        position: relative;
        width: 13.188rem;
        left: 5.5rem;
        text-align: right;

        font:{
            size: 10px;
            weight: 400;
        }
            strong{
                font-weight: 700;
            }
    }
}

//footer-------------------------------------------------

footer{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 6rem;
    background-color: $white;
    margin-top: 1rem;
    padding: 1.875rem 0 0 0;
}

.contact-link-button{

    max-width: 10rem;
    margin: 0 auto;
    background-color: $fancy;
    text-align: center;
    box-shadow: 5px 5px 3px rgba(#000000, 16%);
    padding: 0.15rem 0;
    cursor: pointer;

    a{
        font:{
            size: 15px;
            weight: regular;
        }
        color: $black;
    }
}

</style>
