/**Criando uma função que calcule a soma de todos os numeros de 1 há n */


function sumAll(n) { //5
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

function sumAllMath(n) {
    //5 *(6) /2
    return n * (n + 1) / 2
}


console.log(sumAllMath(5))

console.log(sumAll(5))