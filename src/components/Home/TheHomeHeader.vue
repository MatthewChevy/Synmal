<template>
    <div>
        <img
            class="welcome-image"
            src="../../assets/img/city.jpg"
            alt="painting"
        />
    </div>
    <div class="container">
        <div class="box">
            <div class="title">
                <span class="block"></span>
                <h1>JOZEF ZIGO - SYNMAL<span></span></h1>
            </div>
            <div class="role">
                <div class="block"></div>
                <p>Maliarkse práce</p>
            </div>
        </div>
    </div>

    <h3 class="width">Width: {{ width }}</h3>
    <h3 class="height">Height: {{ height }}</h3>
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js'
export default {
    mixins: [tableMixins],

    data() {
      return {
        width:  window.innerWidth,
        height: window.innerHeight
      }
    },

    mounted () {
      window.addEventListener('resize', () => {
          this.width = window.innerWidth;
          this.height = window.innerHeight;
        })
    //  this.width = window.innerWidth;
    //  this.height = window.innerHeight;
    },
}


</script>

<style lang="scss" scoped>


@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

.container {
  width: 100%;
  height: 100vh;
  background: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
    

.box {
    // width: 250px;
    width: 22rem;
    // height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -50%;

    .title {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        height: 50px;

    .block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: fixed;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
    }

    h1 {
        font-family: $font-family;
        color: #fff;
        font-size: 32px;
        animation: mainFadeIn 2s 1.6s forwards;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: fixed;

        span {
            width:0px;
            height: 0px;
            border-radius: 50%;
            background: #ffb510;
            animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
            animation-delay: 2s;
            margin-left: 5px;
            margin-top: -10px;
            position: absolute;
            bottom: 13px;
            right: -12px;
        }
    }
}

.role {
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    height: 30px;
    margin-top: 4rem;

    .block {
        width: 0%;
        height: inherit;
        background: $fancy;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
    }

      p {
        position: fixed;
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        font-weight: 600;
        font-family: $font-family;
        color: #ffffff;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}

@keyframes mainBlock {
  0% { width: 0%; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
}

@keyframes secBlock {
  0% { width: 0%; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
}

@keyframes mainFadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
      height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% { opacity: 0; }
  100% { opacity: .85; }
}

.welcome-image {
    position: fixed;
    max-width: 100%;
    z-index: 0;
    opacity: 60%;
    background-repeat: no-repeat;
}

h3{
  color: #d9ff00;
  position: absolute;
  z-index: 7;
  top: 4rem;
  margin: 1rem;
}

.width{
  top: 4rem;
}
.height{  
  top: 5.5rem;
}



@media screen and (min-width: 350px) {
   
}

@media screen and (min-width: 375px) {

}

@media screen and (min-width: 450px) {

}

@media screen and (min-width: 640px) {

}

@media screen and (min-width: 700px) {

}

@media screen and (min-width: 900px) {

}
</style>
