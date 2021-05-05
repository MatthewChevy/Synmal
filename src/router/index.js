import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'
// import Gallery from '../views/Gallery.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import( /*webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import( /*webpackChunkName: "contact" */ "../views/Contact.vue")
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () =>
            import( /*webpackChunkName: "gallery" */ "../views/Gallery.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
