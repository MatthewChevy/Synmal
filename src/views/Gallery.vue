<template>

    <main>
        <header class="title-section">
            <div class="h1-box" data-aos="fade-down">
                <h1>Naša galéria</h1>
            </div>
        </header>

        <section v-if="actualyWidnowSize < breakpoint" class="gallery">
            <div class="column">
                <img
                    src="../assets/img/gallery/DSC_0003.jpg"
                    alt="Maľovanie fásady rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0012.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0009.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0011.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0006.jpg"
                    alt="Renovácia kovovej konštrukcie"
                />
                <img
                    src="../assets/img/gallery/DSC_0024.jpg"
                    alt="Obyvačka v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0008.jpg"
                    alt="Hotový posledný náter"
                />
                <img
                    src="../assets/img/gallery/DSC_0022.jpg"
                    alt="Pripravené na striekanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0021.jpg"
                    alt="Airless maľovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0013.jpg"
                    alt="Lakovanie drevených lát"
                />
                <img
                    src="../assets/img/gallery/DSC_0014.jpg"
                    alt="Lakovanie drevených lát"
                />
                <img
                    src="../assets/img/gallery/DSC_0015.jpg"
                    alt="Nový náter plechovej strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0016.jpg"
                    alt="Striekanie interiéru rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0017.jpg"
                    alt="Striekanie interiéru novostavby"
                />
                <img
                    src="../assets/img/gallery/DSC_0018.jpg"
                    alt="Striekanie interiéru novostavby s dreveným stropom"
                />
                <img
                    src="../assets/img/gallery/DSC_0057.jpg"
                    alt="Zalepenie schodiska"
                />
                <img
                    src="../assets/img/gallery/DSC_0055.jpg"
                    alt="Schodisko po skončení prác"
                />
                <img
                    src="../assets/img/gallery/DSC_0019.jpg"
                    alt="Príprava na striekanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0020.jpg"
                    alt="Nastriekaná posledná vrstva"
                />
                <img
                    src="../assets/img/gallery/DSC_0040.jpg"
                    alt="Náš oblúbený jupolček"
                />
                <img
                    src="../assets/img/gallery/DSC_0031.jpg"
                    alt="Lakovanie podbitia preshu strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0048.jpg"
                    alt="Strojové malovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0049.jpg"
                    alt="Strojové malovanie"
                />
            </div>

            <div class="column">
                <img
                    src="../assets/img/gallery/DSC_0002.jpg"
                    alt="Maľovanie fásady papiernickej predajne"
                />
                <img
                    src="../assets/img/gallery/DSC_0004.jpg"
                    alt="Striekanie ochranných plechov"
                />
                <img
                    src="../assets/img/gallery/DSC_0005.jpg"
                    alt="Striekanie ochranných plechov"
                />
                <img
                    src="../assets/img/gallery/DSC_0010.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0026.jpg"
                    alt="Opravovanie fasády za pomoci vysokozdvižnej rampy"
                />
                <img
                    src="../assets/img/gallery/DSC_0025.jpg"
                    alt="Opravovanie fasády za pomoci vysokozdvižnej rampy"
                />
                <img
                    src="../assets/img/gallery/DSC_0052.jpg"
                    alt="Zalepenie interiéru"
                />
                <img
                    src="../assets/img/gallery/DSC_0061.jpg"
                    alt="Strojové malovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0027.jpg"
                    alt="Finálny výsledok v novostabe rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0028.jpg"
                    alt="Finálny výsledok v novostabe rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0042.jpg"
                    alt="Kúpeľňa v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0046.jpg"
                    alt="Kúpeľňa v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0058.jpg"
                    alt="Maľovanie fasády rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0045.jpg"
                    alt="Všetko poriadne zalepíme"
                />
                <img
                    src="../assets/img/gallery/DSC_0038.jpg"
                    alt="Nový náter plechovej strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0033.jpg"
                    alt="Renovácia fasády"
                />
                <img
                    src="../assets/img/gallery/DSC_0041.jpg"
                    alt="Airless maľovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0035.jpg"
                    alt="Renovácia školých priestorov / pred"
                />
                <img
                    src="../assets/img/gallery/DSC_0036.jpg"
                    alt="Renovácia školých priestorov / po"
                />
                <img
                    src="../assets/img/gallery/DSC_0034.jpg"
                    alt="Renovácia školých priestorov / pred"
                />
                <img
                    src="../assets/img/gallery/DSC_0037.jpg"
                    alt="Renovácia školých priestorov / po"
                />
                <img
                    src="../assets/img/gallery/DSC_0050.jpg"
                    alt="Strojové malovanie"
                />
            </div>
        </section>

        <section v-else class="gallery">
            <div class="column">
                <img
                    src="../assets/img/gallery/DSC_0001.jpg"
                    alt="Maľovanie fásady rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0003.jpg"
                    alt="Maľovanie fásady rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0002.jpg"
                    alt="Maľovanie fásady papiernickej predajne"
                />
                <img
                    src="../assets/img/gallery/DSC_0004.jpg"
                    alt="Striekanie ochranných plechov"
                />
                <img
                    src="../assets/img/gallery/DSC_0005.jpg"
                    alt="Striekanie ochranných plechov"
                />
                <img
                    src="../assets/img/gallery/DSC_0047.jpg"
                    alt="Vyspravovanie prasklín"
                />
                <img
                    src="../assets/img/gallery/DSC_0006.jpg"
                    alt="Renovácia kovovej konštrukcie"
                />
                <img
                    src="../assets/img/gallery/DSC_0024.jpg"
                    alt="Obyvačka v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0008.jpg"
                    alt="Hotový posledný náter"
                />
                <img
                    src="../assets/img/gallery/DSC_0022.jpg"
                    alt="Pripravené na striekanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0020.jpg"
                    alt="Nastriekaná posledná vrstva"
                />
                <img
                    src="../assets/img/gallery/DSC_0048.jpg"
                    alt="Strojové malovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0049.jpg"
                    alt="Strojové malovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0050.jpg"
                    alt="Strojové malovanie"
                />
            </div>

            <div class="column">
                <img
                    src="../assets/img/gallery/DSC_0021.jpg"
                    alt="Airless maľovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0013.jpg"
                    alt="Lakovanie drevených lát"
                />
                <img
                    src="../assets/img/gallery/DSC_0014.jpg"
                    alt="Lakovanie drevených lát"
                />
                <img
                    src="../assets/img/gallery/DSC_0015.jpg"
                    alt="Nový náter plechovej strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0016.jpg"
                    alt="Striekanie interiéru rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0017.jpg"
                    alt="Striekanie interiéru novostavby"
                />
                <img
                    src="../assets/img/gallery/DSC_0018.jpg"
                    alt="Striekanie interiéru novostavby s dreveným stropom"
                />
                <img
                    src="../assets/img/gallery/DSC_0019.jpg"
                    alt="Príprava na striekanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0040.jpg"
                    alt="Náš oblúbený jupolček"
                />
                <img
                    src="../assets/img/gallery/DSC_0031.jpg"
                    alt="Lakovanie podbitia preshu strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0030.jpg"
                    alt="Lakovanie podbitia preshu strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0058.jpg"
                    alt="Malovanie fadsády rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0052.jpg"
                    alt="Zalepenie interiéru"
                />
                <img
                    src="../assets/img/gallery/DSC_0057.jpg"
                    alt="Zalepenie schodiska"
                />
            </div>

            <div class="column">
                <img
                    src="../assets/img/gallery/DSC_0044.jpg"
                    alt="Dôsledné zalepenie"
                />
                <img
                    src="../assets/img/gallery/DSC_0026.jpg"
                    alt="Opravovanie fasády za pomoci vysokozdvižnej rampy"
                />
                <img
                    src="../assets/img/gallery/DSC_0025.jpg"
                    alt="Opravovanie fasády za pomoci vysokozdvižnej rampy"
                />
                <img
                    src="../assets/img/gallery/DSC_0012.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0009.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0011.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0010.jpg"
                    alt="Sauny v Aquaparku Bešeňová"
                />
                <img
                    src="../assets/img/gallery/DSC_0007.jpg"
                    alt="Renovácia kovovej konštrukcie"
                />
                <img
                    src="../assets/img/gallery/DSC_0027.jpg"
                    alt="Finálny výsledok v novostabe rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0028.jpg"
                    alt="Finálny výsledok v novostabe rodinného domu"
                />
                <img
                    src="../assets/img/gallery/DSC_0042.jpg"
                    alt="Kúpeľňa v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0061.jpg"
                    alt="Strojové malovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0063.jpg"
                    alt="Po skončení renovácie stropu"
                />
                <img
                    src="../assets/img/gallery/DSC_0055.jpg"
                    alt="Schodisko po ukončení prác"
                />
            </div>

            <div class="column">
                <img
                    src="../assets/img/gallery/DSC_0046.jpg"
                    alt="Kúpeľňa v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0045.jpg"
                    alt="Všetko poriadne zalepíme"
                />
                <img
                    src="../assets/img/gallery/DSC_0038.jpg"
                    alt="Nový náter plechovej strechy"
                />
                <img
                    src="../assets/img/gallery/DSC_0039.jpg"
                    alt="Chodba v rodinnom dome po prvej vrstve"
                />
                <img
                    src="../assets/img/gallery/DSC_0033.jpg"
                    alt="Renovácia fasády"
                />
                <img
                    src="../assets/img/gallery/DSC_0041.jpg"
                    alt="Airless maľovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0035.jpg"
                    alt="Renovácia školých priestorov / pred"
                />
                <img
                    src="../assets/img/gallery/DSC_0036.jpg"
                    alt="Renovácia školých priestorov / po"
                />
                <img
                    src="../assets/img/gallery/DSC_0034.jpg"
                    alt="Renovácia školých priestorov / pred"
                />
                <img
                    src="../assets/img/gallery/DSC_0037.jpg"
                    alt="Renovácia školých priestorov / po"
                />
                <img
                    src="../assets/img/gallery/DSC_0060.jpg"
                    alt="Pred renováciou rámov okien"
                />
                <img
                    src="../assets/img/gallery/DSC_0059.jpg"
                    alt="Po renovácií rámov okien"
                />
                <img
                    src="../assets/img/gallery/DSC_0062.jpg"
                    alt="Po renováciou rámov okien"
                />
                <img
                    src="../assets/img/gallery/DSC_0051.jpg"
                    alt="Strojové malovanie"
                />
                <img
                    src="../assets/img/gallery/DSC_0056.jpg"
                    alt="Zalepenie interieru"
                />
            </div>
        </section>
    </main>

    <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
    >
    </vue-easy-lightbox>
    <div v-if="visible" @click="prev()" class="left-arrow"></div>
    <div v-if="visible" @click="next()" class="right-arrow"></div>
