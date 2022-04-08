// shape-area.js

const PI = Math.PI;

const r = 5
// PI * raio * raio
function circleArea(r) {
return PI * r * r
}

function squareArea(s) {
return s * s
}



module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;

