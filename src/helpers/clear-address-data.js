export function clearAddressData () {
  Object.assign(window[Symbol.for('global.addressData')], {
    address: '',
    coordinates: null,
    url: null,
    addressComponents: {},
    buildingId: null,
    status: null
  })
}
