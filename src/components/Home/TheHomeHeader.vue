<template>
  <article>
    <div class="image-wrapper">
        <img
            class="welcome-image sm"
            src="../../assets/img/city.jpg"
            alt="painting"
        />
 <!-- Component -->       
        <img
            class="welcome-image lg"
            src="../../assets/img/lagre-wallpaper.jpg" 
            alt="painting"
        />
    </div>
    <div class="title-container">
        <div class="box">
            <div class="title">
                <span class="block"></span>
                <h1>JOZEF ZIGO - SYNMAL<span></span></h1>
            </div>
            <div class="sub-title">
                <div class="sub-title-block"></div>
                <p>Maliarkse práce</p>
            </div>
        </div>
    </div>

    <div class="title-container">
      <div class="box">
          <div class="title">
              <span class="block"></span>
              <h1>JOZEF ZIGO - SYNMAL<span></span></h1>
          </div>
          <div class="sub-title">
              <div class="sub-title-block"></div>
              <p>Maliarkse práce</p>
          </div>
      </div>
  </div>

      <h3 class="width">Width: {{ width }}</h3>
      <h3 class="height">Height: {{ height }}</h3>
  </article>
     
</template>

<script>
import tableMixins from '../../mixins/tableMixins.js'
export default {

    mixins: [tableMixins],

    data() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        subTitleBlock: Object
      }
    },

    emits: ['end-ani-titles'],

    mounted () {
      this.subTitleBlock = document.getElementsByClassName('sub-title-block')[0]
      
      this.subTitleBlock.addEventListener('animationend', () => {
        this.$emit('end-ani-titles', true)
      })
    },
}

</script>

<style lang="scss" scoped>

@media screen and ( min-width: 0px) {

  article{
    position: relative;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

  .title-container {
    width: 100%;
    height: 100vh;
    background: #232323;
    display: flex;
    justify-content: center;
    align-items: center;
  }
      
  .box {
    width: 97%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -50%;
  }

  .title {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
  }

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
      font-size: 26px;
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

  .sub-title {
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    height: 30px;
    margin-top: 4rem;
  }

  .sub-title-block{
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
      margin-top: 3rem;
      background-repeat: no-repeat;
  }

  .lg{
    display: none;
  }

  .sm{
    display: block;
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

}

@media screen and (min-width: 375px) {

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
    }
}

@media screen and (min-width: 600px) {

  .box{
    margin-left: 6%;
  }

  h1 {
    font-size: 40px;
    // letter-spacing: 2px;

    span {
      right: -15px;
    }
  }

  p {
    font-size: 17px;
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
    width: 13px;
    height: 13px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
  65% {
      width: 10px;
      height: 7px;
      bottom: 0px;
      width: 18px
  }
  80% {
      width: 10px;
      height: 10px;
      bottom: 20px
  }
  100% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 14px;

  }
  }
}

@media screen and (min-width: 768px) {

    .box{
      margin-left: 6%;
    }

    h1{
      font-size: 50px;
      // letter-spacing: 2px;

      span {
        right: -20px;
      }
    }

    .sub-title{
      margin-top: 4.5rem;
    }

    p{
      font-size: 22px;
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
      width: 16px;
      height: 16px;
      background: #e9d856;
      opacity: 1;
      bottom: 48px;
    }
    65% {
        width: 13px;
        height: 10px;
        bottom: 0px;
        width: 21px
    }
    80% {
        width: 13px;
        height: 13px;
        bottom: 23px
    }
    100% {
      width: 13px;
      height: 13px;
      background: #e9d856;
      border: 0px solid #222;
      bottom: 20px;
    }
  }


}

@media screen and (min-width: 1024px) {

    .lg{
    display: block;
  }

  .sm{
    display: none;
  }

}


</style>