</template>

<script>
import tableMixins from '../mixins/tableMixins.js'
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    mixins: [tableMixins],

    components: {
        VueEasyLightbox
    },

    data(){
        return{
            prevBtn: true,
            first: true,
            allImgs: '',
            imgs: [],
            indexOfFocusImage: '',
            visible: false,
            index: 0 // default: 0
        }
    },

    mounted () {
        this.allImgs = document.querySelectorAll('.column img')
        this.allImgs.forEach( img => {
            img.addEventListener( 'click', () => {
                this.imgs = img.src
                this.visible = true
                this.saveImages()
            }) 
        });
    },

    methods: {
        handleHide() {
            this.visible = false
        },

        saveImages() {
            let tempArray = Array.prototype.slice.call(this.allImgs)
            let arrOfImages = []

            tempArray.forEach(element => {
                // push elements in to the array
                arrOfImages.push(element.src)
            })

            if (arrOfImages.indexOf( this.imgs ) != -1) {
                // if the image url is located in array
                this.indexOfFocusImage = arrOfImages.indexOf( this.imgs) 
            }
        
        },

        prev(){
            if( this.indexOfFocusImage === 0){
               this.indexOfFocusImage = this.allImgs.length - 1
               this.imgs = this.allImgs[this.indexOfFocusImage].src
            } else {
                this.imgs = this.allImgs[this.indexOfFocusImage --].src
            }
        },

        next(){
            if( this.indexOfFocusImage === this.allImgs.length){
               this.indexOfFocusImage = 0
               this.imgs = this.allImgs[this.indexOfFocusImage].src
            } else {
                this.imgs = this.allImgs[this.indexOfFocusImage + 1].src
                this.indexOfFocusImage++
            }
        }
    }
}
</script>

