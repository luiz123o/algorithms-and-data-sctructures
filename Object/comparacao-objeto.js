/**
 * Comparação de Objetos
 * A comparação dos objetos é feita por meio da sua referência, assim ainda que dois objetos tenham exatamente as mesmas propriedades eles são considerados diferentes
 */

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book == book1) // retorna falso

/**
 * A unica forma de assim compararmos é analisando cada uma das suas propriedades por meio das comparações de chaves e valores
 * 
 *  */

// método percorrendo a cada propriedade de book e comparando com book 2
let equal = true

for (let key in book) {
    if (book[key] !== book2[key]) {
        equal = false
    }

}
for (let key in book1) {
    if (book[key] !== book1[key]) { equal = false }
}
/**
 * Para garantir que um objeto pe igual ao outro é necessesario verificar seus protótipos
 */