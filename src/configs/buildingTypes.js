import {
  litMarker,
  footprintMarker,
  buildMarker,
  soonMarker,
  notAvailableMarker
} from './markers'

export const buildingTypes = {
  LIT: {
    store: 'lit',
    event: 'on-net',
    marker: litMarker,
    message: {
      title: 'Congratulations!',
      text: 'DGtek High-Speed Internet is available at your address. Register your interest with DGtek below or contact an authorised DGtek Retail Service Provider.'
    }
  },
  Footprint: {
    status: 'footprint',
    event: 'footprint',
    marker: footprintMarker,
    message: {
      title: 'Congratulations!',
      text: 'DGtek High-Speed Internet is available at your address. Register your interest with DGtek below or contact an authorised DGtek Retail Service Provider.'
    }
  },
  BuildCommenced: {
    store: 'build',
    event: 'construction-commenced',
    marker: buildMarker,
    message: {
      title: 'Build commenced!',
      text: 'Our high-speed network is just around the corner from you and construction commenced in your area.\nPlease leave us your email address and we will come back to you with timelines'
    }
  },
  ComingSoon: {
    store: 'soon',
    event: 'coming-soon',
    marker: soonMarker,
    message: {
      title: 'Coming Soon!',
      text: 'We are planning to start in your area in the near future'
    }
  },
  Other: {
    store: 'other',
    event: 'not-available',
    marker: notAvailableMarker,
    message: {
      title: 'Sorry, we\'re not quite there yet.',
      text: 'Our fibre network is constantly expanding, check back in with us in a couple months to see if we can service you or leave a message and we\'ll update you as soon as it\'s available.'
    }
  }
}
