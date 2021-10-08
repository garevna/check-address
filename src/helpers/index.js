import { loadGoogleMapsScript } from './load-google-maps-script'
import { createMap } from './create-map'
import { drawPolygons } from './draw-polygons'

import { emitEvent } from './emit-event'

import { createAutocomplete } from './create-autocomplete'

import { clearAddressData } from './clear-address-data'
import { normalizeAddress } from './normalize-address'

import { searchAddressInDB } from './search-address-in-db'
import { searchAddressInPolygons } from './search-address-in-polygons'

export {
  loadGoogleMapsScript,
  createMap,
  drawPolygons,

  emitEvent,

  createAutocomplete,

  clearAddressData,
  normalizeAddress,

  searchAddressInDB,
  searchAddressInPolygons
}
