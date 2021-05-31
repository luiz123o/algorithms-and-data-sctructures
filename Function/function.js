/**
 * A função é um objeto que contém um bloco executavel
 */

/**
 * Function Declaration
 * A função é executada no start o hosting
 */
function sum(a, b) {
    return a + b
}
console.log(sum(4, 5))

/**
 * Function expression
 */
const sum = function(a, b) {
    return a + b
}
console.log(sum(4, 5))

/**
 * Na linguagem JavaScript, as funções são de primeira classe, ou seja,
 *  podem ser atribuidas a uma variavel,
 *  passadas por parametro ou serem retornadas de uma outra função
 */
const subtract = function(a, b) {
    return a - b
}
const calculator = function(fn) {
    return function(a, b) {
        return fn(a, b)
    }
}
console.log(calculator(sum)(4, 4))

// É possivel invocar uma função com menos ou mais parâmetros, não necessariamente seguindo o que está declarado

const sum = function(a, b) {
    return a + b
}
console.log(sum(5, 5)) // retorna 10
console.log(sum(5)) // retorna NaN pois o segundo parametro é undefined
console.log(sum(1, 2, 3)) // o terceiro parâmetro será ignorado mais pode ser acessado

// Podemos definir valores padrões para cada um dos parâmetros de uma função

const sum = function(a = 1, b = 1) {
    return a + b
}
console.log(sum(5, 5)) // retorna 10
console.log(sum(5)) // retorna 6
console.log(sum()) // retorna 2

/**
 * arguments
 * através desta variavel implícita é possivel acessar o parâmetro da função invocada.
 */
const sum = function() {
    let total = 0
    for (let argument in arguments) {
        total += arguments[argument]
    }
    return total
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)) // retorna 45


/**
 * rest parameter
 * através desta variavel implícita é possivel acessar o parâmetro da função invocada.
 */

const sum = function(...numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)) // retorna 45

// Ele deve ser sempre o o ultimo