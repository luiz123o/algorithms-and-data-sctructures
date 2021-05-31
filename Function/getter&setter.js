/**
 * getter e setter
 * server para interceptar o acesso as propriedades de determinado objeto
 */
//GETTER
const retangle = {
        x: 10,
        y: 5,
        get area() {
            return this.x * this.y
        }

    }
    // Toda vez que a função are for consultada o get irá chamar a função

console.log(retangle.calculateArea())

//SETTER
const retangle = {
    set x(x) {
        if (x > 0) {
            this._x = x
        } else {
            console.log("Invalid value for x")
        }
    },
    set y(y) {
        if (y > 0) {
            this._y = y
        } else {
            console.log("Invalid value for y")
        }
    },
    get area() {
        return this._x * this._y
    }

}
retangle.x = 10
retangle.y = 2
    // Toda vez que a função are for consultada o get irá chamar a função

console.log(retangle.calculateArea())

//Utilizando o defineProperty
const retangle = {}
Object.defineProperty(retangle, "x", {
    set(x) {
        if (x > 0) {
            this._x = x
        } else {
            console.log("Invalid value for x")
        }
    }
})
Object.defineProperty(retangle, "y", {
    set(y) {
        if (y > 0) {
            this._y = y
        } else {
            console.log("Invalid value for y")
        }
    }
})
Object.defineProperty(retangle, "area", {
    get() {
        return this._x * this._y
    }
})
retangle.x = 10
retangle.y = 2