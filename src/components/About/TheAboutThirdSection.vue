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

        <div class="container">

            <article class="article-first-box">
                <p>
                    <strong>Pred maľovaním:</strong> Všetko dôkladne zalepíme a pozakrývame fóliou. Tento proces bývá časovo najnáročnejší.
                    Pri strojovom maľovaní si lepenie vyžaduje ešte väčšiu dôslednosť.
                </p>
                <div class="image-before-paint-box">
                    <div class="image-holder">
                        <img src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg" alt="before">
                    </div>
                </div>
            </article>
        </div>

        <article class="article-second-box">
            <div class="center">
                    <div class="second-box-paragraph">
                        <p>
                            <strong>Počas maľovania:</strong> V tejto fáze sa ukážu všetky nedostatky ako napríklad praskliny na stenách, strope
                            alebo okolo okien. Všetko čo treba povyspravujeme a zasádrujeme.
                        </p>
                    </div>
                    <div class="image-painting-box">
                        <div class="image-holder">
                            <img src="../../assets/img/gallery/123965699_688014581857556_6128033632594933054_n.jpg" alt="in progress">
                        </div>
                    </div>
                </div>
        </article>

        <article class="article-bottom">
            <div class="article-bottom-box">
                <p>
                   <strong>Po maľovaní:</strong> Ak sme s výsledkom spokojný môžeme začať s upratovacími prácami. 
                    Všetko dôklade vyzametáme, poumývame a povysávame.
                </p>
                <div class="image-after-paint-box">
                    <div class="image-holder">
                        <img src="../../assets/img/gallery/IMG_20200824_122141.jpg" alt="after">
                    </div>
                </div>
            </div>
        </article>

    </section>
    
</template>


<style lang="scss" scoped>

@media screen and ( min-width: 0px ) {
    
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

        .center{
            width: $sm-width-container; 
            margin: 0 auto;
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
    }

    .container {
        position: relative;
        width: $sm-width-container;
        margin: 0 auto;
    }

    .article-first-box {
        position: relative;
        width: 100%;

        p {
            padding-top: 2rem;
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

        .image-before-paint-box {
            padding: 2rem 0;
            
            .image-holder{
    
               img{
                   width: 100%;
               }
           }
        }
    }

    .article-second-box {

        position: relative;
        z-index: 1;
        background-color: $primary-light;
        border-radius: 0 0 20px 20px;
        box-shadow: 8px 8px 5px rgba($darkest, 16%);

        .center{
            width: $sm-width-container;
            margin: 0 auto;
        }

        .second-box-paragraph {
            margin: 0 auto;
            padding: 2rem 0;
            text-align: justify;
            p {
                margin: 0 auto;
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

        .image-painting-box {    
            padding-bottom: 2rem;

            .image-holder{
                img{
                    width: 100%;
                }
            }
        }

        .article-bottom-decoration-line-vr {
            position: absolute;
            width: 0.313rem;
            height: 50%;
            bottom: 0;
            left: 4rem;
            z-index: 2;
            background-color: $fancy;
            box-shadow: 5px 0px 2px rgba($darkest, 16%);
        }
    }

    .article-bottom {
        position: relative;
        width: 100%;
        top: -1.5rem;
        padding-top: 1.5rem;
        padding-bottom: 2rem;
        background-color: $primary-soft;
        p {
            text-align: justify;
            padding-top: 2rem;
            margin: 0 auto;
            font: {
                size: 14px;
                weight: 300;
            }
            color: $darkest;
            strong {
                font:{
                    weight: 500;
                }
            }
        }

        .article-bottom-box {
            max-width: $sm-width-container;
            margin: 0 auto;
        }
        .image-after-paint-box{
            width: 100%;   
            padding-top: 2rem;

            .image-holder{
                img{
                    width: 100%;
                }
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

    .article-first-box {
        position: relative;
        width: 100%;
        p {
            font: {
                size: 16px;
                weight: 300;
            }
        }
    }

    .article-second-box {
        .second-box-paragraph {
            p {
                font: {
                    size: 16px;
                }
            }
        }
    }

    .article-bottom{

        .article-bottom-box{
            p{
                font:{
                    size: 16px;
                }
            }
        }
    }

}

</style>