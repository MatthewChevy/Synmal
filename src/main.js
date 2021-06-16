// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router'


import mitt from 'mitt'
window.eventBus = mitt()

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

createApp(App)
    .use(router)
    .mount('#app')
