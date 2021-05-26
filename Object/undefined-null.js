// undefined é retornado caso a chave não seja encontrada
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book.publisher) // retorna undefined pois não existe

// O undefined não existe o NULL não tem valor
//podemos utilizar o operador in

console.log("title" in book) // retorna true

console.log("publisher" in book) // retornar false

// apagando as propriedades de um objeto através do operador delete

delete book.available