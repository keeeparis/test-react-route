export const geocode = async (input) => {
    const response = await window.ymaps.geocode(input)

    const obj = response.geoObjects.get(0)
    const newCoords = obj.geometry.getCoordinates()
    const address = obj.getAddressLine()

    return {newCoords, address}
}


const lat = (coord) => coord >= 0 ? `${coord} с.ш.` : `${coord*(-1)} ю.ш.`
const lng = (coord) => coord >= 0 ? `${coord} в.д.` : `${coord*(-1)} з.д.`

export const coordsBeautiful = (coords) => `${lat(coords[0].toFixed(2))}, ${lng(coords[1].toFixed(2))}`

export const colorPlacemark = (index, arr) => index === 0 ? '#f04323' : index === arr.length-1 ? 'green' : 'blue'
