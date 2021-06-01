/**
 * Execution Context
 * É o ambiente onde código é executado, sendo composto pelo
 * variable object, scope chain e this
 */
/**
 * Quando executamos nosso programa é executado elementos da pilha
 * É criado um Global execution context, 
 * quando chamamos uma função é adicionado um novo item na pilha, Execution Context 1, 2 etc...
 * 
 */

/**
 * Scope chain
 * Possibilita o acesso de variaveis fora de função, pela função
 * Mas é impossivel acessar uma variavel, estando de fora do escopo da função
 */
const v1 = 10
const fn1 = function() {
    const v2 = 1000
    console.log(v1);
}
fn1()
console.log(v2)

//Contextualizando o this
const obj = {
        p1: 10,
        getP1: function() {
            const that = this
            const fn1 = function() {
                return that.p1
            }
            return fn1()
        }
    }
    //Aplicando a arrow function
const obj = {
    p1: 10,
    getP1: function() {

        const fn1 = () => {
            return this.p1
        }
        return fn1()
    }
}