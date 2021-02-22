<template>
    <main>
        <img src="../assets/img/HomePageImage.png" alt="painting">
        <div class="container">
            <header>
                <h1>Synmal - Jozef Zigo</h1>
                <h2>Maliari s 20 ročnými skúsenosťami</h2>
                <div class="contact-button">
                    <router-link class="contact-link" to="/contact">Kontaktuje nás</router-link>
                </div>
            </header>
        </div>
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

img{
    position: absolute;
    z-index: -1;
    opacity: 60%;
    max-width: 100%
}

.container{
    max-width: 80%;
    margin: 0 auto;
}

h1{
    color: $dark;
    font:{
        size: 23px;
        weight: 700;
    }
    padding-top: 3.6rem;
    line-height: 24px;
}

h2{
    color: $dark;
    font:{
        size: 13.5px;
        weight: 400;
    }
    // padding-top: -1.5rem;
}

.contact-button{
    background-color: $light-dark;
    margin-top: 1.875rem ;
    max-width: 9.125rem;
    height: 1.65rem;
    text-align: center;
}

.contact-link{
    text-decoration: none;
    color: $white;
}

.contact-button:hover{
    background-color: (darken($color: $light-dark, $amount: 10));
    border-radius: 2px;
    transition: .25s;
}




</style>
