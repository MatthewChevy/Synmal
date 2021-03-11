import { throttle } from 'lodash-es'

export default {
    data() {
        return {
            actualyWidnowSize: Number
        }
    },

    created() {
        this.actualyWidnowSize = window.innerWidth
        window.addEventListener('resize', throttle(this.sizeWindow, 0))
    },

    methods: {
        sizeWindow(e) {
            return (this.actualyWidnowSize = e.srcElement.innerWidth)
        }
    }
}
