<template>
    <section>
        <div class="background">
            <h2>Rychlosť, Odbornosť, Spoľahlivosť</h2>
            <p>Chcete nás videť v plnom nasadení ? Pozrite na do našej <a @click="$router.push({ path: 'gallery' })">Galérie</a></p>

            <aside>Naša práca je založená na individuálnom prístupe - snažíme sa nájsť optimálne 
                   finančné riešenie pre jednotlivcov ako aj organizácie pri dodržaní kvality práce.
            </aside>
        </div>
         
    </section>
   
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>


    section{
        position: relative;
        background-image: url("../../assets/img/wallpaper.jpg");
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
        height: 25rem;
        top: -3rem;

        .background{
            position: relative;
            background-color: rgba(0, 0, 0, 0.3);
            background-size: cover;
            background-position: center center;
            z-index: 2;
            height: 25rem;
            
        }
    }

    h2{
        width: 90%;
        margin: 0 auto;
        position: relative;
        padding-top: 3rem;
        z-index: 3;
        font:{
            size: 40px;
            weight: 400
        }

        color: white;
        text-align: center;
    }

    p{
        width: 90%;
        margin: 0 auto;
        padding-bottom: 1rem;
        font:{
            size: 20px;
            weight: 400
        }
        text-align: center;
        color: white;
        border-bottom: 1px solid white;

        a{
            text-decoration: underline;
            font-style: italic;
            cursor: pointer;

        }
    }

    aside{
        width: 40rem;
        margin: 1rem auto;
        padding-top: 3rem;
        font:{
            size: 20px;
            weight: 500
        } 
        text-align: center;
        color: white;
    }

</style>