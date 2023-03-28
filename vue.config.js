// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            scss: {},
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                ThemePath: path.resolve(__dirname, `src/public/theme/${process.env.VUE_APP_THEME || 'default'}/`),
                // BaseSkin: path.resolve(__dirname, `src/public/theme/${process.env.VUE_APP_THEME || 'default'}/scss/variable/${process.env.VUE_APP_BASE_SKIN}/_variable.scss`),
                BaseSkin: path.resolve(__dirname, `src/public/theme/${process.env.VUE_APP_THEME || 'default'}/scss/variable/${process.env.VUE_APP_BASE_SKIN}/_variable.scss`),
                SitePath: path.resolve(__dirname, `src/public/sites/${process.env.VUE_APP_SITE || 'guinne'}/`),
            },
        },
    },
    devServer: {
        disableHostCheck: true,
    },
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/demo-print/' // Thay tên repository của các bạn vào đây nhé
            : '/',
}
