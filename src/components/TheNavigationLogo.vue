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

.container{
    padding-top: 0.25rem;
    max-width: 7rem;
}   

img{
    max-width: 100%;
}

@media screen and ( min-width:$w-md){
    .container{
        max-width: 8rem;
    }
}

@media screen and ( min-width:$w-lg){
    .container{
        position: relative;
        z-index: 11;
    }
}

@media screen and ( min-width:$w-xl){
    .container{
        position: absolute;
        max-width: 14.6rem;
        top: -0.4rem;
        left: 1rem;
        animation: ready 1s ease-in-out;
        animation-fill-mode:forwards
    }

    @keyframes ready {
         0% { transform: translateX(-15%); }
        100% { transform: translateX(0%); }
    }
}

</style>
