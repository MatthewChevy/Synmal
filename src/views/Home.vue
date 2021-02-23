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
                <div class="h3-wrapper">
                    <h3>Široké možnosti maliarskych prác a vysoká kvalita je našou samozrejmosťou.</h3>
                </div>
                    <div class="fancy-circle"></div>
                    <div class="images-wrapper">
                        <div class="half-size-images">
                            <img src="../assets/img/gallery/IMG_20200908_115947.jpg" alt="Roof painting">
                            <img src="../assets/img/gallery/IMG_20200716_101559.jpg" alt="Interior painting">
                        </div>
                        <div class="full-size-image">
                            <img src="../assets/img/gallery/IMG_20200824_122141.jpg" alt="Exterior painting">
                        </div>
                    </div>
            </div>
            <div class="fancy-rectangle"></div>
            <div class="fancy-line"></div>
        </section>
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

//welcome image-------------------------------------------

.welcome-image{
    position: absolute;
    z-index: -1;
    opacity: 60%;
    max-width: 100%
}

header{
    max-width: 300px;
    height: 13rem;
    margin: 0 auto;
}

header > h1{   
    color: $dark;
    font:{
        size: 23px;
        weight: 700;
    }
    padding-top: 3.6rem;
    line-height: 24px;
}

header > h2{
    color: $dark;
    font:{
        size: 13.5px;
        weight: 400;
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
    width: 74%;
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
    height: 0.031rem;
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
    max-width: 300px;

}

 .h3-wrapper{
     padding: 1.563rem 0;
 }

.h3-wrapper > h3{
    font:{
        size: 14.5px;
        weight: 500;
    }
    color: $white;
}

.fancy-circle{
    position: relative;
    z-index: 2;
    bottom: 3rem;
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 50%;
    right: -11rem;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.images-wrapper{
    position: relative;
    bottom: 6.25rem;
}

.half-size-images{
    display: flex;
    justify-content: space-between;
    max-width: 300px;
}

.half-size-images > img{
    border: 5px solid $white;
    max-width: 145px;
    height: 208px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.half-size-images > img:first-child{
    margin-right: 5px;
    margin-left: 2px;
}


.full-size-image > img{
    width: 300px;
    height: 170px;
    border: 5px solid $white;
    border-radius: 5px;
    margin-left: -1px;
    margin-top: 8px;
    margin-left: 1px;
    position: relative;
    z-index: 2;
    box-shadow: 5px 5px 2px rgba(#000000, 16%);
}

.fancy-rectangle{
    position: absolute;
    z-index: 1;
    top: 41rem;
    width: 100%;
    height: 150px;
    background-color: $white;
}

.fancy-line{
position: absolute;
z-index: 0;
top: 24.7rem;
width: 5px;
height: 33.5rem;
background-color: #49d0b4;
right: 13px;
}


</style>
