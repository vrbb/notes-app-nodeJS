const fs = require('fs')

const jsonFile = fs.readFileSync('notes.json')

const jsonFileData = JSON.parse(jsonFile)
console.log(jsonFile, jsonFileData)
jsonFileData.name = 'Anderson'
console.log(jsonFile, jsonFileData)