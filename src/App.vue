<template>
  <v-app>
    <div id="container-for-map"></div>

    <div id="header-on-map" class="header-on-map--wide">
      <v-img
        contain src="@/assets/dgtek-logo-new.svg"
        height="100"
        width="140"
        class="ma-auto"
        style="cursor: pointer; max-height: 100px; max-width: 140px;"
        @click="clickHandler('https://dgtek.net')"
      />
    </div>

    <div class="autocomplete-wrapper" v-if="mapIsReady">
      <GoogleAutocomplete :address.sync="address" />
    </div>

    <v-card width="300" class="pa-4" style="position: fixed; bottom: 0; left: 0; background: #fbfbfb90">
      <v-radio-group row mandatory v-model="radio.footprint" class="ma-0">
        <v-radio
          label="Service available"
          :value="true"
          color="primary"
          readonly
        ></v-radio>
      </v-radio-group>
      <v-radio-group row mandatory v-model="radio.build" class="ma-0">
        <v-radio
          label="Build commenced"
          color="#000"
          readonly
        ></v-radio>
      </v-radio-group>
      <v-radio-group row mandatory v-model="radio.soon" class="ma-0">
        <v-radio
          label="Coming soon"
          color="#990"
          readonly
        ></v-radio>
      </v-radio-group>
    </v-card>

    <Popup :opened.sync="showPopup" :title="popupTitle" :text="popupText" :image="popupImage" />
  </v-app>
</template>

<script>

import '@/scss/main.css'

import { createMap, drawPolygons, searchAddressInDB, searchAddressInPolygons } from '@/helpers'

import GoogleAutocomplete from '@/components/GoogleAutocomplete.vue'
import Popup from '@/components/Popup.vue'

export default {
  name: 'App',

  components: {
    GoogleAutocomplete,
    Popup
  },

  data: function () {
    return {
      mapIsReady: false,
      building: null,
      address: '',
      showPopup: false,
      popupTitle: '',
      popupText: '',
      popupImage: require('@/assets/dgtek-logo-new.svg'),
      radio: {
        footprint: true,
        build: true,
        soon: true
      }
    }
  },

  methods: {
    clickHandler (url) {
      window.open(url, '_self')
    },

    showMessage (event) {
      this.popupTitle = event.detail.title
      this.popupText = event.detail.text
      this.showPopup = true
    },

    async repeatCheckAddress () {
      if (!(await searchAddressInDB())) {
        console.log('Not found in DB. Serching in polygons...')
        searchAddressInPolygons()
      }
    }
  },

  async mounted () {
    window[Symbol.for('map.container')] = document.getElementById('container-for-map')

    await createMap()
    await drawPolygons()
    this.mapIsReady = true

    window.addEventListener('show-message', this.showMessage)
    this.$root.$on('show-message', this.repeatCheckAddress)
  },

  beforeDestroy () {
    window.removeEventListener('show-message', this.showMessage)
    this.$root.$off('show-message', this.repeatCheckAddress)
  }
}
</script>

<style>
#container-for-map {
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

#header-on-map {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  text-align: left;
  background: #fbfbfb90;
  box-shadow: 4px 4px 8px #00000070;
  z-index: 5;
}

.autocomplete-wrapper {
  position: fixed;
  top: 120px;
  background: #900;
  width: 100%;
  z-index: 4;
  color: #fbfbfb;
}
</style>
