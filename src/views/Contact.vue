<template>
    <header>
        <div class="h2-box">
            <h2>Kontaktujte nás</h2>
        </div>
        <div class="background-box">
            <img src="../assets/img/email-background.png" alt="email ilustration">
        </div>
    </header>
    <main>
        <div class="contact-form">
            <form class="form" method="GET">
                <div class="form-name">
                    <input
                        type="name"
                        name="name"
                        placeholder="Meno a Priezvisko"
                        required
                    />
                </div>

                <div class="form-email">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div class="form-textarea">
                    <textarea
                        name="message"
                        placeholder="Vaša správa"
                    ></textarea>
                </div>

                <div class="checkbox-holder">
                    <label for="checkbox">Súhlasím zo spracovaním <a href="#">osobných údajov</a></label>
                    <div class="checkbox-center">
                        <input type="checkbox" name="" required>
                    </div>
                </div>

                <div class="form-button">
                    <button type="submit">Odoslať správu</button>
                </div>
            </form>
        </div>

        <div class="container">

            <div class="email-box">
                <div class="email-img">
                    <img src="../assets/img/icons/email.icon.png" alt="email-cartoon">
                </div>
                <div class="email-content">
                    <a href="mailto: matej.sevcik11@gmail.com">synmal.inbox@gmail.com</a>
                </div>
            </div>


            <div class="telephone-box">
                <div class="telephone-img">
                    <img src="../assets/img/icons/telephone.icon.png" alt="telephone-cartoon">
                </div>
                <div class="telephone-content"> 
                    <a href="tel:+421948880678">0948880678</a>
                </div>
            </div>

            <div class="navigation-box">
                <div class="navigation-img">
                    <img src="../assets/img/icons/navigation.icon.png" alt="navigation-cartoon">
                </div>
                <div class="navigation-content"> 
                    <ul>
                        <li>Ivachnová 183</li>
                        <li>034 83 Ivachnová</li>
                        <li>Slovenská Republika</li>
                    </ul>
                </div>
            </div>
        </div>

    </main>
</template>


<style lang="scss" scoped>

