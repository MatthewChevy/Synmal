import { throttle } from 'lodash-es'

export default {
    data() {
        return {
            actualyWidnowSize: Number,
            breakpoint: 1024,
            breakpointmd: 768
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

        parallax(element, distance, speed) {
            element.style.transform = `translateY(${distance * speed}px)`
        }
    }
}
