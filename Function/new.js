const person1 = {
    name: "Luiz Otavio",
    city: "São Caetano",
    year: 1991,
    getAge() {
        return (new Date()).getFullYear() - this.year
    }
}
const person2 = {
        name: "Estefane Cristina",
        city: "São Roque",
        year: 1995,
        getAge() {
            return (new Date()).getFullYear() - this.year
        }
    }
    //Função fabrica, que é um tipo de padrão, retorna um novo objeto após ser invocada diretamente

const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return (new Date()).getFullYear() - this.year
        }
    }
}
const person1 = createPerson("Luiz Otavio", "São Caetano", 1991)
const person1 = createPerson("Estefane", "Mairinque", 1995)

//Como eliminar a duplicação de codigo e reusar as propriedades entre objetos

const personPrototype = {
    getAge() {
        return (new Date()).getFullYear() - this.year
    }
}

const createPerson = function(name, city, year) {
    const person = {
        name,
        city,
        year
    }
    Object.setPrototypeOf(person, personPrototype)
    return person
}
const person1 = createPerson("Luiz Otavio", "São Caetano", 1991)
const person2 = createPerson("Estefane", "Mairinque", 1995)

/**
 * Função construtora retorna um novo objeto ao ser invocada por meio do operador new
 * Inicia com letra maiuscula
 */
const Person = function(name, city, year) {
    this.name = name
    this.city = city
    this.year = year
    this.getAge = function() {
        return (new Date()).getFullYear() - this.year
    }
}
const person1 = new Person("Luiz Otavio", "São Caetano", 1991)
const person2 = new Person("Estefane", "Mairinque", 1995)

/**
 * Função construtora
 * Toda função tem uma propriedade chamada  prototype, que é vinculada ao __proto__ do objeto kcriado pelo operador new
 * É diferente do __proto__, o proto é a cadeia de protótipos do objeto que ele herda
 * Só as funções tem
 * é só as construtoras a utilizam
 */
const Person = function(name, city, year) {
    this.name = name
    this.city = city
    this.year = year

}

Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year
}

const person1 = new Person("Luiz Otavio", "São Caetano", 1991)
const person2 = new Person("Estefane", "Mairinque", 1995)

/**
 * Criando o algorithimo do new
 */
const _new = function(fn, ...params) {
    const obj = {}
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj, params)
    return obj
}
const Person = function(name, city, year) {
    this.name = name
    this.city = city
    this.year = year

}

Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year
}

const person1 = _new(Person, "Luiz Otavio", "São Caetano", 1991)
const person2 = _new(Person, "Estefane", "Mairinque", 1995)