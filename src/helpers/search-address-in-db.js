import { emitEvent } from './'
import { buildingTypes } from '../configs'

export async function searchAddressInDB () {
  Object.assign(window[Symbol.for('global.addressData')], {
    status: null,
    buildingId: null,
    estimatedServiceDeliveryTime: ''
  })

  const response = await fetch(`${window[Symbol.for('portal.api.host')]}/building/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address: window[Symbol.for('global.addressData')].address })
  })

  if (response.status !== 200) {
    emitEvent('server-error', {
      error: true,
      errorType: 'Search address in DB',
      errorMessage: 'Error reading the data from remote server'
    })
    return response.status
  }

  const result = await response.json()

  if (!result.data) return null

  const { status, estimatedServiceDeliveryTime, _id: buildingId } = result.data

  window[Symbol.for('map.marker')].setIcon(buildingTypes[status].marker)

  Object.assign(window[Symbol.for('global.addressData')], {
    status,
    estimatedServiceDeliveryTime,
    buildingId
  })

  emitEvent('show-message', buildingTypes[status].message)

  return window[Symbol.for('global.addressData')].status
}
