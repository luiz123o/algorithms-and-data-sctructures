/**
 * O principal Objetivo da herança é permitir o reuso de código por meio do compartilhamento de propriedades entre objetos, evitando a duplicação
 * A propriedade __proto__ é uma refêrencia para o prótotipo do objeto
 */
const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
}
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
}
console.log(scheme) // retorna name and year
console.log(javascript) // retorna name and year

//Porque a propriedade paradigma não foi exibida dentro do objeto?
// para evitar repetição ele não repete a informação
//para ser exibido precisamos invocar o prototipo
console.log(scheme.paradigm)

/**
 * Método hasOwnProperty
 * pode ser usado para determinar se uma propriedade pertence ao objeto.
 */
for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key)) // return name true, year true, paradigm false
}

/**
 * Métodos Object.setPrototypeOf & Object.getPrototypeOf
 * permitem a interação com prótotipo do objeto
 */
const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975,
}

Object.setPrototypeOf(scheme, functionalLanguage)

const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
}
Object.setPrototypeOf(javascript, functionalLanguage)

/**
 * Método Object.create
 * cria um objeto passando seu protótipo por parâmetro
 */
const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = Object.create(functionalLanguage)
scheme.name = "Scheme"
scheme.year = 1975

const javascript = Object.create(functionalLanguage)
javascript.name = "JavaScript"
javascript.year = 1995

//Obs.: Sem o seu protótipo o objeto perde algumas operações importantes

// Shadowing é quando existe a mesma propriedade no protótipo e no objeto,
// quando chamada a que prevalece é a do objeto mas a do protótipo pode ser acessada atrvés do getPrototypeOf ou __proto__
const functionalLanguage = Object.create({})
functionalLanguage.paradigm = "Functional"
const scheme = Object.create(functionalLanguage)
scheme.name = "Scheme"
scheme.year = 1975
const javascript = Object.create(functionalLanguage)
javascript.name = "JavaScript"
javascript.year = 1995
javascript.paradigm = "OO"

for (let key in javascript) {
    console.log(key, javascript[key]) // return name:JavaScript, year: 1995, paradigm: OO
}
console.log(Object.getPrototypeOf(javascript).paradigm) // return "Functional"
console.log(javascript.__proto__.paradigm) // return "Functional"