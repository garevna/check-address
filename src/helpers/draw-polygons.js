import { polygonTypes } from '../configs'

const endpoints = Object.keys(polygonTypes)

export async function drawPolygons () {
  for (const endpoint of endpoints) {
    const response = await (await fetch(`https://portal.dgtek.net/polygons/${endpoint}`)).json()
    if (response.error) return console.warn(`Error fetching polygons ${endpoint}`)
    const polygons = response.data.map(polygon => ({ coordinates: polygon.geometry.coordinates[0] }))
    for (const feature of polygons) {
      const polygon = new window.google.maps.Polygon({
        paths: feature.coordinates.map(coord => new window.google.maps.LatLng(coord[1], coord[0])),
        fillColor: polygonTypes[endpoint].color,
        strokeColor: polygonTypes[endpoint].color,
        strokeWeight: 0.3,
        clickable: false
      })
      polygon.setMap(window[Symbol.for('google.map')])
    }
  }

  return { status: 200 }
}
