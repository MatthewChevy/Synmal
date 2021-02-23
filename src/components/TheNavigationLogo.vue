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

.container{
 max-width: 17%;
 display: flex;
}

img{
    width: 100%;
    padding: 10px;

}

h4{
    font:{
        size: 12px;
        weight: 300;
    }
    position: absolute;
    top: 1.2rem;
    left: 4.2rem;
    color: white
}

</style>
