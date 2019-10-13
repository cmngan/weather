const fs = require('fs')

let rawData = fs.readFileSync('city.list.min.json')
let cityList = JSON.parse(rawData)
cityList.sort((a, b) => a.name.localeCompare(b.name))
cityList = cityList.map(c => ({...c, lowerCaseName: c.name.toLowerCase(), lowerCaseCountry: c.country.toLowerCase()}))
cityList = cityList.filter(c => /^[a-z]/.test(c.lowerCaseName))
const data = JSON.stringify(cityList)
fs.writeFileSync('cityList.json', data)
