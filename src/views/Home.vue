<template>
    <main>
        <img class="welcome-image" src="../assets/img/welcome-image.png" alt="painting">
        <header>
            <h1>Synmal - Jozef Zigo</h1>
            <h2>Maliari s 20 ročnými skúsenosťami</h2>
        </header>

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

    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

main{
    padding-top: 3.438rem;
    position: relative;
    z-index: 2;
}

//welcome image-------------------------------------------

.welcome-image{
    position: fixed;
    z-index: -2;
    opacity: 60%;
    max-width: 100%
}

header{
    max-width: 18.75rem;
    height: 13rem;
    margin: 0 auto;
}

header > h1{  
    position: fixed;
    z-index: -1;
    color: $dark;
    font:{
        size: 23px;
        weight: 700;
    }
    padding-top: 3.6rem;
    line-height: 24px;
}

header > h2{
    position: fixed;
    z-index: -1;
    margin-top: 5.1rem;
    color: $dark;
    font:{
        size: 13.5px;
        weight: 400;
    }
}


//Section-wrapper---------------------------------

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
}

.motto-field > h3{
    font:{
        size: 14.5px;
        weight: 300;
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
 }

.first-section-h3-wrapper > h3{
    font:{
        size: 14.5px;
        weight: 500;
    }
    color: $white;
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
}

.first-section-half-size-images > img{
    border: 5px solid $white;
    max-width: 9.063rem;
    height: 13rem;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.first-section-half-size-images > img:first-child{
    margin-right: 0.313rem;
    margin-left: 0.125rem;
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
    position: absolute;
    background-color: $white;
    width: 100%;
    height: 26.5rem;
    border: 1px solid black
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

.paint-machine-logo > img{
    max-width: 100%;
}

.second-section-h3-wrapper > h3{
    margin-top: 1.2rem;
    font:{
        size: 14px;
        weight: 500; 
    }
    color: $white;
}

.paint-machine-logo{
    position: relative;
    z-index: 1;
    margin-top: 2rem;
}

.second-section-h3-wrapper > h3 > strong{
    font:{
        weight: 600; 
    }
}

.paint-machine-logo{
    width: 5.375rem;
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
}

.second-section-half-size-images > img{
    width: 100%;
}

.second-section-full-size-images{
    position: relative;
    z-index: 1;
    width: 15.625rem;
    height: 9.1rem;
    border: 5px solid $white;
    border-radius: 3px;
    bottom: 7.063rem;
    left: 3rem;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.second-section-full-size-images > img{
    width: 100%;
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








</style>
