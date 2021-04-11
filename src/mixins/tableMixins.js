import { throttle } from 'lodash-es'

export default {
    data() {
        return {
            actualyWidnowSize: Number,
            breakpointmd: 767
        }
    },

    created() {
        this.actualyWidnowSize = window.innerWidth
        window.addEventListener('resize', throttle(this.sizeWindow, 350))
    },

    methods: {
        sizeWindow(e) {
            return (this.actualyWidnowSize = e.srcElement.innerWidth)
        },

        // parallax( element, distance, speed ) {
        //     const item = document.getElementsByClassName(element)[0]
        //     item.style.transform = `translateY(${distance * speed}px)` 
        // }
    }
}
