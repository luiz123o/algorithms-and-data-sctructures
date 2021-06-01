/**
 * Mantém o scope chain de forma estatica
 * é definida no momento  de sua criação 
 * todas funções do javascript são closures
 */
function fn1() {
    const v1 = 10
    return function() {
        console.log(v1)
    }
}
const fn2 = fn1()
fn2()

// Novo exemplo
const v1 = 10

function fn1() {
    console.log(v1)
}

function fn2(fn1) {
    const v1 = 100
    fn1()
}

fn2(fn1) // retorna valor 10

/**
 * Apesar de estático o scope chain faz referência para objetos que estão na memoria e podem ser compartilhados por mais de uma função
 * Ambos compartilham o v1 e suas mutações pois tem referencia compartilhada
 */

function fn1() {
    let v1 = 10
    return {
        m1() {
            console.log(++v1) // 10 incrementa 1  vira 11
        },
        m2() {
            console.log(--v1) // 11 retiro 1 fica 10
        }
    }
}
const obj = fn1()
obj.m1()
obj.m2()
    //Outro exemplo
const obj = {}

for (var v1 = 0; v1 < 3; v1++) {
    obj[v1] = function() {
        console.log(v1)
    }

}
obj[0](); // return 3
obj[1](); // return 3
obj[2](); // return 3

//outro exemplo
const obj3 = {}
for (var v2 = 0; v2 < 3; v3++) {
    obj3[v2] = (function(v3) {
        return function() {
            console.log(v3)
        }
    })(v2)
}
obj3[0](); // return 0
obj3[1](); // return 1
obj3[2](); // return 2

//utilizando o bind para termos acesso ao this da função

const obj4 = {}

for (var v4 = 0; v4 < 3; v4++) {
    obj4[v4] = (function() {
        console.log(this.v2)
    }).bind({ v2: v4 })
}
obj4[0](); // return 0
obj4[1](); // return 1
obj4[2](); // return 2