@media screen and (min-width: 0px) {

    header {
        position: relative;
        background-color: $primary-light;
        top: 4rem;

        .h2-box {
            position: relative;
            text-align: center;
            z-index: 1;

            h2 {
                padding: 2rem 0 0 0;
                color: $primary-dark;
                font: {
                    size: 25px;
                    weight: 300;
                }
            }
            h2::before,
            h2::after {
                content: '';
                display: inline-block;
                position: relative;
                width: 14%;
                height: 2px;
                top: -0.4rem;
                background: $fancy;
            }

            h2::before {
                right: 0.5rem;
            }
            h2::after {
                left: 0.5rem;
           }
        }

        .background-box{
            position: relative;
            max-width: 30rem;
            margin: 0 auto;
            z-index: 1;
            img{
                position: relative;
                top: 1rem;
                right: 0;
                width: 100%;
            }
        }
    }

    main {
        position: relative;
        top: 1rem;
        margin: 0 auto;
        background-color: $primary-light;
        z-index: 0;

    }

    .contact-form{
        position: relative;
        width: $sm-width-container;
        top: 5rem;
        margin: 0 auto;

        .form{
            text-align: center
        }
    }

    .form-name{
        input[type="name"]{
            width: 100%;
            height: 3rem;
            padding: 0 1rem;
            border-radius: 20px;
            border: 1px solid $primary;
        } 

        input:focus[type="name"]{
            outline: none;
            background-color: $primary-soft;
            transition: 0.2s;
        }
    }

    .form-email{
        margin-top: 1rem;

        input[type="email"]{
            width: 100%;
            height: 3rem;
            padding: 0 1rem;
            border-radius: 20px;
            border: 1px solid $primary;
        }

        input:focus[type="email"]{
            outline: none;
            background-color: $primary-soft;
            transition: 0.2s;
        }

    }

    .form-textarea{
        margin-top: 1rem;
        textarea{
            width: 100%;
            height: 12rem;
            padding: 1rem 0.5rem 1rem 1rem;
            border-radius: 20px;
            border: 1px solid $primary;
            font:{
                size: 14px;
            }
        }

        textarea:focus{
            outline: none;
            background-color: $primary-soft;
            transition: 0.2s;
        }
    }

    .checkbox-holder{
        position: relative;
        top: 1rem;

        label{
            font:{
                size: 15px;
                weight: 300;
            }
        }
    }   

    .checkbox-center{
        position: relative;
        top: 1rem;
    }

    input[type="checkbox"]{
        position: relative;
        width: 50px;
        height: 20px;
        appearance: none;
        background: $primary;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 0 0 5px rgb(0,0,0,.2);
        transition: .5s;
    }

    input:checked[type="checkbox"]{
        background: $fancy;
        transition: 1.5s;
    }

    input[type="checkbox"]:before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: $primary-light;
        transition: .5s;
        transform: scale(1.1);
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
        transition: .5s;
    }

    input:checked[type="checkbox"]:before{
        transform: translateX(30px);
    }
   
    .form-button{
        position: relative;
        top: 4rem;
        button {
            max-width: 15rem;
            margin: 0 auto;
            padding: 5px 40px;
            border-radius: 10px;
            border: none;
            color: $darkest;
            background-color: $fancy;
            cursor: pointer;
            font: {
                size: 16px;
                weight: 300;
            }
        }

    }

    .container{
        position: relative;
        top: 10rem;
    }

    .email-box{
        position: relative;
        width: 100%;
        margin-top: 5rem;
        padding: 5rem 0 7rem 0;
        background-color: $primary-soft;
        border-top: 1px solid $primary;
        border-bottom: 1px solid $primary;

        .email-img{   
            width: 5rem;
            margin:  0 auto;
            img{
                width: 100%;
            }
        }

        .email-content{
            width: 100%;
            text-align: center;
            margin-top: 1rem;
            a{
                color: $primary-dark;
                font-size: 22px;
                font-weight: 300;
            }
        }
    }

    .telephone-box{
        position: relative;
        width: 100%;
        margin: 3rem 0;
        padding: 3rem 0 5rem 0;

        .telephone-img{   
            width: 4rem;
            margin:  0 auto;

            img{
                width: 100%;
            }
        }

        .telephone-content{
            text-align: center;
            margin-top: 1rem;
            a{
                color: $primary-dark;
                font-size: 22px;
                font-weight: 300;
            }
        }
    }

    .navigation-box{
        position: relative;
        width: 100%;
        text-align: center;
        margin-top: 1rem;
        padding: 3.5rem 0 4.5rem 0;
        background-color: $primary-soft;
        border-top: 1px solid $primary;
        border-bottom: 1px solid $primary;
        .navigation-img{   
            width: 3.5rem;
            margin:  0 auto;
            img{
                width: 100%;
            }
        }

        .navigation-content{
            width: 100%;
            text-align: center;
            margin-top: 1rem;
            ul{
                li{
                    color: $primary-dark;
                    font-size: 22px;
                    font-weight: 300;
                }
            }
        }
    }
}

@media screen and (min-width: 400px) {

    header {
        .h2-box h2 {
            font: {
                size: 30px;
            }
        }
        .h2-box{
            h2::before,
            h2::after {
                width: 15%;
                height: 2px;
            }

            h2::before {
                right: 1rem;
            }
            h2::after {
                left: 1rem;
            }
        }
    }

    .contact-form{
        width: 100%;
    }

    .form-name{
        input[type="name"]{
            height: 3.5rem;
            width: 23rem;
        } 
    }

    .form-email{
        input[type="email"]{
            height: 3.5rem;
            width: 23rem;
        }
    }

    .form-textarea{
        textarea{
            width: 23rem;
        }
    }
}


@media screen and (min-width: 968px) {

}

</style>
