module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-shop/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/styles.sass";`,
            },
        },
    },
};
