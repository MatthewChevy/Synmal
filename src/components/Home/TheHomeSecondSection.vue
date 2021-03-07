<template>
    <section class="second-section">
        <div class="second-section-z-index-background"></div>
        <div class="second-section-background">
            <div class="second-section-container">
                <div class="second-section-h3-handler">
                    <h3>
                        Keďže aj my ideme s dobou, ponúkame veľmi populárne a moderné
                        strojové maľovanie interiérov a exteriérov
                    </h3>
                </div>
            </div>
                <div class="second-section-wagner-color-splitter">
                    <div class="second-section-wagner-container">
                        <div class="second-section-wagner">
                            <div class="paint-machine-about">
                                <div class="second-section-logo-holder">
                                    <img
                                        src="../../assets/img/wagner.png"
                                        alt="wagner logo"
                                    />
                                </div>
                                <div class="second-section-paragraph-holder">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris.
                                    </p>
                                </div>
                            </div>
                            <div class="second-section-top-image">
                                <img
                                    src="../../assets/img/airless-painting.jpg"
                                    alt="Airless painting"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second-section-bottom-handler">
                    <div class="second-section-bottom-image">
                        <img
                            src="../../assets/img/wagner-machine.jpg"
                            alt="Wagner Machine"
                        />
                    </div>
                </div>
            </div>
            <aside class="second-section-decorative-line"></aside>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

//second section-------------------------------------------

.second-section{
    position: relative;
    width: 100%;
    z-index: 3;
    background-color: $primary-light;
}

.second-section-z-index-background{
    position: absolute;
    width: 100%;
    height: 122%;
    top: -2rem;
    z-index: 0;
    background-color: $primary-light;
}

.second-section-background{
    position: relative;
    width: 100%;
    background-color: $primary-semi-dark;
}

.second-section-container{
    width: 95%;
    margin: 0 auto;
}

.second-section-h3-handler{
    max-width: 97%;
    padding: 1rem 0;

    h3{
        color: $primary-light;
        font:{
            size: 13.5px;
            weight: 400;
        }
    }
}

.second-section-wagner-color-splitter{
    position: relative;
    width: 100%;
    z-index: 1;
    background-color: $primary;
}

.second-section-wagner-container{
    width: 95%;
    margin: 0 auto;
    padding: 3% 0 7% 0;
}

.second-section-wagner{
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}

.paint-machine-about{
    width: 49%;
}

.second-section-logo-holder{
    width: 87%;
    img{
        max-width:100%;
    }
}

.second-section-paragraph-holder{
    max-width: 100%;
    padding-top: 5%;
    p{
        font:{
            size: 10px;
            weight: 400;
        }
    }
}

.second-section-top-image{
    width: 49%;
    height: fit-content;
    margin-top: 6%;
    border-radius: 3px;
    line-height: 0;
    border: 3px solid $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

    img{
        max-width:100%;
    }
}

.second-section-bottom-handler{
    max-height: 6rem;
}

.second-section-bottom-image{
    position: relative;
    width: 76%;
    top: -1rem;
    margin: 0 auto;
    border-radius: 3px;
    line-height: 0;
    z-index: 3;
    border: 3px solid $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

    img{
        max-width:100%;
    }
}

.second-section-decorative-line{
    position: absolute;
    width: 0.313rem;
    height: 100%;
    top: 0;
    right: 0.813rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgb(0 0 0 / 16%); 
}

@media screen and ( min-width: 375px){

    .second-section{
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        background-color: $primary-light;
    }

    .second-section-background{
        width: 95%;
        border-radius:10px 0 0 10px ;
    }

    .second-section-h3-handler{
    max-width: 95%;
    padding: 1rem 0;

    h3{
        color: $primary-light;
        font:{
            size: 14px;
            weight: 400;
        }
    }
}

    .second-section-paragraph-holder{
        p{
            font:{
                size: 11px;
            }
        }
    }
}

@media screen and ( min-width: 400px){
    .second-section-container{
        width: 85%;
    }

    .second-section-wagner-container {
        width: 85%;
    }

    .second-section-bottom-image{
        width: 70%;
    }
}

@media screen and ( min-width: 500px) {

    .second-section-z-index-background{
        height: 46rem;
    }

    .second-section-h3-handler{
        h3{
            font:{
                size: 16px;
            }
        }
    }

    .second-section-paragraph-holder{
        p{
            font:{
                size: 12px;
            }
        }
    }

}

@media screen and ( min-width: 600px) {

    .second-section-h3-handler{
        max-width: 29rem;

        h3{
            font:{
                size: 18px;
            }
        }
    }

    .second-section-paragraph-holder{
        p{
            font:{
                size: 14px
            }
        };
    }

}

</style>