<style lang="scss">

    .vel-btns-wrapper .btn__close {
        top: 4.5rem;
        // right: 5%;
        background-color: #2d2d2da4;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 50px;
    }

    .left-arrow {
        position: fixed;
        display: flex;
        justify-content: flex-end;
        width: 2.7rem;
        height: 2.7rem;
        left: 1rem;
        top: 50%;
        background-color: #2d2d2d73;
        border-radius: 50%;
        transform: rotateZ(90deg);
        z-index: 99999;
        cursor: pointer;
    }

    .left-arrow:hover,.right-arrow:hover{
        background-color: #2d2d2de0;;
        transition: .25s;
    }

    .left-arrow::before {
        content: '>';
        position: relative;
        top: 0.1rem;
        right: 1.2rem;
        font-size: 50px;
        font-weight: 300;
        color: #ffffff;
        transform: rotateZ(90deg);
    }

    .right-arrow {
        position: fixed;
        display: flex;
        justify-content: flex-end;
        width: 2.7rem;
        height: 2.7rem;
        right: 1rem;
        top: 50%;
        background-color: #2d2d2da4;
        border-radius: 50%;
        transform: rotateZ(-90deg);
        color: $fancy;
        z-index: 99999;
        cursor: pointer;
    }

    .right-arrow::before {
        content: '>';
        position: relative;
        top: 0.1rem;
        right: 1.2rem;
        font-size: 50px;
        font-weight: 300;
        color: #ffffff;
        transform: rotateZ(90deg);
    }

    .right-arrow:focus {
        outline: none;
    }

    @media screen and ( min-width: 500px) {
        .vel-btns-wrapper .btn__close {
            top: 3rem;
        }
    }

    @media screen and ( min-width: 550px) {
        .vel-btns-wrapper .btn__close {
            top: 2rem;
        }
    }

    @media screen and ( min-width: 750px) {
        .vel-btns-wrapper .btn__close {
            top: 4.5rem;
        }
    }

    @media screen and ( min-width: 1024px) {w
        .vel-btns-wrapper .btn__close {
            top: 2rem;
        }
    }
