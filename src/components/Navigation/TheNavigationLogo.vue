<template>
    <div class="container">
        <router-link to="/">
            <img
                class="navigation-logo"
                src="../../assets/img/logo.png"
                alt="Logo"
            />
        </router-link>
    </div>
    <h4>Maliarske práce</h4>
</template>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    
    .container {
        max-width: 2.75rem;
        display: flex;
    }

    img {
        width: 100%;
        margin: 0.563rem 0.625rem;
    }

    h4 {
        position: absolute;
        top: 1.05rem;
        left: 4.2rem;
        color: $primary-light;
        font: {
            size: 12px;
            weight: 300;
        }
    }
}

@media screen and (min-width: 1024px) {
    .container {
        max-width: 3.75rem
    }

    img {
        margin: 0.813rem 1.25rem;
    }

    h4 {
        top: 1.4rem;
        left: 6.1rem;
        font: {
            size: 17px;
        }
    }
}
</style>
