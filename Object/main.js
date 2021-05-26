// diferenças nas formas de criação de objetos 
/**
 * Atribuição Literal
 * Um das diversas maneiras de atribuir propriedades a um objeto é durante a sua inicialização, pela notação literal
 */

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
//Obs.: Dependendo da chave é necessario declara-la diretamente como String
// as chaves de propriedades...
/**
 * Atribuição Literal -- shorthand notation
 */

const title = "Clean Code"
const author = "Robert C. Martin"
const pages = 464
const language = "English"
const available = true

const book_ShortHandNotation = {
    title,
    author,
    pages,
    language,
    available
}

/**
 * Atribuição Literal
 * Chaves dinamicas
 */
const key1 = "title"
const key2 = "author"
const key3 = "pages"
const key4 = "language"
const key5 = 'available'


const book = {
    [key1]: "Clean Code",
    [key2]: "Robert C. Martin",
    [key3]: 464,
    [key4]: "English",
    [key5]: true
};

/**
 * Atribuição por referencia
 * 
 */
const key1 = "title"
const key2 = "author"
const key3 = "pages"
const key4 = "language"
const key5 = 'available'

const book = {}
book[key1] = "Clean Code"
book[key2] = "Robert C. Martin"
book[key3] = "pages"
book[key4] = "language"
book[key5] = 'available'
    //Utilizando o for in
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
for (let key in book) {
    console.log(book[key])
}
// outro exemplo

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
const book2 = {}

for (let key in book) {
    book2[key] = book[key]
}