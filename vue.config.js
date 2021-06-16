module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import '@/sass/_variables.scss';
                    @import '@/sass/_global.scss';
                `
            }
        }
    },

    pluginOptions: {
        sitemap: {
            urls: [
                'https://www.synmal.sk/',
                'https://www.synmal.sk/about',
                'https://www.synmal.sk/contact',
                'https://www.synmal.sk/gallery',
            ]
        }
    }
}
