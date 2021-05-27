/**
 * ObjectApi
 */

/**
 * Obejct.assign
 * faz a copia das propriedades dos objetos passados por parâmetro para objeto alvo, que é retornado
 */
const javascript = Object.create({})
    // Uma das propriedades mais uteis do javascript!
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
})
console.log(javascript)

/**
 * Object.keys
 * Retorna as chaves das propriedades do objeto.
 */
//Com ele podemos substituir o for in
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
console.log(Object.keys(javascript))

/**
 * Object.values
 * Retorna os valores das propriedades do objeto.
 */

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
console.log(Object.values(javascript))

/**
 * Object.entries
 * Retorna as propriedades do objeto em pares de chave e valor
 */

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
console.log(Object.entries(javascript))

/**
 * Object.is
 * Compara dois objetos considerando os tipos de dados, de forma similar ao operador ===
 */

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
const javascript1 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}
console.log(Object.values(javascript, javascript)) // retorna true
console.log(Object.values(javascript, javascript1)) // retorna false

/**
 * defineProperty
 * configurable - Permite que uma determinada propriedade seja apagada
 * enumerable - Permite que uma determinada propriedade seja enumerada
 * value - Define um valor de uma determinada propriedade
 * writable - Permite que uma determinada propriedade tenha seu valor modificado
 */

const javascript = {}
Object.defineProperty(javascript, "name", {
    value: "JavaScript"
})
console.log(javascript) // retorna {}
console.log(javascript.name) // retorna "JavaScript"
    //Quando passamos só o value todo o retorno é considerado como falso por isso aparace como retorno um objeto vazio

/**
 * enumerable
 */
//Se passarmos o enumerable como true ela ficara disponivel
const javascript = {}
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript"
})
console.log(javascript) // retorna {name: "Javascript"}

/**
 * writable
 */
const javascript = {}
Object.defineProperty(javascript, "name", {
    enumerable: true,
    value: "JavaScript",
    writable: true
})
javascript.name = "ECMAscript"
console.log(javascript) // retorna {name: "ECMAscript"}

/**
 * configurable
 */
const javascript = {}
Object.defineProperty(javascript, "name", {
    configurable: true,
    enumerable: true,
    value: "JavaScript",
    writable: true
})
javascript.name = "ECMAscript"
delete javascript.name
console.log(javascript) // retorna {}


/**
 * preventExtensions
 * Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes
 */

const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO e Functional"
}
Object.preventExtensions(javascript)
    //Modificando o objeto permite
javascript.name = "ECMAScript"
    //Adicionando uma nova propriedade não permite
javascript.author = "Brendan Eich"
    // Ele é ignorada
delete javascript.name // Ele permite exclusão

console.log(Object.isExtensible(javascript)) // retorna true pois foi aplicado o present


/**
 * seal
 * Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes
 */
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO e Functional"
}
Object.seal(javascript)

//Modificando o objeto ele permite
javascript.name = "ECMAScript"
    //Adicionando uma nova propriedade ele não permite
javascript.author = "Brendan Eich"
    // o delete é ignorado 
delete javascript.year
console.log(Object.isSealed(javascript)) // retorna true pois foi aplicado o seel


/**
 * freeze
 * Impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes
 */
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO e Functional"
}
Object.freeze(javascript)

//Modificando o objeto ele não permite
javascript.name = "ECMAScript"
    //Adicionando uma nova propriedade ele não permite
javascript.author = "Brendan Eich"
    // o delete é ignorado não permite
delete javascript.year

console.log(Object.isFrozen(javascript)) // retorna true pois foi aplicado o freeze

//Obs.: só permite a leitura do objeto

// Não é possivel alterar o protótipo do objeto, pois ele se torna imutavel