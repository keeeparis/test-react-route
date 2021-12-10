import { coordsBeautiful, colorPlacemark } from "../utils";

describe('unit tests util.js', () => {
    describe('testing latitude and longitude', () => {
        const object1 = [
            {input: [11.11, 11.11], equals: '11.11 с.ш., 11.11 в.д.'},
            {input: [-11.11, 11.11], equals: '11.11 ю.ш., 11.11 в.д.'},
            {input: [11.11, -11.11], equals: '11.11 с.ш., 11.11 з.д.'},
            {input: [-11.11, -11.11], equals: '11.11 ю.ш., 11.11 з.д.'},
        
            {input: [-11.1142, -11.11145], equals: '11.11 ю.ш., 11.11 з.д.'},
        ]
        
        object1.forEach(e => {
            it(`${coordsBeautiful(e.input)} to equal ${e.equals}`, () => {
                expect(coordsBeautiful(e.input)).to.equal(e.equals)
            })
        })
    })

    describe('testing placemarks colors', () => {
        const object2 = [
            {index: 0, arr: ['e'], equals: '#f04323'},
            {index: 0, arr: ['e', 'e'], equals: '#f04323'},
            {index: 1, arr: ['e', 'e'], equals: 'green'},
            {index: 0, arr: ['e', 'e', 'e'], equals: '#f04323'},
            {index: 1, arr: ['e', 'e', 'e'], equals: 'blue'},
            {index: 2, arr: ['e', 'e', 'e'], equals: 'green'},
            {index: 0, arr: ['e', 'e', 'e', 'e', 'e'], equals: '#f04323'},
            {index: 1, arr: ['e', 'e', 'e', 'e', 'e'], equals: 'blue'},
            {index: 2, arr: ['e', 'e', 'e', 'e', 'e'], equals: 'blue'},
            {index: 3, arr: ['e', 'e', 'e', 'e', 'e'], equals: 'blue'},
            {index: 4, arr: ['e', 'e', 'e', 'e', 'e'], equals: 'green'},
        ]
        
        object2.forEach(e => {
            it(`${colorPlacemark(e.index, e.arr)} to equal ${e.equals}`, () => {
                expect(colorPlacemark(e.index, e.arr)).to.equal(e.equals)
            })
        })
    })
})
