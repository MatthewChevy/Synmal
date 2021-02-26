<template>
    <div class="container">
        <router-link to="/">
            <img
                class="navigation-logo"
                src="../assets/img/logo.png"
                alt="Logo"
            />
        </router-link>
    </div>
    <h4>Maliarske práce</h4>
</template>

<style lang="scss" scoped>
.container {
    max-width: 44px;
    display: flex;
}

img {
    width: 100%;
    margin: 9px 10px;
}

h4 {
    font: {
        size: 12px;
        weight: 300;
    }
    position: absolute;
    top: 1.05rem;
    left: 4.2rem;
    color: white;
}
</style>
