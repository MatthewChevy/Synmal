<template>
    <router-link class="link" to="/">
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

<script>
import tableMixin from '../../mixins/tableMixins.js'

export default {
    mixins: [tableMixin]
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .container-logo {
        display: flex;
        align-items: center;
        width: 100%;
        padding-top: 0.38rem;
        padding-left: 0.25rem;
        cursor: pointer;
    }

    .img-box {
        width: 2.6rem;
        cursor: pointer;
        img {
            width: 100%;
            cursor: pointer;
        }
    }

    .h4-box {
        margin-top: -0.5rem;
        margin-left: 0.5rem;
        display: flex;
        h4 {
            color: $primary-light;
            letter-spacing: 0.5px;
            font: {
                size: 13px;
                weight: 300;
            }
        }

        a {
            color: $primary-light;
            text-decoration: none;
            letter-spacing: 0.5px;
            padding-left: 0.4rem;
            font: {
                size: 13px;
                weight: 300;
            }
        }
    }

    .link {
        text-decoration: none;
        cursor: pointer;
    }
}

@media screen and (min-width: 1024px) {
    .container-logo {
        padding-top: 0.6rem;
        padding-left: 1.2rem;
    }

    .img-box {
        width: 3.5rem;
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
