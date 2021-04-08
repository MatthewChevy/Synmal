<template>
    <main>
        <section class="contact-form-center">
            <div class="contact-form-contaniner">
                <div class="contact-form-title">
                    <h3>Kontaktuje nás:</h3>
                </div>
                <form class="form" method="GET">
                    <div class="form-name">
                        <label class="form-name-label" for="name"
                            >Vaše meno:</label
                        >
                        <input
                            class="form-name-input"
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                    </div>

                    <div class="form-email">
                        <label class="form-email-label" for="email"
                            >Váš email:</label
                        >
                        <input
                            class="form-email-input"
                            type="email"
                            name="email"
                            id="email"
                            value="@"
                            required
                        />
                    </div>
                    <div class="form-textarea">
                        <textarea
                            name="message"
                            id="textarea"
                            placeholder="Vaša správa"
                        ></textarea>
                    </div>
                    <div class="form-button">
                        <button type="submit">Odoslať správu</button>
                    </div>
                </form>
            </div>
            <div class="form-decoration-line-handler">
                <div class="form-decoration-line"></div>
            </div>
        </section>

        <div class="decorative-rectangle"></div>

        <section class="company-information-center">
            <div class="company-information-contaniner">
                <article class="contact-information">
                    <div class="contact-information-title">
                        <h3>Kontaktné informácie</h3>
                    </div>
                    <div class="contact-information-list-handler">
                        <div class="decorative-paint-roller">
                            <img
                                src="../assets/img/paint-roller.png"
                                alt="Paint-roller"
                            />
                        </div>
                        <ul class="contact-information-list">
                            <li>Jozef Zigo SYNMAL</li>
                            <li>0904 669 843</li>
                            <li>Ivachnová 183</li>
                        </ul>
                    </div>
                </article>

                <article class="billing-information">
                    <div class="billing-information-title">
                        <h3>Fakturačné údaje</h3>
                    </div>

                    <ul class="billing-information-list">
                        <li>
                            Obchodná firma: <strong>Jozef Zigo Synmal</strong>
                        </li>
                        <li>IČO: <strong>40929400</strong></li>
                        <li>DIČ: <strong>1039615709</strong></li>
                        <li>IČ DPH: <strong>SK1039615709</strong></li>
                        <li>Sídlo: <strong>Ivachnová 183</strong></li>
                        <li>IBAN: <strong>SK2909000000005033845425</strong></li>
                    </ul>
                </article>
            </div>
            <div class="company-decoration-line"></div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

