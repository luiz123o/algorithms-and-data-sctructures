/**
 * this
 * faz referência ao objeto responsavel pela sua invocação
 */

const retangle = {
    x: 10,
    y: 2,
    calculateArea() {
        return this.x * this.y
    }
}