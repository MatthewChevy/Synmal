<template>
    <section class="third-section">
        <div class="third-section-field">
            <div class="thrid-section-list-item">
                <h6>Zabezpečujeme</h6>
                <ul class="third-section-ul">
                    <li>Maľovanie interiérov</li>
                    <li>Maľovanie exteriérov</li>
                    <li>Strojové maľovanie interiérov</li>
                    <li>Strojové maľovanie exteriérov</li>
                    <li>Nátery striech</li>
                    <li class="reverse-color">Renovácia prasklín</li>
                    <li class="reverse-color">Renovácia drevených obkladov</li>
                    <li class="reverse-color">Nátery tatranských profilov</li>
                    <li class="reverse-color">Nátery kovových zárubní</li>
                </ul>
                <div class="color-splitter"></div>
            </div>

            <div class="decorative-bucket">
                <img @click=" bucketAni()" src="../../assets/img/jupol.png" alt="Jupol bucket" />
            </div>
        </div>
        <div class="mirror-decorative-line"></div>
        <div class="third-section-decorative-rectangle">
            <div class="reverse-mirror-decorative-line"></div>
        </div>
        <aside class="third-section-aside">
            <div class="decorative-paint-roller">
                <img
                    src="../../assets/img/paint-roller.png"
                    alt="Paint roller"
                />
            </div>
            <div class="third-section-paint-roller-paragraph">
                <div class="third-section-paint-roller-paragraph-handler">
                    <p>
                        Vo veľkej miere využívame produkty od firmy
                        <strong>JUB</strong>. Cenou, kvalitou a krycou
                        schopnosťou je pre nás veľkým favoritom
                    </p>
                </div>
            </div>
        </aside>
    </section>
</template>

<script>
export default {

    data() {
        return {
            count: 0,
            bucket: Object
        }
    },

    mounted () {
        this.bucket = document.getElementsByClassName('decorative-bucket')[0]
    },
    methods: {
        bucketAni() {
            if ( this.count < 3 ){
               this.bucket.classList.add('decorative-bucket-animation')
                 this.bucket.addEventListener('animationend', () => {
                     this.bucket.classList.remove('decorative-bucket-animation')
                    this.count++
                }) 
            } else {
                this.bucket.classList.add('decorative-bucket-animation-vanish')
            }
        }     
    }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    
    .third-section {
        position: relative;
        background-color: $primary-light;
        padding-top: 3rem;
    }

    .third-section-field {
        position: relative;
        width: 95%;
        z-index: 2;
    }

    .thrid-section-list-item {
        position: relative;
        width: 15rem;
        margin: 0 auto;
        text-align: left;
        background-color: $primary;
        border-radius: 5px;
        box-shadow: 5px 5px 2px rgba($darkest, 16%);

        h6 {
            text-align: left;
            padding: 0.75rem 1.25rem;
            color: $darkest;
            font: {
                size: 17px;
                weight: 600;
            }
        }
    }

    .third-section-ul {
        position: relative;
        z-index: 2;
        padding: 0 1.25rem 1.25rem;

        li {
            font: {
                size: 12px;
                weight: 400;
            }
            line-height: 1.3rem;
        }

        li:before {
            content: '-';
            padding-right: 0.188rem;
        }
    }

    .reverse-color {
        color: $primary-light;
    }

    .color-splitter {
        position: absolute;
        width: 100%;
        height: 6.3rem;
        bottom: 0;
        z-index: 1;
        background: $primary-semi-dark;
        border-radius: 0px 0px 5px 5px;
    }

    .third-section-decorative-rectangle {
        width: 100%;
        height: 22.55rem;
        position: absolute;
        top: 11.5rem;
        z-index: 1;
        background-color: $primary;
    }

    .mirror-decorative-line {
        display: none;
    }

    .reverse-mirror-decorative-line {
        display: none;
    }

    .decorative-bucket {
        position: relative;
        width: 9rem;
        height: auto;
        top: 1.5rem;
        left: 50%;
        z-index: 1;

        img {
            max-width: 100%;
        }
    }

    .decorative-bucket-animation{
        animation: bucket 1.5s ease-in-out;
    }

    .decorative-bucket-animation-vanish{
        animation: bucket-vanish 1.5s ease-in-out both;
    }

    @keyframes bucket {
        0% { transform: translateY( 0px ); }
        50% { transform: translateY( -10px ); }
        100% { transform: translateY( 0px ); }
    }

    @keyframes bucket-vanish {
        0% { transform: translateX( 0px ); }
        20% { transform: skew(7deg);}
        100% {  transform: translateX( -999px );}
    }

    .third-section-aside {
        position: relative;
        width: 100%;
        z-index: 2;
        margin-bottom: 2rem;
    }

    .third-section-paint-roller-paragraph {
        width: 100%;
        background-color: $primary-light;
    }

    .third-section-paint-roller-paragraph-handler {
        width: 85%;
        margin: 0 auto;
        padding: 1rem 0;
        text-align: center;
        p {
            font: {
                size: 12px;
            }
        }
    }

    .decorative-paint-roller {
        display: none;
    }
}

@media screen and (min-width: 375px) {

    .thrid-section-list-item {
        margin-left: 2rem;
        text-align: left;

        h6 {
            text-align: left;
            padding: 0.75rem 1.25rem;
        }
    }

    .mirror-decorative-line {
        display: block;
        position: absolute;
        width: 1.25rem;
        height: 6.9rem;
        top: 8rem;
        z-index: 0;
        right: 19%;
        background-color: $primary-semi-dark;
        border-radius: 2px 2px 0px 0px;
        box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
    }

    .third-section-decorative-rectangle {
        height: 22.55rem;
    }

    .reverse-mirror-decorative-line {
        display: block;
        position: absolute;
        z-index: 0;
        width: 1.25rem;
        height: 3.438rem;
        top: 0;
        right: 19%;
        background-color: $primary-light;
        border-radius: 2px 2px 0px 0px;
        box-shadow: 5px 5px 2px rgb(0 0 0 / 16%);
    }

    .third-section-aside {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .third-section-paint-roller-paragraph {
        display: flex;
        width: 76%;
        height: 5rem;
    }

    .third-section-paint-roller-paragraph-handler {
        align-self: center;
        p {
            text-align: right;
        }
    }

    .decorative-paint-roller {
        position: relative;
        display: block;
        width: 5.15rem;
        top: -0.95rem;
        transform: rotate(90deg);
        img {
            max-width: 100%;
        }
    }
}

@media screen and (min-width: 500px) {
    .third-section-field {
        width: 85%;
        margin: 0 auto;
    }
}

@media screen and (min-width: 640px) {

    .thrid-section-list-item {
        width: 17rem;

        h6 {
            padding: 0.75rem 1.25rem;
            font: {
                size: 20px;
                weight: 600;
            }
        }
    }

    .third-section-ul {
        padding: 0 1.25rem 1.25rem;

        li {
            font: {
                size: 14px;
                weight: 400;
            }
            line-height: 1.6rem;
        }
    }

    .color-splitter{
        height: 7.6rem;
    }

    .decorative-bucket {
        width: 11rem;
        top: -1.5rem;
        left: 60%;
    }

    .third-section-decorative-rectangle{
        height: 25.55rem;
    }

    .third-section-aside{
        top: -3rem;
    }

    .third-section-paint-roller-paragraph-handler{
        p{
            font:{
                size: 14px;
            }   
        }
     
    }
}

</style>
