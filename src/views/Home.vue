<template>
    <main>
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
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
    position: absolute;
}

.persons-image {
    position: absolute;
    width: 15rem;
    bottom: 0;
    left: 22%;
}

@media screen and (min-width: $w-sm) {
    //640px+

    main {
        width: 100%;
        height: auto;
    }

    .persons-image {
        width: 25rem;
        bottom: 0rem;
        left: 24.2%;
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

    .persons-image {
        width: 26rem;
        height: 17rem;
        left: 30.5%;
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
        width: 95%;
        height: 28rem;
        margin-top: 3%;
        border-radius: 0.5rem;
    }

    .painting-large-image {
        transform: translateX(-50%);
        transform: translateY(-2%);
        min-height: 100%;
        min-width: 100%;
        animation: move-image-xl 100s 3s infinite ease-in;
    }

    .persons-image {
        width: 28rem;
        height: 19rem;
        left: 34.4%;
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
}

@media screen and (min-width: $w-2xl) {
    //1536px+

    main {
        height: 35rem;
        margin-top: 3%;
    }

    .painting-large-image {
        transform: translateY(-2%);
        animation: move-image-2xl 75s 3s infinite ease-in-out;
    }

    .persons-image {
        width: 35rem;
        left: 36.7%;
        height: 24rem;
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
        margin-top: 2.5%;
    }
}

@media screen and (min-width: $w-4k) {
    main {
        margin-top: 1.3%;
    }
}
</style>
