<template>
    <section class="motto">
        <div class="motto-field">
            <h3>
                Beautiful designs, powerful features and the freedom to
                build anything you want.
            </h3>
            <div class="horizontal-line"></div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.motto {
    position: relative;
    width: 100%;
    margin-top: 55%;
    padding: 1.8rem 0 2.2rem 0;
    background: $primary-light;
    border-radius: 10px 10px 0px 0px;
}

.motto-field {
    max-width: 17rem;
    margin: 0 auto;
    text-align: center;

    h3 {
        font: {
            size: 14.5px;
            weight: 300;
        }
    }
}

.horizontal-line {
    position: relative;
    height: 0.5px;
    background-color: $primary-semi-dark;
    z-index: 2;
}

@media screen and ( min-width: 375px) {

    .motto-field {
        max-width: 80%;

        h3 {
            font: {
                size: 16px;
            }
        }
    }

}

@media screen and ( min-width: 500px) {

    .motto-field {
        max-width: 22rem;

        h3 {
            font: {
                size: 16px;
            }
        }
    }

}

@media screen and ( min-width: 600px) {

    .motto-field {
        padding: 1rem 0;
        max-width: 75%;

        h3 {
            font: {
                size: 18px;
            }
        }
    }

}


</style>