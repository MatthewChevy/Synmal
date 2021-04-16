<template>
    <div class="title-container">
        <div class="box">
            <div class="title">
                <span class="block"></span>
                <h1>JOZEF ZIGO - SYNMAL<span></span></h1>
            </div>
            <div class="sub-title">
                <div class="sub-title-block"></div>
                <p>Maliarkse práce</p>
            </div>
        </div>
    </div>

    <div class="title-container">
        <div class="box">
            <div class="title">
                <span class="block"></span>
                <h1>JOZEF ZIGO - SYNMAL<span></span></h1>
            </div>
            <div class="sub-title">
                <div class="sub-title-block"></div>
                <p>Maliarkse práce</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {

    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: $primary-dark;
    }

    .box {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 97%;
        top: -8rem;
    }

    .title {
        position: relative;
        display: flex;
        width: 100%;
        height: 3.125rem;
        align-items: center;
    }

    .block {
        position: fixed;
        display: flex;
        width: 0%;
        height: inherit;
        background: $title-decoration;
        animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    }

    h1 {
        position: fixed;
        display: flex;
        align-items: baseline;
        margin-left: 2.5%;
        font:{
            family: $font-family;
            size: 8.2vw;
            
        }
        color: $primary-soft;
        opacity: 0;
        animation: mainFadeIn 2s 1.6s forwards;

        span {
            position: absolute;
            width: 0rem;
            height: 0rem;
            right: -3%;
            bottom: 0.813rem;
            margin-top: -0.625rem;
            margin-left: 0.313rem;
            border-radius: 50%;
            background: $title-decoration;
            animation: popIn .8s 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        }
    }

    .sub-title {
        position: fixed;
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.875rem;
        margin-top: 13%;
    }

    .sub-title-block {
        position: absolute;
        display: flex;
        width: 0%;
        height: inherit;
        background: $fancy;
        animation: secBlock 2s 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    }

    p {
        position: fixed;
        font:{
            size: 4vw;
            weight: 600;
            family: $second-font-family;
        }
        margin-left: 2.5%;
        text-transform: uppercase;
        opacity: 0;
        color: $primary-soft;
        letter-spacing: 5px;
        animation: secFadeIn 2s 3.2s forwards;
    }

    h3 {
        position: absolute;
        top: 4rem;
        margin: 1rem;
        color: $title-decoration-light;
        z-index: 7;
    }

    .width {
        top: 4rem;
    }

    .height {
        top: 5.5rem;
    }

    @keyframes mainBlock {
        0% {
            width: 0%;
            left: 0;
        }
        50% {
            width: 100%;
            left: 0;
        }
        100% {
            width: 0;
            left: 100%;
        }
    }

    @keyframes secBlock {
        0% {
            width: 0%;
            left: 0;
        }
        50% {
            width: 100%;
            left: 0;
        }
        100% {
            width: 0;
            left: 100%;
        }
    }

    @keyframes mainFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes popIn {
        0% {
            width: 0rem;
            height: 0rem;
            border: 0px solid $primary-light;
            background: $title-decoration-light;
            opacity: 0;
        }
        50% {
            width: 0.625rem;
            height: 0.625rem;
            bottom: 2.813rem;
            background: $title-decoration-light;
            opacity: 1;
        }
        65% {
            width: 0.438rem;
            height: 0.438rem;
            bottom: 0rem;
        }
        80% {
            width: 0.625rem;
            height: 0.625rem;
            bottom: 1.25rem
        }
        100% {
            width: 0.438rem;
            height: 0.438rem;
            background: $title-decoration-light;
            border: 0px solid $primary-dark;
            bottom: 25%;
        }
    }

    @keyframes secFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.85;
        }
    }
}

@media screen and (min-width: 600px) {

    @keyframes popIn {
        50% {
            width: 0.938rem;
            height: 0.938rem;
            bottom: 2.813rem;
            opacity: 1;
            background: $title-decoration-light;
        }
        65% {
            width: 0.625rem;
            height: 0.375rem;
            bottom: 0rem;
        }
        80% {
            width: 0.5rem;
            height: 0.5rem;
            bottom: 1.25rem;
        }
        100% {
            width: 0.625rem;
            height: 0.625rem;
            bottom: 25%;
            border: 0px solid $primary-dark;
            background: $title-decoration-light;
        }
    }
}

@media screen and (min-width: 768px) {

    @keyframes popIn {
        0% {
            width: 0rem;
            height: 0rem;
            border: 0px solid $primary-light;
            opacity: 0;
            background: $title-decoration-light;
        }
        50% {
            width: 1rem;
            height:  1rem;
            bottom: 3rem;
            opacity: 1;
            background: $title-decoration-light;
        }
        65% {
            width: 0.813rem;
            height: 0.625rem;
            bottom: 0rem;
        }
        80% {
            width: 0.813rem;
            height: 0.813rem;
            bottom: 1.438rem
        }
        100% {
            width: 0.813rem;
            height: 0.813rem;
            bottom: 25%;
            border: 0px solid $primary-dark;
            background: $title-decoration-light;
        }
    }
}


</style>