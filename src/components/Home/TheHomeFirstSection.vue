<template>
    <section>
        <div class="container">
            <div class="h3-wrapper">
                <h3>
                    Naša ponuka
                </h3>
                <span>⇩</span>
            </div>

            <article class="to-do-box">
                <div class="box-container">
                    <h4>Malovanie interiérov</h4>
                    <div class="image-holder">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Postaráme sa o všetky Vaše kancelárske obchodné, bytové
                        a nebytové priestory, rodinné domy... Rôzne dekoratívne
                        prvky, pačokovanie, vyspravenie prasklín, renovácia
                        povrchu, penetračné nátery. Všetko dôkladne pozakrývame,
                        zalepíme a prípravíme na malovanie. Po skončení prác
                        všetko poumývame a povysávame.
                    </p>
                </div>

                <div class="box-container center-border">
                    <h4>Malovanie exteriérov</h4>
                    <div class="image-holder">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Tak isto ako v prípade interiérov, aj maľovanie
                        exteriérov zabezpečíme s najvyššou možnou kvalitou. Je u
                        nás zvykom že v prípade rodiných domov zakryjeme fóliou
                        nielen terasy, markízy, okná ale aj trávnik. Máme
                        vymalovaných nespočetne rodinných domov a bytoviek po
                        celom Liptove a okolí.
                    </p>
                </div>

                <div class="box-container center-border">
                    <h4>Nátery striech</h4>
                    <div class="image-holder">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Pri práci na strechách používame istiace a bezpečnostné
                        prvky. Máme platné všetky potvrdenia na vykonávanie prác
                        vo výškach. V prípade potreby robíme opravy komínov.
                        Najčastejšie používame dvojzložkové farby ktoré sa nám
                        osvedčili a aj po rokoch je strecha vo výbornom stave.
                    </p>
                </div>

                <div class="box-container last-box">
                    <h4>Nátery drevených profilov</h4>
                    <div class="image-holder">
                        <img
                            src="../../assets/img/painbrush.png"
                            alt="Roof painting"
                        />
                    </div>
                    <p>
                        Či už drevený plot, tatranský profil, drevené obklady,
                        staupláty, altánky alebo drevenice o všetko drevo sa Vám
                        postaráme aby bolo vo výbornej kondicií. Maľovanie dreva
                        a drevených obkladov realizujeme v interiéri aj
                        exteriéri.
                    </p>
                </div>
            </article>

            <aside class="aside">
                <h5>Máte špecálne požiadavky alebo otázky ?</h5>
                <div class="contact-button">
                    <a
                        class="contact-link"
                        tabindex="1"
                        @click="$router.push({ path: '/contact' })"
                    >
                        Kontaktuje nás
                    </a>
                </div>
            </aside>
        </div>
        <aside class="first-section-decorative-rectangle"></aside>
    </section>
</template>


