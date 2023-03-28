import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    iconfont: 'mdi',
    theme: {
        options: { customProperties: true },
        dark: false,
        light: false,
    },
}

export default new Vuetify(opts)