</style>

<style lang="scss" scoped>

@media screen and (min-width: 0px) {
    main {
        overflow-x: hidden;
        position: relative;
        top: 3.5rem;
        margin: 0 auto;
    }

    header {
        .h1-box {
            margin: 0 auto;
            text-align: center;

            h1 {
                padding: 2rem 0 3rem 0;
                color: $primary-dark;
                font: {
                    size: 30px;
                    weight: 300;
                }
            }
            h1::before,
            h1::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 18%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h1::before {
                right: 0.75rem;
            }
            h1::after {
                left: 0.75rem;
            }
        }
    }

    img {
        max-width: 100%;
        cursor: pointer;
    }

    .button {
        padding: 3rem 0;
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
    }

    .column {
        flex: 50%;
        max-width: 50%;
        line-height: 0;
        img {
            padding: 1px;
        }

        .too-height {
            width: 100%;
            height: 30rem;
        }
    }
}

@media screen and (min-width: 768px) {
    .gallery {
        margin: 0 auto;
        width: 90%;
    }
}

@media screen and (min-width: 1024px) {
    main {
        padding-bottom: 5rem;
    }

    .gallery {
        margin: 0 auto;
        width: 90%;
    }

    .column {
        flex: 25%;
        max-width: 25%;
        line-height: 0;
        img {
            padding: 3px;
        }
    }

    header {
        .h1-box {
            h1 {
                padding: 5rem 0 5rem 0;
                color: $primary-dark;
                font: {
                    size: 30px;
                    weight: 300;
                }
            }
        }
    }
}
</style>
