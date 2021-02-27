<template>
    <header>
        <img
            class="welcome-image"
            src="../assets/img/welcome-image.png"
            alt="painting"
        />
        <div class="title-wrapper">
            <h1>Synmal - Jozef Zigo</h1>
            <h2>Maliari s 20 ročnými skúsenosťami</h2>
        </div>
    </header>
    <main>
        <section class="motto">
            <div class="motto-field">
                <h3>
                    Beautiful designs, powerful features and the freedom to
                    build anything you want.
                </h3>
                <div class="horizontal-line"></div>
            </div>
        </section>
        <section class="first-section">
            <div class="first-section-container">
                <div class="first-section-h3-wrapper">
                    <h3>
                        Široké možnosti maliarskych prác a vysoká kvalita je
                        našou samozrejmosťou.
                    </h3>
                </div>
                <aside class="first-section-fancy-circle"></aside>
                <div class="first-section-images-wrapper">
                    <div class="first-section-half-size-images">
                        <img
                            src="../assets/img/gallery/IMG_20200908_115947.jpg"
                            alt="Roof painting"
                        />
                        <img
                            src="../assets/img/gallery/IMG_20200716_101559.jpg"
                            alt="Interior painting"
                        />
                    </div>
                    <div class="first-section-full-size-image">
                        <img
                            src="../assets/img/gallery/IMG_20200824_122141.jpg"
                            alt="Exterior painting"
                        />
                    </div>
                </div>
            </div>
            <aside class="first-section-fancy-rectangle"></aside>
            <aside class="first-section-fancy-line"></aside>
        </section>
        <section class="second-section">
            <div class="second-section-cover-layer"></div>
            <div class="second-section-field">
                <div class="second-section-container">
                    <div class="second-section-h3-wrapper">
                        <h3>
                            Keďže aj my ideme s dobou, ponúkame veľmi populárne
                            a moderné
                            <strong
                                >strojové maľovanie interiérov a
                                exteriérov</strong
                            >
                        </h3>
                    </div>
                    <article>
                        <div class="paint-machine-logo">
                            <img
                                src="../assets/img/wagner.png"
                                alt="wagner logo"
                            />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris.
                        </p>
                    </article>
                    <aside class="second-section-fancy-rectangle"></aside>
                    <div class="second-section-half-size-images">
                        <img
                            src="../assets/img/airless-painting.jpg"
                            alt="Airless painting"
                        />
                    </div>
                    <div class="second-section-full-size-images">
                        <img
                            src="../assets/img/wagner-machine.jpg"
                            alt="Wagenr Machine"
                        />
                    </div>
                </div>
                <aside class="second-section-fancy-line"></aside>
            </div>
        </section>
        <aside class="center-content">
            <h4 class="center-content-h4">
                Za roky vykonávania nášho remesla sme vyskúšali a testovali
                desiatky výrobcov farieb.
            </h4>
        </aside>
        <section class="third-section">
            <div class="third-section-background-rectangle"></div>
            <div class="third-section-field">
                <div class="thrid-section-list-item">
                    <h6>Zabezpečujeme</h6>
                    <ul>
                        <li>Malovanie interiérov</li>
                        <li>Malovanie exteriérov</li>
                        <li>Strojové maľovanie interiérov</li>
                        <li>Strojové maľovanie exteriérov</li>
                        <li>Nátery striech</li>
                        <li class="reverse-color">Renovácia prasklín</li>
                        <li class="reverse-color">
                            Renovácia drevených obkladov
                        </li>
                        <li class="reverse-color">
                            Nátery tatranských profilov
                        </li>
                        <li class="reverse-color">Nátery kovových zárubní</li>
                    </ul>
                    <div class="color-splitter"></div>
                </div>

                <div class="fancy-bucket">
                    <img src="../assets/img/jupol.png" alt="Jupol bucket" />
                </div>
            </div>
            <div class="mirror-fancy-line"></div>
            <div class="third-section-fancy-rectangle">
                <div class="reverse-mirror-fancy-line"></div>
            </div>
            <aside class="third-field-aside">
                <div class="third-field-aside-rectangle">
                    <div class="fancy-paint-roller">
                        <img
                            src="../assets/img/paint-roller.png"
                            alt="Paint roller"
                        />
                    </div>
                </div>
                <div class="third-field-aside-wrapper">
                    <p>
                        Vo veľkej miere využívame produkty od firmy
                        <strong>JUB</strong>. Cenou, kvalitou a krycou
                        schopnosťou je pre nás veľkým favoritom
                    </p>
                </div>
            </aside>
        </section>
        <footer>
            <div tabindex="1" @click="$router.push({ path: '/contact' })">
                <p class="contact-link-button">Kontaktujte nás</p>
            </div>
        </footer>
    </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//welcome image-------------------------------------------

header {
    padding-top: 3.4rem;
}

.welcome-image {
    position: fixed;
    max-width: 100%;
    z-index: -2;
    opacity: 45%;
}

