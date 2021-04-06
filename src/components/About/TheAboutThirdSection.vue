<template>
    <section class="section">

        <article class="article-top">

            <div class="center">
                <div class="article-title">
                    <h2>Priebeh práce</h2>
                </div>
                <p>
                    <strong>Kontakt:</strong> Po kontakte s Vami urobíme osobnú prehliadku Vašich
                    priestorov, na základe ktorej vypracujeme cenovú
                    ponuku a dohodneme termín
                </p>
            </div>
        </article>

        <div class="flex-box">
            <article class="article-box">
                <div class="center">
                    <p>
                        <strong>Pred maľovaním:</strong> Všetko dôkladne zalepíme a pozakrývame fóliou. Tento proces bývá časovo najnáročnejší.
                        Pri strojovom maľovaní si lepenie vyžaduje ešte väčšiu dôslednosť.
                    </p>
                    <div class="article-image">
                        <div class="image-holder">
                            <img src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg" alt="before">
                        </div>
                    </div>
                </div>
            </article>

            <article class="article-box">
                <div class="center">
                    <p>
                        <strong>Počas maľovania:</strong> V tejto fáze sa ukážu všetky nedostatky ako napríklad praskliny na stenách, strope
                        alebo okolo okien. Všetko čo treba povyspravujeme a zasádrujeme.
                    </p>
                    <div class="article-image">
                        <div class="image-holder">
                            <img src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg" alt="in progress">
                        </div>
                    </div>
                </div>
            </article>

            <article class="article-box last">
                <div class="center">
                    <p>
                    <strong>Po maľovaní:</strong> Ak sme s výsledkom spokojný môžeme začať s upratovacími prácami. Všetko dôklade vyzametáme, poumývame a povysávame. 
                    Po skončení sa možete tešiť z vymalovných priestorov.
                    </p>
                    <div class="article-image">
                        <div class="image-holder">
                            <img src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg" alt="after">
                        </div>
                    </div>
                </div>
            </article>
        </div>
        
    </section>
    
</template>


<style lang="scss" scoped>

@media screen and ( min-width: 0px ) {
    
    .center{
        width: $sm-width-container;
        margin: 0 auto;
    }

    .section {
        position: relative;
        width: 100%;
        background: $primary-semi-light;
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        border-bottom: 1px solid $primary;
        padding-bottom: 2rem;

        .article-title {
            padding: 0;
            text-align: center;

            h2 {
                font: {
                    size: 30px;
                    weight: 300;
                }
            }

            h2::before,
            h2::after{
                content: "";
                display: inline-block;
                position: relative;
                width: 19%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }
            
            h2::before{
                right: 0.5rem;
            }
            h2:after{
                left: 0.5rem;
            }
        }

        p {
            padding: 2rem 0 1rem 0;
            text-align: justify;
            font: {
                size: 14px;
                weight: 300;
            }
            strong {
                font:{
                    weight: 500;
                }
            }
        }
    }

    .flex-box{
        padding-top: 2rem;
    }

    .article-box {
        position: relative;
        width: 100%;

        p {
            // padding-top: 2rem;
            text-align: justify;
            font: {
                size: 14px;
                weight: 300;
            }

            strong {
                font:{
                    weight: 500;
                }
            }
        }

        .article-image {
            padding: 2rem 0;

               img{
                   width: 100%;
               }
        }
        
    }
}

@media screen and ( min-width: 350px ) {

    .article-top{
        .center {
            p {
                font: {
                    size: 16px;
                }
            }
        }
    }

    .article-box {
        p {
            font: {
                size: 16px;
                weight: 300;
            }
        }
    }

}

@media screen and ( min-width: 768px ) {
    
    .center{
        width: unset;
        margin: 0 auto;
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        border-bottom: 1px solid $primary;
        padding-bottom: 2rem;

        .article-title {
            padding: 0;
            text-align: center;

            h2 {
                font: {
                    size: 30px;
                    weight: 300;
                }
            }

            h2::before,
            h2::after{
                content: "";
                display: inline-block;
                position: relative;
                width: 19%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }
            
            h2::before{
                right: 1rem;
            }
            h2:after{
                left: 1rem;
            }
        }

        p {
            width: 37rem;
            margin: 0 auto;
            padding: 1rem 0 1rem 0;
            text-align: center;
            font: {
                size: 14px;
                weight: 300;
            }
            strong {
                font:{
                    weight: 500;
                }
            }
        }
    }


    .article-box{
        width: 37rem;
        p{
            text-align: center;
        }
    }

    .flex-box{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
    }

    .last{
        margin: 0 auto;
    }

    
}

@media screen and ( min-width: 1024px ) {

    .center{
        width: unset;
        margin: 0 auto;
    }

    .article-top {
        width: 100%;
        background: $primary-light;
        z-index: 0;
        border-bottom: 1px solid $primary;
        padding: 3rem 0 5rem 0;

        .article-title {
            padding: 0;
            text-align: center;

            h2 {
                font: {
                    size: 30px;
                    weight: 300;
                }
            }

            h2::before,
            h2::after{
                content: "";
                display: inline-block;
                position: relative;
                width: 14rem;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }
            
            h2::before{
                right: 1rem;
            }
            h2:after{
                left: 1rem;
            }
        }

        p {
            width: 37rem;
            margin: 0 auto;
            padding: 1rem 0 1rem 0;
            text-align: center;
            font: {
                size: 14px;
                weight: 300;
            }
            strong {
                font:{
                    weight: 500;
                }
            }
        }
    }

    .article-box{
        width: 19rem;
        p{
            text-align: center;
            width: 98%;
            margin: 0 auto;
        }
    }

    .flex-box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: $lg-width-container;
        margin: 0 auto;
        padding: 4rem 0;
    }

    .last{
        margin: unset
    }

}

@media screen and ( min-width: 1200px ) {

    .article-box{
        width: 21rem;
        p{
            text-align: center;
            width: 100%;
            margin: 0 auto;
        }
    }

    .flex-box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 70rem;
        margin: 0 auto;
        padding: 4rem 0;
    }

    .last{
        margin: unset
    }

    
}






</style>