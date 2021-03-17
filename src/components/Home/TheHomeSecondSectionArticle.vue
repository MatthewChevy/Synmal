<template>
    <article class="article">
        <div class="second-section-wagner-color-splitter">
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
        </div>
        <div class="second-section-wagner-container">
            <div class="second-section-wagner">

                <div class="second-section-top-images">
                    <div class="second-section-top-firstImage">
                        <img

                            src="../../assets/img/wagner-machine.jpg"
                            alt="Wagner Machine"
                        />
                    </div>
                    <div class="second-section-top-secondImage">
                        <img
                            src="../../assets/img/gallery/IMG_20200824_122152.jpg"
                            alt="Exterior painting"
                        />
                    </div>
                </div>
            </div> 
        </div>
        <div class="second-section-bottom-handler">
            <div class="second-section-bottom-handler-flex">
                <div class="second-section-bottom-image">
                    <img
                        src="../../assets/img/gallery/131930597_3221521607952808_6118545964526696010_n.jpg"
                        alt="Painting"
                    /> 
                </div>  
                <div class="second-section-bottom-paragraph-handler">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    </p>
                </div> 
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px) {
    .article{
        display: none;
    }
}

@media screen and (min-width: 640px) {

    .article{
        display: block;
    }

    .second-section-wagner-color-splitter {
        position: relative;
        background-color: $primary;
        z-index: 1;
    }

    .paint-machine-about{
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto;
        padding: 1rem 0;
    }

    .second-section-logo-holder {
        width: 30%;
        img {
            width: 100%;
        }
    }

    .second-section-paragraph-holder {
        width: 23rem;
        text-align: right;
        padding: 0;
        p {
            font: {
                size: 14px;
            }
        }
    }

    .second-section-wagner-container {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-color: unset;
    }

    .second-section-wagner {
        width: 85%;
        margin: 0 auto;
        padding-left: 0;
    }

    .second-section-top-images {
        display: flex;
        justify-content: space-between;
    }

    .second-section-top-firstImage {
        width: 53%;
        height: fit-content;
        line-height: 0;
        border: 5px solid $primary-light;
        img {
            width: 100%;
        }
    }

    .second-section-top-secondImage {
        width: 45%;
        height: fit-content;
        line-height: 0;
        border: 5px solid $primary-light;
        img {
            width: 100%;
        }
    }

    .second-section-bottom-handler {
        position: relative;
        width: 100%;
        background-color: $primary-semi-light;
        padding: 0;
        z-index: 1;
    }

    .second-section-bottom-handler-flex {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 85%;
        margin: 0 auto;
        padding: 0.75rem 0 1rem 0;
        top: -5rem;
    }

    .second-section-bottom-paragraph-handler {
        width: 61%;

        p {
            color: $primary-light;
            background-color: $primary-semi-dark;
            padding: 1.5rem 1rem;
            font: {
                size: 14px;
                weight: 400;
            }
            box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.16);
        }
    }

    .second-section-bottom-image {
        width: 35%;
        top: 0;
        margin: 0;
        padding: 0;
        line-height: 0;
        border: 5px solid $primary-light;
        height: fit-content;
        img {
            width: 100%;
        }
    }
}

</style>