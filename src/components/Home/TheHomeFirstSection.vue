<template>
    <section class="first-section">
        <div class="first-section-container">
            <div class="first-section-h3-wrapper">
                <h3>
                    Široké možnosti maliarskych prác a vysoká kvalita je
                    našou samozrejmosťou.
                </h3>
            </div>
            <aside class="first-section-decorative-circle"></aside>

            <div class="first-section-images-handler">
                <div class="first-section-image-first">
                    <img
                        src="../../assets/img/gallery/IMG_20200908_115947.jpg"
                        alt="Roof painting"
                    />
                </div>
                <div class="first-section-image-second">
                    <img
                        src="../../assets/img/gallery/IMG_20200716_101559.jpg"
                        alt="Interior painting"
                    />
                </div>
                <div class="first-section-image-third">
                    <img
                        src="../../assets/img/gallery/IMG_20200824_122152.jpg"
                        alt="Exterior painting"
                    />
                    <!-- <img
                        src="../../assets/img/gallery/IMG_20200824_122141.jpg"
                        alt="Exterior painting"
                    /> -->
                </div>
            </div>
        </div>
        <aside class="first-section-decorative-rectangle"></aside>
        <aside class="first-section-decorative-line"></aside>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.first-section {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    background-color: $primary-semi-dark;
}

.first-section-container {
    max-width: 95%;
    margin: 0 auto;
    padding: 1.5rem 0;
}

.first-section-h3-wrapper {
    max-width: 75%;
    margin-bottom: 1.5rem;

    h3{
        color: $primary-light;
        font: {
            size: 14.5px;
            weight: 400;
        };
    }

}

.first-section-decorative-circle {
    position: absolute;
    width: 7rem;
    height: 7rem;
    right: 6%;
    margin-top: -3rem;
    z-index: 0;
    border-radius: 50%;
    background-color: $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
}

.first-section-images-handler {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    z-index: 2;

}

.first-section-image-first{ 
    width: 49%;
    border: 3px solid $primary-light;
    border-radius: 3px;
    line-height: 0;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img{
            max-width: 100%;
        }
}

.first-section-image-second{ 
    width: 49%;
    border: 3px solid $primary-light;
    line-height: 0;
    border-radius: 3px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
        img{
            max-width: 100%;
        }
}

.first-section-image-third{ 
    width: 100%;
    margin-top: 0.3rem;
    line-height: 0;
    border: 3px solid $primary-light;
    border-radius: 3px;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);

        img{
            max-width: 100%;
        }
}

.first-section-decorative-rectangle {
    position: absolute; 
    width: 100%;
    height: 30%;
    background-color: $primary-light;
    z-index: 1;
    bottom: 30%;

}

.first-section-decorative-line {
    position: absolute;
    width: 0.313rem;
    height: 100%;
    top: 0;
    right: 0.813rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
}

@media screen and ( min-width: 400px) {
    .first-section-container{
        max-width: 85%;
    }
}

@media screen and ( min-width: 500px) {

    .first-section-h3-wrapper {
        max-width: 74%;
        h3{
            font: {
                size: 16px
            };
        }

    }

    .first-section-decorative-circle{
        width: 8rem;
        height: 8rem;
        margin-top: -5rem;
    }
}

@media screen and ( min-width: 600px) {

    .first-section-h3-wrapper {
        padding-top: 0.5rem;
        max-width: 80%;
        h3{
            font: {
                size: 20px;
            };
        }
    } 

    .first-section-decorative-circle{
        width: 9rem;
        height: 9rem;
        right: 1%;
        margin-top: -6rem;
    }

    .first-section-image-first{ 
        width: 33%;
        height: fit-content;
        border: 5px solid $primary-light;
        border-radius: 5px;
    }

    .first-section-image-second{ 
        width: 33%;
        height: fit-content;
        border: 5px solid $primary-light;
        border-radius: 5px;
    }

    .first-section-image-third{ 
        width: 33%;
        height: fit-content;
        margin-top: 0;
        border: 5px solid $primary-light;
        border-radius: 5px;
    }
}

</style>