@media screen and ( min-width: 0px) {

    main {
        background-color: $primary-soft;
        height: 65rem;
    }

    .contact-form-center {
        position: relative;
        width: 20.5rem;
        top: 7rem;
        margin: 0 auto;
        z-index: 1;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);
    }

    .contact-form-contaniner {
        padding: 17px;
        border-radius: 5px;
        background-color: $primary-semi-dark;
    }

    .contact-form-title {
        padding: 0.025rem 0 0.938rem 0;
        color: $primary-light;
        h3 {
            font: {
                size: 20px;
                weight: 300;
            }
        }
    }

    .form-name {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem 0;

        .form-name-label {
            padding-top: 0.375rem;
            font: {
                size: 13px;
                weight: 300;
            }
            color: $primary-light;
        }

        .form-name-input {
            width: 11.5rem;
            height: 1.875rem;
            border: none;
            box-shadow: 5px 5px 3px rgba($darkest, 16%);
        }

        .form-name-input:focus {
            outline: none;
        }
    }

    .form-email {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.813rem;

        .form-email-label {
            padding-top: 0.375rem;
            font: {
                size: 13px;
                weight: 300;
            }
            color: $primary-light;
        }

        .form-email-input {
            width: 12.813rem;
            height: 1.875rem;
            border: none;
            box-shadow: 5px 5px 3px rgba($darkest, 16%);
        }

        .form-email-input:focus {
            outline: none;
        }
    }

    .form-textarea {
        position: relative;
        z-index: 1;

        ::placeholder {
            padding-left: 0.313rem;
            font: {
                size: 13px;
                weight: 400;
            }
        }
        textarea {
            max-width: 18.375rem;
            min-width: 18.375rem;
            min-height: 8.7rem;
            max-height: 18.375rem;
            margin: 0;
            border: none;
            box-shadow: 5px 5px 3px rgba($darkest, 16%);
        }
        textarea:focus {
            outline: none;
        }
    }

    .form-button {
        display: flex;
        justify-content: flex-end;
        padding-top: 0.6rem;
        padding-bottom: 0.625rem;

        button {
            width: 9.063rem;
            height: 1.438rem;
            padding-top: 2px;
            background-color: $fancy;
            border: none;
            box-shadow: 5px 5px 3px rgba($darkest, 16%);
            font:{
                size: 13px;
                weight: 300;
            }
        }
    }

    //company-information------------------------------

    .company-information-center {
        position: relative;
        width: 20.5rem;
        margin: 10rem auto -3rem auto;
        z-index: 1;
    }

    .company-information-contaniner {
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 5px;
        background-color: $primary;
        box-shadow: 5px 5px 3px rgba($darkest, 16%);
    }

    .contact-information-title {
        padding-right: 1rem;
        padding-bottom: 1.25rem;
        text-align: right;

        h3 {
            font: {
                size: 18px;
                weight: 400;
            }
        }
    }

    .decorative-paint-roller {
        position: absolute;
        width: 5.188rem;
        height: 5.188rem;
        top: 0;
        left: -4.6rem;
        z-index: 3;
        transform: rotate3d(0, 0, 1, 89deg);

        img {
            width: 100%;
        }
    }

    .contact-information-list-handler {
        position: absolute;
        right: 0;
    }

    .contact-information-list {
        width: 14.625rem;
        padding: 0.375rem 0;
        background-color: $primary-light;
        box-shadow: 0px 5px 4px rgba($darkest, 16%);

        li {
            padding: 0.063rem 0.938rem;
            font: {
                size: 14px;
                weight: 400;
            }
        }
    }

    .billing-information {
        position: relative;
        width: 90%;
        margin: 8rem auto 0 auto;
        z-index: 1;
    }

    .billing-information-title {
        padding-left: 1rem;

        h3 {
            font: {
                size: 18px;
                weight: 400;
            }
        }
    }

    .billing-information-list {
        padding: 1.063rem;

        li {
            padding-bottom: 0.313rem;
            color: $darkest;
            letter-spacing: 0.2px;
            font: {
                size: 14px;
                weight: 300;
            }

            strong {
                font: {
                    weight: 400;
                }
            }
        }
    }

    .company-decoration-line {
        position: absolute;
        width: 0.313rem;
        height: 100%;
        bottom: 0;
        left: 1.2rem;
        z-index: 0;
        background-color: $fancy;
    }
 
}

@media screen and (max-width: 374px) {
    .contact-form-center {
        width: 100%;
    }

    .form-name {
        justify-content: space-between;

        .form-name-input {
            width: 69%;
        }
    }

    .form-email {
        justify-content: space-between;

        .form-email-input {
            width: 73%;
        }
    }

    .form-textarea {
        textarea {
            max-width: 100%;
            min-width: 100%;
            min-height: 8.7rem;
            max-height: 18.375rem;
            margin: 0;
            border: none;
            box-shadow: 5px 5px 3px rgba($darkest, 16%);
        }
    }

    .company-information-center {
        width: 100%;
    }
}

@media screen and (min-width: 375px) {
    
    .contact-information-list{
        width: 15.625rem;

        li{
            padding: 0.063rem 2.4rem;
        }
    }
}

@media screen and (min-width: 400px) {

    .contact-form-center {
        width: 23rem;
    }

    .contact-form-title{
        h3{
            font:{
                size: 22px
            }
        }
    }

    .form-name{
        .form-name-label{
            font:{
                size: 15px
            }
        }
        .form-name-input{
            width: 12.5rem;
        }
    } 

    .form-email{
        .form-email-label{
            font:{
                size: 15px
            }
        }
        .form-email-input{
            width: 14rem;
        }
    } 
    
    .form-textarea{
        textarea{
            max-width: 20.875rem;
            min-width: 20.875rem;
        }
    }

    .form-button {
        display: flex;
        justify-content: flex-end;
        padding-top: 0.6rem;
        padding-bottom: 0.625rem;

        button {
            width: 10rem;
            height: 1.5rem;
            padding-top: 2px;
            background-color: $fancy;
            border: none;
            box-shadow: 5px 5px 3px rgba($darkest, 16%);
            font:{
                size: 14px;
                weight: 300;
            }
        }
    }

    .company-information-center {
        width: 22.5rem;
    }

    .billing-information-title, .contact-information-title{
        h3{
            font:{
                size: 22px
            }
        }
    }
}
</style>
