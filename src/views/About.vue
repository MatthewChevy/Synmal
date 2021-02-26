<template>
    <header>
            <img class="welcome-image" src="../assets/img/brothers.jpg" alt="brothers">
            <div class="title-wrapper">
                <div class="title-wrapper-center">
                    <h1>Pár slov o nás a našej práci</h1>
                </div>
            </div>
        </header>

        <main>
            <section class="first-section">
                <div class="first-section-center">

                </div>
            </section>
        </main>
</template>

<style lang="scss" scoped>
//header------------------------------------
header{
    padding-top: 3.4rem;
}

.welcome-image{
    position: fixed;
    max-width: 100%;
    z-index: -2;
    opacity: 100%;
}

.title-wrapper{
    max-width: 18.75rem;
    height: 13rem;
    margin: 0 auto;

     h1{  
        position: fixed;
        width: 13rem;
        padding-top: 0.5rem;
        z-index: -1;
        color: $primary-dark;
        font:{
            size: 25px;
            weight: 700;
        }
    }
}

//first-section-----------------------------

first-section{
    position: relative;
    width: 100%;
    height: 585px;

    z-index: 1;
    background: $primary-semi-light;
    border-radius: 10px;

}


</style>
