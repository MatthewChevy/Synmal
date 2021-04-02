<template>
    <section class="section">

        <div class="top-box">
            <div class="rectangle">
                <div class="rectangle-align">
                    <p>
                        Za roky našej práce máme mnoho spokojných ľudí, ktorým
                        sme pomohli zveľadiť ich <strong>bytové</strong> a
                        <strong>nebytové</strong> priestory
                    </p>
                </div>
            </div>
        </div>

        <div class="bottom-box">
            <div class="rectangle">
                <p>
                    Sme rodinná firma s 20 ročnými skúsenosťami
                </p>
                <div class="decorative-paint-roller">
                    <img
                        src="../../assets/img/paint-roller.png"
                        alt="Paint roller"
                    />
                </div>
            </div>
        </div>

        <article class="article-box">
            <div class="article-h2">
                <h2>Naše pôsobenie</h2>
            </div>
            <div class="article-paragraph">
                <p>
                    Sme spoločnosť, ktorej hodnoty sú postavené na
                    úprimnosti, poctivej práci a zodpovednému prístupu ku
                    klientom. S dlhoročnými skúsenosťami sme sa stali v
                    našom odbore silnou konkurenciou. Našou výhodou je
                    zodpovednosť, spoľahlivosť. Disponujeme bohatým
                    technickým vybavením. Pôsobíme prevažne na
                    <strong>Liptove</strong> ale po vzájomnej dohode robíme
                    kompromisy.
                </p>
            </div>
        </article>
    </section>
</template>


<style lang="scss" scoped>

@media screen and ( min-width: 0px ) {

    .section {
        position: relative;
        width: 100%;
        background: $primary-light;
        border-radius: 10px 10px 0 0;
    }

    .container {
        width: $sm-width-container;  
        margin: 0 auto;
    }

    .top-box {
    padding-top: 3rem;
    width: 100%;

        .rectangle {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0.75rem 0;
            background-color: $primary;
            border-radius: 5px 0 0 5px;

            p {
                width: 100%;
                position: relative;
                text-align: center;
                margin: 0 auto;
                font: {
                    size: 14px;
                    weight: 300;
                }

                strong {
                    font-weight: 500;
                }
            }
        
        }
    }

    .bottom-box {

        .rectangle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 62.5%;
            max-height: 4.7rem;
            margin: 3rem 0;
            padding: 1rem;
            z-index: 0;
            background-color: $fancy;
            box-shadow: 5px 5px 6px rgba($darkest, 16%);

            p {
                position: relative;
                width: 10.563rem;
                text-align: center;

                font: {
                    size: 14px;
                    weight: 300;
                }
            }
        
            .decorative-paint-roller {
                position: absolute;
                left: 65%;
                width: 4.9rem;
                transform: rotate3d(1, 1, 0, 180deg);
                img {
                    width: 100%;
                }
            }
        }
    }

    .article-box{
        position: relative;
        width: 100%;
        padding-top: 0.563rem;
        padding-bottom: 3rem;
        text-align: center;
        box-shadow: 5px 5px 6px rgba($darkest, 16%);

        .article-h2 {
            h2 {
                font: {
                    size: 25px;
                    weight: 400;
                }
            }
        }

        .article-paragraph {
            width: $sm-width-container;
            margin: 2rem auto 0 auto;

            p {
                margin: 0 auto;
                text-align: center;
                font: {
                    size: 14px;
                    weight: 300;
                }

                strong {
                    font-weight: 500;
                }
            }
        }
    }
}

@media screen and ( min-width: 350px ) {

    .top-box  {
        .rectangle { 
            width: 100%;
            padding: 1rem 0;
               
            .rectangle-align{
                    width: $sm-width-container;
                    max-width: 25rem;
                p {
                    font: {
                        size: 16px;
                        weight: 300;
                    }

                    strong {
                        font-weight: 500;
                    }
                }
            }
        }
        
    }

    .bottom-box {

    .rectangle {
        p {
            width: 12rem;
            font: {
                size: 16px;
                weight: 300;
            }
        }
    
        .decorative-paint-roller {
            position: absolute;
            left: 65%;
            width: 4.9rem;
            transform: rotate3d(1, 1, 0, 180deg);
            img {
                width: 100%;
            }
        }
    }

    }
    
}


</style>