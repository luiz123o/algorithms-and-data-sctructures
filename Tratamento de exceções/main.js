/**
 * No javascript qualquer tipo de dado pode ser lançado como erro interrompendo o fluxo de excessão
 * 
 */
const Retangle = function(x, y) {
    this.x = x
    this.y = y
    this.calculateArea = function() {
        if (this.x > 0 && this.y > 0) {
            return this.x * this.y
        } else {
            throw "Invalid value for x or y"
        }
    }
}

try {
    const rentangle = new Retangle(10, 2)
    console.log(rentangle.calculateArea())
} catch (error) {
    console.log(error)
}