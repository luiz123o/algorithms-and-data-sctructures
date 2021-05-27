/**
 * JSON, ou JavaScript Object Notation, é um formato de intercânbio de dados, derivados da linguagem JavaScript que foi
 * descoberto por Douglas Crokford e padronizado pela ECMA-404  
 */

// Para que serve?
// Carregar arquivos de configuração, e para armazenar dados e servir dados

/**
 * Método stringify
 * converte um tipo de dado para JSON
 */


JSON.stringify(10) // retorna '10'
JSON.stringify("JavaScript") // retorna uma '"Javascript"'
JSON.stringify(true) // retorna 'true'
JSON.stringify(false) // retorna 'false'
JSON.stringify({ name: "Self", paradigm: "OO" }) // retorna '{ "name": "Self", "paradigm": "OO" }'
JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]) // retorna '[1, 2, 3, 4, 5, 6, 7, 8, 9]'
JSON.stringify(null) // retorna 'null'

/**
 * Método parse
 * converte um JSON para um determinado tipo de dado
 */

JSON.parse('10') // retorna 10
JSON.parse('"Javascript"') // retorna uma "Javascript"
JSON.parse('true') // retorna true
JSON.parse('false') // retorna false
JSON.parse({ "name": "Self", "paradigm": "OO" }) // retorna { name: "Self", paradigm: "OO" }
JSON.parse('[1, 2, 3, 4, 5, 6, 7, 8, 9]') // retorna [1, 2, 3, 4, 5, 6, 7, 8, 9]
JSON.parse('null') // retorna null

//Comparando objetos com json

const book1 = {
    name: "Refactoring",
    author: "Martin Flower"
}
const book2 = {
    name: "Refactoring",
    author: "Martin Flower"
}
console.log(book1 === book2)
console.log(JSON.stringify(book1) === JSON.stringify(book2)) // retorna true

//clonando um objeto em um novo objeto

const book1 = {
    name: "Refactoring",
    author: "Martin Flower"
}
const book2 = {
    name: "Refactoring",
    author: "Martin Flower"
}
const book3 = JSON.parse(JSON.stringify(book2))

//Json e object são conceitos diferentes