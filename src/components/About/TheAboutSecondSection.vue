<template>
    <section class="section">

        <aside class="cartoon-person">
            <img src="../../assets/img/person2.png" alt="Cartoon person" />
        </aside>

        <span class="decorative-circle-box">
            <div class="decorative-circle-bigger">
                <div class="decorative-circle-smaller"></div>
            </div>
        </span>

        <article class="article">

            <div class="article-title">
                <h3>Naše najväčšie úspechy</h3>
            </div>

            <div class="top-box">
                <div class="top-box-paragraph">
                    <p>
                        Náš najväčší úspech je že môžeme vykonávať remeslo
                        ktoré nás už dlhé roky baví napĺňa a pomáha ľudom
                    </p>
                </div>
            </div>

            <div class="bottom-box">
                <div class="bottom-box-paragraph">
                    <p>
                        Jaslovské Bohunice, Bešeňová, VW Group, alebo Mondi
                        S.C.P. sú spoločnosti s ktorým sme mali možnosť
                        pomôcť vymaľovať ich priestory.
                    </p>
                </div>
            </div>

            <span class="decorative-line"></span>

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

    .cartoon-person {
        position: relative;
        width: 5.688rem;
        height: 18.4rem;
        top: -1.3rem;
        right: 33%;
        margin: 0 auto;
        z-index: 1;

        img {
            max-width: 100%;
        }
    }

    .decorative-circle-box {

        .decorative-circle-bigger {
            position: absolute;
            width: 15rem;
            height: 15rem;
            top: 3rem;
            right: 0;
            background: $primary;
            border-radius: 50%;
            box-shadow: 5px 5px 5px rgba($darkest, 16%);

            .decorative-circle-smaller {
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

    .article {
        position: relative;
        width: 100%;
        top: -3rem;
        padding: 2rem 0;
        z-index: 1;
        background-color: $primary-dark;
        box-shadow: 8px 8px 5px rgba($darkest, 16%);

        .article-title {
            position: relative;
            width: 18.75rem;
            margin: 0 auto;
            z-index: 1;

            h3 {
                padding-bottom: 1.5rem;
                text-align: center;
                color: $primary-light;
                font: {
                    size: 24px;
                    weight: 700;
                }
            }
        }

        .top-box {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 76%;
            padding: 1rem 0;
            z-index: 2;
            background-color: $primary;
            border-radius: 0 5px 5px 0;

            .top-box-paragraph{  
                position: relative;
                max-width: 85%;
                z-index: 2;

                p {
                font: {
                        size: 14px;
                        weight: 300;
                    }
                }
            }

        }

        .bottom-box{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 4rem;
            padding: 1rem;
            z-index: 1;
            background-color: $primary-light;


            .bottom-box-paragraph {
                width: 100%;
                position: relative;
                z-index: 3;

                p {
                    text-align: center;
                    font: {
                        size: 14px;
                        weight: 300;
                    }
                }
            }
        }

    }

    .decorative-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        left: 1rem;
        z-index: 0;
        background-color: $fancy;
    }
}

@media screen and ( min-width: 350px ) {

    .article{

        .top-box{ 
            padding: 1.25rem 0;
            .top-box-paragraph{
                p{
                    font: {
                        size: 16px;
                        weight: 300;
                    }
                }
            }
        }

        .bottom-box{
            padding: 1.25rem 0;
            .bottom-box-paragraph{
                p{
                    font: {
                        size: 16px;
                        weight: 300;
                    }
                }
            }
        }
    }

}

@media screen and ( min-width: 375px ) {

    .article {
        padding: 2rem 0 3rem 0;

        .article-title {
            h3 {
                font: {
                    size: 24px;
                    weight: 600;
                } 
            }
        }
    }
}





</style>