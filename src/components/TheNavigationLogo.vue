<template>
    <div class="center">
        <div class="container">
            <div class="navigation-logo-wrapper">
                <router-link to="/">
                    <img
                        class="navigation-logo"
                        src="../assets/img/paint.png"
                        alt="Logo"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.center {
    margin: {
        left: 0.3rem;
        right: 1.4rem;
        top: 0.6rem;
        bottom: 0.6rem;
    }
}
.container {
    display: flex;
    justify-content: space-between;
}

.navigation-logo-wrapper {
    width: 5rem;
}

.navigation-logo {
    max-width: 6.5em;
}
</style>
