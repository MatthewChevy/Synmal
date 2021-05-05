<template>
    <main>
        <header class="title-section">
            <div class="h1-box" data-aos="fade-down">
                <h1>Vitajte v galérií</h1>
            </div>
        </header>
        <section v-if="actualyWidnowSize < breakpoint" class="gallery">
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
                    src="../assets/img/gallery/DSC_0047.jpg"
                    alt="Vyspravovanie prasklín"
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
                    src="../assets/img/gallery/DSC_0044.jpg"
                    alt="Dôsledné zalepenie"
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
                    src="../assets/img/gallery/DSC_0030.jpg"
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
            </div>
        </section>
    </main>
</template>

<script>
import tableMixins from '../mixins/tableMixins.js'

export default {
    mixins: [tableMixins],

    data() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            images: Object,
            main: Object,
            lightbox: Object,
            newImage: Object,
            alter: String
        }
    },

    mounted() {
        //---------------------------

        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
        })

        //---------------------------
        this.lightbox = document.createElement('div')
        this.lightbox.id = 'lightbox'
        this.main = document.querySelector('main')
        this.main.appendChild(this.lightbox)
        this.images = document.querySelectorAll('img')

        this.appendImage()

        window.addEventListener('keydown', e => {
            if (
                this.lightbox.classList.contains('active') &&
                e.key === 'Escape'
            ) {
                this.lightbox.classList.remove('active')
            }
        })

        window.addEventListener('scroll', () => {
            if (this.lightbox.classList.contains('active')) {
                this.lightbox.classList.remove('active')
            }
        })

        this.lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget)
                this.lightbox.classList.remove('active')
        })
    },

    methods: {
        appendImage() {
            this.images.forEach(image => {
                image.addEventListener('click', () => {
                    this.lightbox.classList.add('active')

                    this.newImage = document.createElement('img')
                    this.alter = document.createElement('span')

                    this.newImage.src = image.src
                    this.alter.innerText = image.alt

                    while (this.lightbox.firstChild) {
                        this.lightbox.removeChild(this.lightbox.firstChild)
                    }

                    this.lightbox.appendChild(this.newImage)
                    this.lightbox.appendChild(this.alter)
                })
            })
        }
    }
}
</script>

<style lang="scss">
@media screen and (min-width: 0px) {
    #lightbox {
        position: fixed;
        display: none;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.8);
    }

    #lightbox img {
        width: 100%;
        border: 3px solid $primary;
    }

    #lightbox span {
        padding-top: 0.5rem;
        z-index: 11;
        color: $primary-light;
        text-align: center;
        font: {
            size: 16px;
            weight: 300;
        }
    }

    #lightbox.active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: fadeImage 0.25s ease-in-out forwards;
    }

    @keyframes fadeImage {
        from {
            opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }
}

@media screen and (min-width: 400px) {
    #lightbox img {
        width: 90%;
    }
}

@media screen and (min-width: 530px) {
    #lightbox img {
        max-height: calc(100vh - 5%);
    }
}

@media screen and (min-width: 768px) {
    #lightbox img {
        max-height: calc(100vh - 5%);
    }
}

@media screen and (min-width: 1024px) {
    #lightbox img {
        max-width: 60%;
        width: auto;
        max-height: 90vh;
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
