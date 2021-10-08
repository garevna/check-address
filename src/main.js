import Vue from 'vue'
import App from './App'

/* eslint-disable */

import vuetify from './plugins/vuetify'
Vue.use(vuetify)

import '@/scss/fonts.scss'
import '@/scss/variables.scss'
import './registerServiceWorker'

Vue.config.productionTip = false

window[Symbol.for('portal.api.host')] = process.env.NODE_ENV === 'production' ? 'https://portal.dgtek.net' : 'https://dgtek-staging.herokuapp.com'

window[Symbol.for('global.addressData')] = {
  buildingId: null,
  address: '',
  addressComponents: {},
  coordinates: [],
  estimatedServiceDeliveryTime: '',
  buildingName: '',
  uniqueCode: ''
}

const vue = new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