.title-wrapper {
    max-width: 18.75rem;
    height: 13rem;
    margin: 0 auto;

    h1 {
        position: fixed;
        padding-top: 3.6rem;
        z-index: -1;
        color: $primary-dark;
        line-height: 24px;
        font: {
            size: 23px;
            weight: 700;
        }
    }

    h2 {
        position: fixed;
        z-index: -1;
        margin-top: 5.1rem;
        color: $primary-dark;
        font: {
            size: 13.5px;
            weight: 400;
        }
    }
}

@media screen and (max-width: 374px) {
    .title-wrapper[data-v-fae5bece] {
        max-width: 14.55rem;
        height: 13rem;
        margin: 0 auto;
    }
}

//Motto-------------------------------------------

.motto {
    height: 8.25rem;
    background: $primary-light;
    border-radius: 10px 10px 0px 0px;
}

.motto-field {
    width: 17.188rem;
    margin: 0 auto;
    padding-top: 1.438rem;
    text-align: center;

    h3 {
        font: {
            size: 14.5px;
            weight: 300;
        }
    }
}

.horizontal-line {
    position: relative;
    height: 0.063rem;
    margin-top: 0.6rem;
    background-color: $primary-semi-dark;
    z-index: 2;
}

//first section-------------------------------------------

.first-section {
    width: 100%;
    height: 33.5rem;
    background-color: $primary-semi-dark;
}

.first-section-container {
    max-width: 18.75rem;
    margin: 0 auto;
}

.first-section-h3-wrapper {
    padding: 1.563rem 0;

    h3 {
        color: $primary-light;

        font: {
            size: 14.5px;
            weight: 500;
        }
    }
}

.first-section-fancy-circle {
    position: relative;
    width: 6.25rem;
    height: 6.25rem;
    right: -11rem;
    bottom: 3rem;
    z-index: 2;
    background-color: $primary-light;
    border-radius: 50%;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
}

.first-section-images-wrapper {
    position: relative;
    bottom: 6.25rem;
}

.first-section-half-size-images {
    max-width: 18.75rem;
    display: flex;
    justify-content: space-between;

    img {
        position: relative;
        max-width: 9.063rem;
        height: 13rem;
        z-index: 2;
        border: 5px solid $primary-light;
        border-radius: 5px;
        box-shadow: 5px 5px 2px rgba($darkest, 16%);
    }

    img:first-child {
        margin-right: 0.313rem;
        margin-left: 0.125rem;
    }
}

.first-section-full-size-image > img {
    position: relative;
    width: 18.75rem;
    height: 10.625rem;
    margin-top: 0.5rem;
    margin-left: 0.063rem;
    z-index: 2;
    border: 5px solid $primary-light;
    border-radius: 5px;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
}

.first-section-fancy-rectangle {
    position: absolute;
    width: 100%;
    height: 9.375rem;
    top: 41rem;
    z-index: 1;
    background-color: $primary-light;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
}

.first-section-fancy-line {
    position: absolute;
    width: 0.313rem;
    height: 33.5rem;
    top: 24.7rem;
    right: 0.813rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgba($darkest, 16%);
}

//second section-------------------------------------------

.second-section {
    position: relative;
    width: 100%;
    height: 31.5rem;
    background-color: $primary-light;
    border-bottom: 0.5px solid $primary;
}

.second-section-cover-layer {
    position: absolute;
    width: 95%;
    height: 22.5rem;
    right: 0;
    margin-top: 2.5rem;
    background: $primary-semi-dark;
    border-radius: 10px 0 0 10px;
}

.second-section-field {
    width: 100%;
    margin: 0 auto;
}

.second-section-fancy-rectangle {
    position: absolute;
    width: 95%;
    height: 12.5rem;
    top: 8.7rem;
    right: 0;
    z-index: 1;
    background-color: $primary;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
}

.second-section-container {
    width: 18.75rem;
    margin: 0 auto;
}

.paint-machine-logo {
    position: relative;
    width: 5.375rem;
    margin-top: 5.2rem;
    z-index: 2;

    img {
        max-width: 100%;
    }
}

.second-section-h3-wrapper {
    position: relative;
    top: 3.35rem;
    margin-top: -1.2rem;

    h3 {
        margin-top: 1.2rem;
        color: $primary-light;
        font: {
            size: 14px;
            weight: 500;
        }
        strong {
            font: {
                weight: 600;
            }
        }
    }
}

article > p {
    position: relative;
    z-index: 2;
    max-width: 9.75rem;
    font: {
        size: 10px;
        weight: 400;
    }
}

.second-section-half-size-images {
    position: relative;
    width: 8.438rem;
    height: 8.438rem;
    z-index: 1;
    left: 10.2rem;
    bottom: 8.25rem;
    border: 5px solid $primary-light;
    border-radius: 3px;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
    img {
        width: 100%;
    }
}

.second-section-full-size-images {
    position: relative;
    width: 15.625rem;
    height: 9.05rem;
    left: 3rem;
    z-index: 1;
    bottom: 7.063rem;
    border: 5px solid $primary-light;
    border-radius: 3px;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
    img {
        width: 100%;
    }
}

