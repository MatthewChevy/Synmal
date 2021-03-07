<template>
    <img
        class="welcome-image"
        src="../../assets/img/welcome-image.png"
        alt="painting"
    />
    <div class="title-center">
        <div class="title-handler">
            <h1>Synmal - Jozef Zigo</h1>
            <h2>Maliari s 20 ročnými skúsenosťami</h2>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>


.welcome-image {
    position: fixed;
    max-width: 100%;
    z-index: 0;
    opacity: 45%;
}

.title-center{
    width: 100%;
}

.title-handler {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 0;

    h1 {
        padding-top: 3.6rem;
        color: $primary-dark;
        line-height: 24px;

        font: {
            size: 23px;
            weight: 700;
        }
    }

    h2 {
        color: $primary-dark;
        font: {
            size: 13.5px;
            weight: 400;
        }
    }
}

@media screen and ( min-width: 350px) {

    .title-handler {
        margin-left: 2rem;
        text-align: left;

        h1 {
            font: {
                size: 25px;
            }
        }
        h2 {
            font: {
                size: 14.5px;
            }
        }
    }
}

@media screen and ( min-width: 450px) {

    .title-handler {
        margin-top: 1rem;
        margin-left: 3rem;
        h1 {
            font: {
                size: 27.5px;
            }
        }
        h2 {
            font: {
                size: 16px;
            }
        }
    }
}

@media screen and ( min-width: 600px) {

    .title-handler {
        margin-top: 3rem;
        margin-left: 3rem;
        h1 {
            font: {
                size: 36px;
            }
        }
        h2 {
            margin-top: 0.25rem;
            font: {
                size: 21px;
            }
        }
    }
}

@media screen and ( min-width: 768px) {
    .welcome-image {
        opacity: 85%;
    }

    .title-handler {
        margin-top: 1rem;
        margin-left: 4rem;
        h1 {
            line-height: 40px;
            font: {
                size: 44.5px;
                weight: 700;
            }
        }

        h2 {
            font: {
                size: 26px;
            }
        }
    }
}

</style>