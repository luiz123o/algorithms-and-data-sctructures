/**
 * através do call, aplly e bind é possivel invocar uma função passando o this como parâmetro
 */
//CALL
const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2)
}


const circle = {
        radius: 10,
        calculateArea
    }
    //vou invocar  função passando o this para ela
console.log(calculateArea.call(circle))

//CALL
const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2)
}


const circle = {
        radius: 10,
        calculateArea
    }
    //vou invocar  função passando o this para ela
console.log(calculateArea.apply(circle))

//qual a diferença entre call e apply
const calculateArea = function(fn) {
    return Math.PI * Math.pow(this.radius, 2)
}


const circle = {
    radius: 10,
    calculateArea
}
console.log(calculateArea.call(circle, Math.round))
console.log(calculateArea.apply(circle, [Math.ceil])) // deve sempre passar como array

/**
 * bind
 * permite encapsular o this dentro da função. retornando-a
 */
const calculateArea = function(fn) {
    return Math.PI * Math.pow(this.radius, 2)
}
const circle = {
    radius: 10,
    calculateArea
}
const calculateAreaForCircle = calculateArea.bind(circle)

console.log(calculateArea(Math.random))