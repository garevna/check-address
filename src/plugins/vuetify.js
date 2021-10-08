import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      expand: 'mdi-chevron-down',
      valid: 'mdi-check-bold',
      invalid: 'mdi-alert-outline'
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#900',
        secondary: '#E82F37',
        buttons: '#900',
        homefone: '#fbfbfb',
        inputs: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00'
      },
      dark: {
        primary: '#900',
        secondary: '#E82F37',
        buttons: '#900',
        homefone: '#fbfbfb',
        fields: '#EFEFEF',
        activefield: '#D9D9D9',
        warning: '#FAFF00'
      }
    }
  }
})
