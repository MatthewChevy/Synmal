<template>
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
                <img src="../../assets/img/jupol.png" alt="Jupol bucket" />
            </div>

        </div>
        <div class="mirror-decorative-line"></div>
        <div class="third-section-decorative-rectangle">
            <div class="reverse-mirror-decorative-line"></div>
        </div>
        <aside class="third-section-aside">
            <div class="decorative-paint-roller">
                <img src="../../assets/img/paint-roller.png" alt="Paint roller"/>
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
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

//third section-------------------------------------------

.third-section {
    position: relative;
    top: 2rem;
    z-index: 3;
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

@media screen and ( min-width: 600px) {

    .third-section-field {
        margin: 2rem auto 0 auto;
    }

    .thrid-section-list-item {
        width: 17rem;
        max-height: 18.5rem;

        h6 { 
            font-size: 20px;
        }
    }

    .third-section-ul{
        
        li{
            font-size: 14px;
            line-height: 25px;
        }
    }

    .color-splitter{
        height: 7.35rem;
        bottom: 6.935rem;
    }

    .decorative-bucket {
        width: 11rem;
        top: -2.55rem;
        left: 57%;
    }

    .third-section-decorative-rectangle{
        top: 11.3rem;
    }

    .mirror-decorative-line {
        top: 2.85rem;
        height: 9.438rem;
    }

    .third-section-aside{
        top: 1rem;
    }

    .decorative-paint-roller{
        width: 6.65rem;
        top: -1.15rem;
    }

    .third-section-paint-roller-paragraph{
        width: 80%;
        height: 6.5rem;       
    }

    .third-section-paint-roller-paragraph-handler{
        width: 75%;
        padding-top: 3.1%;
        p{
            font:{
                size: 16px;
            }
        }
    }
}

@media screen and ( min-width: 700px) {

    .third-section-field{
        width: 81%;
        height: 25.5rem;
    }

    .thrid-section-list-item{
        h6{
            font-size: 24px;
        }
    }   

    .third-section-aside{
        top: -1rem;
    }

    .third-section-decorative-rectangle{
        top: 11.6rem;
    }

}

@media screen and ( min-width: 768px) {

    .third-section{
        top: 11rem;
    }

}

@media screen and (min-width: 900px){

    .third-section-field{
        margin: 6rem auto 0 auto;
    }

    .thrid-section-list-item{
        width: 25rem;
        max-height: 27.4rem;

        h6{
            padding: 0.938rem 1.85rem 0px;
            font:{
                size: 30px;
            };
        }
    }

    .third-section-ul{
        padding-left: 1.85rem;

        li{
            font-size: 20px;
            line-height: 35px;
        }
    }

    .mirror-decorative-line{
        width: 2rem;
        top: 6.85rem;
    }

    .reverse-mirror-decorative-line{
        width: 2rem;
        height: 6.5rem;
    }

    .color-splitter{
        height: 12.05rem;
        bottom: 9.335rem;
    }

    .decorative-bucket{
        width: 14rem;
        top: -3.55rem;
        left: 62%;
    }

    .third-section-aside{
        top: 9rem;
    }

    .third-section-paint-roller-paragraph{
        width: 74%;
        height: 8.5rem;
    }

    .third-section-paint-roller-paragraph-handler{
        p{
            font:{
                size: 20px
            }
        }
    }

    .third-section-decorative-rectangle{ 
        top: 15.55rem;
        height: 31.5rem;
    }

    .decorative-paint-roller{
        width: 8.65rem;
        top: -1.45rem;
    }

}

</style>