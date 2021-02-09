<template>
    <div class="container">
        <!-- <div class="navigation-logo-wrapper"> -->
        <router-link to="/">
            <img
                class="navigation-logo"
                src="../assets/img/paint.png"
                alt="Logo"
            />
        </router-link>
        <!-- </div> -->
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding-top: 0.25rem;
    max-width: 7rem;
    animation: logo-smooth 1s ease-in-out;
    animation-fill-mode: forwards;
}

@keyframes logo-smooth {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

img {
    max-width: 100%;
}

@media screen and (min-width: $w-md) {
    .container {
        max-width: 8rem;
    }
}

@media screen and (min-width: $w-lg) {
    .container {
        position: relative;
        z-index: 11;
    }
}

@media screen and (min-width: $w-xl) {
    .container {
        position: absolute;
        max-width: 14.6rem;
        top: -0.4rem;
        left: 1rem;
        animation: logo-smooth-xl 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes logo-smooth-xl {
        0% {
            transform: translateX(-15%);
        }
        100% {
            transform: translateX(0%);
        }
    }
}

@media screen and (min-width: $w-2xl) {
    .container {
        position: absolute;
        max-width: 16rem;
        top: -0.8rem;
        left: 1rem;
        animation: logo-smooth-2xl 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes logo-smooth-2xl {
        0% {
            transform: translateX(-15%);
        }
        100% {
            transform: translateX(5%);
        }
    }
}

@media screen and (min-width: $w-3xl) {
    .container {
        max-width: 16.8rem;
        top: -0.8rem;
        left: 1rem;
        animation: logo-smooth-3xl 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes logo-smooth-3xl {
        0% {
            transform: translateX(-15%);
        }
        100% {
            transform: translateX(25%);
        }
    }
}

@media screen and (min-width: $w-4k) {
    .container {
        max-width: 34rem;
        top: -1.35rem;
        left: 1rem;
        animation: logo-smooth-4k 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes logo-smooth-4k {
        0% {
            transform: translateX(-15%);
        }
        100% {
            transform: translateX(50%);
        }
    }
}
</style>
