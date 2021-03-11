<template>
    <article class="article">
        <div class="second-section-equipment-container">
            <div class="second-section-equipment">
                <div class="paint-machine-about">
                    <div class="paint-machine-logo">
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
                        src="../../assets/img/gallery/131930597_3221521607952808_6118545964526696010_n.jpg"
                        alt="Airless painting"
                    />
                </div>
            </div>
        </div>
        <div class="second-section-bottom-image-wrapper">
            <div class="second-section-bottom-image">
                <img
                    src="../../assets/img/wagner-machine.jpg"
                    alt="Wagner Machine"
                />
            </div>
        </div>
    </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px) {

    .article{
        display: block;
    }
    
    .second-section-equipment-container {
        position: relative;
        width: 100%;
        background-color: $primary;
        z-index: 2;
    }

    .second-section-equipment {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 97%;
        margin: 0 auto;
        padding: 1rem 0 1rem 0.25rem;
        z-index: 2;
    }

    .paint-machine-about {
        width: 50%;
    }

    .paint-machine-logo {
        width: 80%;
        img {
            max-width: 100%;
        }
    }

    .second-section-paragraph-holder {
        max-width: 95%;
        padding-top: 1rem;
        p {
            font: {
                size: 10px;
                weight: 400;
            }
        }
    }

    .second-section-top-image {
        width: 43%;
        height: fit-content;
        border-radius: 3px;
        line-height: 0;
        border: 5px solid $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img {
            max-width: 100%;
        }
    }

    .second-section-bottom-image-wrapper {
        position: relative;
        width: 82%;
        margin: 0 auto;
        padding: 1rem 0;
        z-index: 3;
    }

    .second-section-bottom-image {
        border-radius: 3px;
        line-height: 0;
        border: 5px solid $primary-light;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img {
            max-width: 100%;
        }
    }

    .second-section-decorative-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        top: 0;
        right: 0.813rem;
        z-index: 0;
        background-color: $fancy;
        box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
    }
}

@media screen and (min-width: 375px) {

    .second-section-paragraph-holder {
        p {
            font: {
                size: 11px;
            }
        }
    }
}

@media screen and (min-width: 640px) {

    .article{
        display: none;
    }
}



</style>
