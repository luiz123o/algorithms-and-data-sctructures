/**
 * Com o operador instanceOf é possivel verificar se um objeto foi criado por meio de uma determinada função construtora analisando a sua cadeia de protótipos
 */
const date = new Date()
console.log(date instanceof Date)

//entendendo por detrás da cortina como instance of  funciona

const _instanceof = function(obj, fn) {
    if (obj === fn.prototype) return true
    if (obj === null) return false
    return _instanceof(obj.__proto__, fn)
}

const date = new Date()

console.log(_instanceof(date, Date))