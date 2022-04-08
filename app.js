const areaFunctions = require('./shapeArea.js')

const rInput = process.argv[2]
const sInput = process.argv[3]

const rValue = areaFunctions.circleArea(rInput);
const sValue = areaFunctions.squareArea(sInput);

console.log(`${rValue} é seu raio`)
console.log(`${sValue} é a área do seu quadrado`)