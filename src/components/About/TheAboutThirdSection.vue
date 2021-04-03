<template>
    <section class="section">

        <article class="article-top">

            <div class="center">
                <div class="article-title">
                    <h3>Priebeh našej práce</h3>
                </div>
                <p>
                    Po kontakte s Vami urobíme osobnú prehliadku Vašich
                    priestorov, na základe ktorej vypracujeme cenovú
                    ponuku a dohodneme termín
                </p>
            </div>
        </article>

        <div class="container">

            <article class="article-first-box">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magnaqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis autrure dolor in
                    reprehenderit
                </p>
                <div class="image-before-paint">
                    <p>Fotka pred maľovaním</p>
                </div>
            </article>

            <aside class="cartoon-person">
                <div class="cartoon-person-align">
                    <img
                        src="../../assets/img/person.png"
                        alt="Cartoon person"
                    />
                </div>
            </aside>

            <aside class="decoration-line-box">
                <div class="article-left-side-decoration-line-hr"></div>
                <div class="article-left-side-decoration-line-vr"></div>
            </aside>

        </div>

        <article class="article-second-box">
            <div class="center">
                    <div class="second-box-paragraph">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor dunt ut labore et dolore
                            magna aliqua. Ut fffffenim ad minim veniam, quis nostrud
                            itation ullamco laboris nisi ut aliquip ex commodo
                            consequat. Duis aute irure
                        </p>
                    </div>
                    <div class="image-painting-box">
                        <div class="image-painting">
                            <p>Fotka počas maľovania</p>
                        </div>
                    </div>
                </div>
            <div class="article-bottom-decoration-line-vr"></div>
        </article>

        <article class="article-bottom">
            <div class="article-bottom-box">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor dunt ut labore et dolore magna
                    aliqua. Ut eni ad minim veniam, quis nostru
                </p>
                <div class="image-after-paint">
                    <p>Fotka po maľovaní</p>
                </div>
            </div>
        </article>

    </section>
</template>

<script>
    export default {
        
    }
</script>

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
            padding: 3rem 0;

            .article-title {
                padding: 0;
                text-align: center;
                h3 {
                    font: {
                        size: 24px;
                        weight: 600;
                    }
                }
            }

            p {
                padding: 1rem 0;
                text-align: center;
                font: {
                    size: 14px;
                    weight: 300;
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
        padding: 2.5rem 0;
        p {
            font: {
                size: 14px;
                weight: 300;
            }
        }
        .image-before-paint {
            
            width: 12.5rem;
            height: 16.563rem;
            margin-top: 2rem;
            z-index: 3;
            border: 5px solid $primary-light;
            background-color: $primary-semi-dark;
            box-shadow: 5px 5px 5px rgba($darkest, 16%);
            p {
                min-width: 100%;
                padding-top: 7rem;
                text-align: center;
                font: {
                    size: 11px;
                    weight: 300;
                }
                color: $primary-light;
            }
        }
    }

    .cartoon-person {
        position: relative;

        .cartoon-person-align {
            position: relative;
            width: 7rem;
            height: auto;
            top: 15px;
            left: 60%;
            margin-top: -19rem;

            img {
                width: 100%;
            }
        }
    }

    .decoration-line-box{
        position: relative;

        .article-left-side-decoration-line-hr {
            position: absolute;
            width: 60%;
            height: 0.313rem;
            top: -2rem;
            left: 1.2rem;
            z-index: 1;
            background-color: $fancy;
            box-shadow: 5px 0px 1px rgba($darkest, 16%);
        }

        .article-left-side-decoration-line-vr {
            position: absolute;
            width: 0.313rem;
            height: 23.813rem;
            top: -2rem;
            left: 1.2rem;
            z-index: 2;
            background-color: $fancy;
            box-shadow: 5px 0px 2px rgba($darkest, 16%);
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
            display:flex;
            justify-content: flex-end;
            width: 100%;
            padding: 2rem 0;
            text-align: right;

            p {
                width: 86%;
                font: {
                    size: 14px;
                    weight: 300;
                }
            }
        }

        .image-painting-box {
            display:flex;
            justify-content: flex-end;
            padding-bottom: 2rem;

            .image-painting {
                width: 12.5rem;
                height: 16.563rem;
                border: 5px solid $primary-light;
                background-color: $primary-semi-dark;
                box-shadow: 5px 5px 5px rgba($darkest, 16%);

                p {
                    min-width: 100%;
                    padding-top: 7rem;
                    text-align: center;
                    font: {
                        size: 11px;
                        weight: 300;
                    }
                    color: $primary-light;
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
        background-color: $primary-semi-dark;
        p {
            text-align: center;
            padding-top: 1.5rem;
            font: {
                size: 14px;
                weight: 300;
            }
            color: $primary-light;
        }

        .article-bottom-box {
            max-width: 300px;
            margin: 0 auto;
        }

        .image-after-paint {
            width: 300px;
            height: 180px;
            background-color: #ececec;
            border: 5px solid white;
            margin-top: 1.5rem;
            p {
                color: $darkest;
                padding-top: 5rem;
            }
        }
    }

}

@media screen and ( min-width: 375px ) {
}

</style>