const THEME = process.env.VUE_APP_THEME || 'base2'
const SITE = process.env.VUE_APP_SITE || 'betzilla'

export default {
    data(): any {
        return {
            themePath: THEME,
            sitePath: SITE,
        }
    },
}
