/**
 * As arrow functions tem umka abordagem mais simples e direta para escrever uma função e podem melhorar a legibilikdade do código em diversas situações
 */
const sum = (a, b) => {
    let total = 0
    for (let argument in arguments) {
        total += arguments[argument]
    }
}