/**
 * Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta
 * É possivel extrair os valores de um array criando variáveis em ordem, de acordo com a psição de cada elemento
 */

const [name, author, year] = "C;Denis Rithie;1972".split(";")
console.log(name, author, year)

//Assim como nas funções, é possivel definir valores padrões para cada uma das variaveis

const language = "C;Denis Rithie;1972".split(";")
const [name, author, year] = language
console.log(name, author, year)

//Para extrair os valores de um objeto é necessario referenciar a chave de cada uma das propriedades
const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
}
const { name, author, year } = language

// É possivel definir nomes diferentes para as variáveis em relação as chaves das propriedades do objeto