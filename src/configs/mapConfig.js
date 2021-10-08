export default [
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }, { lightness: 5 }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#000000' }, { lightness: 35 }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#000000' }, { lightness: 58 }, { weight: 0.1 }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 35 }]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 58 }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#dedede' }, { lightness: 21 }]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }]
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{ color: '#fefefe' }, { lightness: 20 }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
  }
]
