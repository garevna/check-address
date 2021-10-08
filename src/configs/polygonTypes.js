import {
  footprintMarker,
  buildMarker,
  soonMarker
} from './markers'

class PolygonTypes {
  constructor () {
    this['service-available'] = {
      status: 'Footprint',
      polygon: 'ServiceAvailable',
      event: 'footprint',
      color: '#A00E0D',
      marker: footprintMarker,
      message: {
        title: 'Congratulations!',
        text: 'DGtek High-Speed Internet is available at your address. Register your interest with DGtek below or contact an authorised DGtek Retail Service Provider.'
      }
    }

    this['build-commenced'] = {
      status: 'UnderConstruction',
      polygon: 'BuildCommenced',
      event: 'construction-commenced',
      color: '#000000',
      marker: buildMarker,
      message: {
        title: 'Build commenced!',
        text: 'Our high-speed network is just around the corner from you and construction commenced in your area.\nPlease leave us your email address and we will come back to you with timelines'
      }
    }

    this['coming-soon'] = {
      status: 'ComingSoon',
      polygon: 'ComingSoon',
      event: 'coming-soon',
      color: '#bbbb0090',
      marker: soonMarker,
      message: {
        title: 'Coming Soon!',
        text: 'We are planning to start in your area in the near future'
      }
    }
  }

  getStatus (endpoint) {
    return this[endpoint].status
  }

  getPolygonEndpoint (polygon) {
    const endpoint = Object.keys(this).find(function (key) { return this[key].polygon === polygon }, this)
    return endpoint
  }
}

export const polygonTypes = new PolygonTypes()
