<template>
    <router-link to="/">
        <div class="container-logo">
            <div class="img-box">
                <img
                    class="navigation-logo"
                    src="../../assets/img/decoration/logo.png"
                    alt="Logo"
                />
            </div>
            <div class="h4-box">
                <h4>Maliarske práce</h4>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .container-logo {
        display: flex;
        align-items: center;
        width: 100%;
        padding-top: 0.5rem;
    }

    .img-box {
        width: 3rem;
        img {
            width: 100%;
        }
    }

    .h4-box {
        margin-top: -0.5rem;
        margin-left: 0.5rem;
        h4 {
            color: $primary-light;
            text-decoration: none;
            font: {
                size: 12px;
                weight: 300;
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .container-logo {
        padding-top: 0.7rem;
    }

    .img-box {
        width: 4rem;
    }

    .h4-box {
        h4 {
            font: {
                size: 16px;
                weight: 300;
            }
        }
    }
}
</style>