.second-section-fancy-line {
    position: absolute;
    width: 0.313rem;
    height: 22.5rem;
    top: 2.5rem;
    right: 0.813rem;
    z-index: 0;
    background-color: $fancy;
    box-shadow: 5px 0px 2px rgba($darkest, 16%);
}

@media screen and (max-width: 374px) {
    .second-section-test-graybg {
        width: 100%;
        border-radius: 0px 0px 0px 0px;
    }

    .second-section-fancy-rectangle {
        width: 100%;
    }
}

// Center text section-----------------------------------

.center-content {
    position: relative;
    width: 100%;
    z-index: 2;
    background-color: $primary-light;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
}

.center-content-h4 {
    max-width: 17.875rem;
    margin: 0 auto;
    padding: 1.563rem 0px;
    text-align: center;
    font: {
        size: 14px;
        weight: 400;
    }
}

//third section-------------------------------------------

.third-section {
    position: relative;
    bottom: 1.6rem;
    z-index: 1;
    background-color: primary-light;
}

.third-section-background-rectangle {
    position: absolute;
    width: 100%;
    height: 298px;
    top: -4rem;
    background: $primary-light;
}

.third-section-field {
    position: relative;
    width: 18.75rem;
    margin: 0 auto;
    z-index: 2;
}

.thrid-section-list-item {
    width: 13.438rem;
    max-height: 15.4rem;
    margin-top: 3rem;
    background-color: $primary;
    border-radius: 5px;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);

    h6 {
        padding: 0.938rem 1.25rem 0px;
        color: $darkest;

        font: {
            size: 16px;
            weight: 600;
        }
    }
}

ul {
    position: relative;
    z-index: 2;
    padding: {
        top: 0.625rem;
        right: 1.25rem;
        bottom: 0.625rem;
        left: 1.25rem;
    }

    li {
        font: {
            size: 10px;
            weight: 500;
        }
        color: $darkest;
        line-height: 1.2rem;
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
    position: relative;
    width: 100%;
    height: 6.3rem;
    bottom: 5.375rem;
    z-index: 1;
    background: $primary-semi-dark;
    border-radius: 0px 0px 5px 5px;
}

.third-section-fancy-rectangle {
    width: 100%;
    height: 22.5rem;
    position: absolute;
    margin-top: -13.45rem;
    z-index: 1;
    background-color: $primary;
}

.mirror-fancy-line {
    position: absolute;
    width: 1.25rem;
    height: 3.438rem;
    top: 5.75rem;
    z-index: 0;
    right: 2.375rem;
    background-color: $primary-semi-dark;
    border-radius: 2px 2px 0px 0px;
    box-shadow: 5px 0px 2px rgb(0 0 0 / 16%);
}

.reverse-mirror-fancy-line {
    position: absolute;
    z-index: 0;
    width: 1.25rem;
    height: 3.438rem;
    top: 0;
    right: 2.375rem;
    background-color: $primary-light;
    border-radius: 2px 2px 0px 0px;
    box-shadow: 5px 5px 2px rgb(0 0 0 / 16%);
}

.third-field-aside {
    position: relative;
    width: 100%;
    padding-top: 0.938rem;
    z-index: 2;
}

.third-field-aside-rectangle {
    position: absolute;
    width: 69%;
    height: 4.563rem;
    top: 0.2rem;
    right: 0;
    background-color: $primary-light;
    box-shadow: 5px 5px 2px rgba($darkest, 16%);
}

.fancy-bucket {
    position: relative;
    width: 8.125rem;
    height: auto;
    top: 1.45rem;
    left: 10.5rem;
    z-index: 1;

    img {
        max-width: 100%;
    }
}

.fancy-paint-roller {
    position: relative;
    width: 8.25rem;
    height: 8.25rem;
    top: -1.75rem;
    left: -6.4rem;
    transform: rotate(90deg);

    img {
        max-width: 100%;
    }
}

.third-field-aside-wrapper {
    max-width: 18.75rem;
    margin: 0 auto;
    text-align: right;

    p {
        position: relative;
        width: 13.188rem;
        left: 5.5rem;
        text-align: right;

        font: {
            size: 10px;
            weight: 400;
        }
        strong {
            font-weight: 700;
        }
    }
}

@media screen and (max-width: 374px) {
    .third-field-aside-rectangle {
        width: 72%;
    }
}

//footer-------------------------------------------------

footer {
    position: relative;
    width: 100%;
    height: 6rem;
    margin-top: 1rem;
    padding: 1.875rem 0 0 0;
    z-index: 1;
    background-color: $primary-light;
}

.contact-link-button {
    max-width: 10rem;
    margin: 0 auto;
    padding: 0.15rem 0;
    text-align: center;
    background-color: $fancy;
    box-shadow: 5px 5px 3px rgba($darkest, 16%);
    cursor: pointer;

    a {
        font: {
            size: 15px;
            weight: regular;
        }
        color: $darkest;
    }
}

.contact-link-button:focus {
    background-color: $primary-semi-dark;
    color: $primary-light;
    transition: 0.25s;
}
</style>
