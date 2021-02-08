<template>
    <main>
        <!-- <div class="container"> -->
            <img
                class="painting-large-image"
                src="../assets/img/painting.png"
                alt="old and new wall paint"
            />
        
            <img
                class="persons-image"
                src="../assets/img/persons.png"
                alt="people"
            />
        <!-- </div> -->
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>


.painting-large-image{
    position: relative;
    width: 100vw;
    height: auto;
}

.persons-image{
    position: relative;
    display: block;
    margin: 0rem auto;
    bottom: 8.55rem;
    width: 12rem;
}

@media screen and (min-width: $w-2sm) {
    //550px+

    .persons-image{
        bottom: 11.3rem;
        width: 16rem;
    }
}

@media screen and (min-width: $w-sm) {
    //640px+

    .persons-image{
        bottom: 14.09rem;
        width: 20rem;
    }
}

@media screen and (min-width: $w-md) {
    //768px+

    .persons-image{
        bottom: 14.01rem;
        width: 20rem;
    }
}

@media screen and (min-width: $w-lg) {
    //1024px+

    main {
        position: relative;
        width: 100%;
        height: 30rem;
        top: 0rem;
        margin: 0 auto;
        overflow: hidden;
    }
    
    .painting-large-image {
        transform: translateX(-50%);
        transform: translateY(-3%);
        min-height: 100%;
        min-width: 100%;
        animation: move-image-lg 100s 3s infinite ease-in;
    }

    .persons-image{
        position: absolute;
        bottom: 26.7rem;
        width: 27rem;
        margin: 0 auto;
        text-align: center;
        left: 33.6%;
        top: 37.7%;
    }

    @keyframes move-image-lg {
        0% {
            transform: translateY(-3%);
        }
        50% {
            transform: translateY(-20%);
        }
        100% {
            transform: translateY(-3%);
        }
    }
}

@media screen and (min-width: $w-xl) {
    //1280px+

    main {
        position: relative;
        width: 95%;
        height: 28rem;
        margin-top: 6.5%;
        border-radius: 0.5rem;
        transform: translateY(-12%);
        animation: ready 1.3s 0.3s ease-in-out;
        animation-fill-mode: forwards;  
    }

    .painting-large-image {
        transform: translateX(-50%);
        transform: translateY(-2%);
        min-height: 100%;
        min-width: 100%;
        animation: move-image-xl 100s 3s infinite ease-in-out;
    }

    .persons-image{
        left: 35.6%;
    }

    @keyframes move-image-xl {
        0% {
            transform: translateY(-2%);
        }
        50% {
            transform: translateY(-35%);
        }
        100% {
            transform: translateY(-2%);
        }
    }

    @keyframes ready{
    0% { transform: translateY(-12%); }
    65% { transform: translateY(8%); }
    100% { transform: translateY(6%); }
    }
}

@media screen and (min-width: $w-2xl) {
    //1536px+

    main {
        height: 35rem;
        margin-top: 6%;
    }

    .painting-large-image {
        transform: translateY(-2%);
        animation: move-image-2xl 75s 3s infinite ease-in-out;
    }


    @keyframes move-image-2xl {
        0% {
            transform: translateY(-2%);
        }
        50% {
            transform: translateY(-35%);
        }
        100% {
            transform: translateY(-2%);
        }
    }
}

@media screen and (min-width: $w-3xl) {

    main {
        margin-top: 6%;
    }

    .persons-image{
        left: 38.5%;
        width: 34rem;
    }
}


</style>
