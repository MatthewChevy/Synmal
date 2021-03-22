<template>
    <div class="button-wrapper">
        <button @click="$emit('menu-button'), buttonToggle()" class="menu-toggle">Menu</button>
    </div>
</template>

<script>

import tableMixins from '../mixins/tableMixins.js'

export default {

    mixins: [tableMixins],

    emits: ['menu-button'],

    props: {
      activeMenu: {
        type: Boolean,
      },
    },

    data() {
        return {
            button: Object,
        }
    },

    methods: {
      buttonToggle() {
        this.button.classList.toggle('is-active')
      }
    },

    watch: {
      activeMenu() {
        if( this.activeMenu === false)
          this.button.classList.remove('is-active')
      }
    },

    mounted() {
        this.button = document.getElementsByTagName('button')[0]
    },

}
</script>

<style lang="scss" scoped>


$buttonWidth: 30px;
$buttonHeight: 20px;
$buttonColor: darken(#ffffff, 15%);
$lineThickness: 2px;
$transitionSpeed: .25s;
$transitionEasing: ease-in-out;

.button-wrapper{
    margin: 15px;
}

.menu-toggle {
  position: relative;
  display: block;
  width: $buttonWidth;
  height: $buttonHeight;
  background: transparent;
  border-top: $lineThickness solid;
  border-bottom: $lineThickness solid;
  color: $buttonColor;
  font-size: 0;
  
  transition: all $transitionSpeed $transitionEasing;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: $lineThickness;
    
    position: absolute;
    top: 50%;
    left: 50%;
    
    background: currentColor;
    
    transform: translate(-50%, -50%);
    transition: transform $transitionSpeed $transitionEasing;
  } 
}

button:hover {
  color: lighten($buttonColor, 15%);
}

button.is-active {
  border-color: transparent;

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

button {
  border: none;
  cursor: pointer;
  outline: none;
}



@media screen and (min-width: 1024px) {
    .button-wrapper {
        display: none;
    }
}
</style>
