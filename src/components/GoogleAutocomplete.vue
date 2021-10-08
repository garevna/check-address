<template>
  <v-card width="100%" dark class="primary mx-auto my-auto pa-3">
    <v-row align="center" justify="center">
      <v-card flat class="transparent" style="min-width: 340px; text-align: center">
        <input id="input-with-autocomplete" v-model="address" />
      </v-card>
      <v-card flat class="transparent" style="width: 100px; text-align: center">
        <v-btn rounded class="homefone submit-button ml-1" @click="submit" :disabled="!address">SUBMIT</v-btn>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>

import { createAutocomplete } from '@/helpers'

export default {
  name: 'GoogleAutocomplete',

  data: () => ({
    inputElement: null,
    address: ''
  }),

  methods: {
    submit () {
      if (window[Symbol.for('global.addressData')].address && window[Symbol.for('global.addressData')].coordinates) {
        this.$root.$emit('show-message')
      }
    },
    catchEvent (event) {
      const { address, addressComponents, status, buildingId, url, coordinates, estimatedServiceDeliveryTime } = event.detail

      this.$emit('update:building', { address, addressComponents, status, buildingId, url, coordinates, estimatedServiceDeliveryTime })
    }
  },

  beforeDestroy () {
    window.removeEventListener('submit-address', this.catchEvent)
  },

  mounted () {
    this.inputElement = document.getElementById('input-with-autocomplete')

    createAutocomplete(this.inputElement)

    this.$emit('update:building', null)

    window.addEventListener('submit-address', this.catchEvent)
  }
}
</script>

<style>
#input-with-autocomplete {
  padding: 8px 16px;
  font-family: Opinion, Arial, monospace, sans-serif;
  font-size: 16px;
  outline: none;
  border: solid 1px #fbfbfb;
  border-radius: 4px;
  min-width: 340px;
  color: #fbfbfb;
}

::placeholder {
  font-family: Opinion, Arial, monospace, sans-serif;
  color: #b09090;
  font-size: 16px;
}

.submit-button {
  font-family: Opinion, Arial, monospace, sans-serif;
  background: #fbfbfb;
  color: #900 !important;
  font-weight: bold;
  /* border-radius: 50%; */
}
</style>
