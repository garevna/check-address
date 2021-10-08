import { polygonTypes } from '../configs'
import { notAvailableMarker } from '../configs/markers'
import { emitEvent } from './'

const message = {
  title: 'Sorry, we\'re not quite there yet.',
  text: 'Our fibre network is constantly expanding, check back in with us in a couple months to see if we can service you or leave a message and we\'ll update you as soon as it\'s available.'
}

export async function searchAddressInPolygons () {
  const { lat, lng } = window[Symbol.for('global.addressData')].coordinates
  const latLng = new window.google.maps.LatLng(lat, lng)

  for (const type of Object.keys(polygonTypes)) {
    const response = await fetch(`${window[Symbol.for('portal.api.host')]}/polygons/${type}`)

    if (response.status !== 200) {
      emitEvent('server-error', {
        error: true,
        errorType: 'Search address in polygons',
        errorMessage: 'Error reading the data from remote server'
      })
      return response.status
    }

    const polygons = (await response.json()).data.map(item => item.geometry.coordinates[0].map(point => ({ lat: point[1], lng: point[0] })))

    for (const coordinates of polygons) {
      const polygon = new window.google.maps.Polygon({ paths: coordinates })
      if (window.google.maps.geometry.poly.containsLocation(latLng, polygon)) {
        Object.assign(window[Symbol.for('global.addressData')], { status: type })

        window[Symbol.for('map.marker')].setIcon(polygonTypes[type].marker)
        window[Symbol.for('map.marker')].visible = true
        window[Symbol.for('global.addressData')].status = polygonTypes[type].polygon

        emitEvent('show-message', polygonTypes[type].message)

        return 200
      }
    }
  }

  emitEvent('show-message', message)
  Object.assign(window[Symbol.for('global.addressData')], { status: 'Not available' })
  window[Symbol.for('map.marker')].setIcon(notAvailableMarker)
  return 404
}
