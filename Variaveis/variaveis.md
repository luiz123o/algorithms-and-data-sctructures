# Variáveis

> Uma descrição das variáveis e formas de usa-las

- Inicialização

    A variavel é iniciada com valor undefined.

- Atribuição

    Um valor é atribuido para a variavel..

- Declaração

    O nome da variavel é registrado no contexto de execução, também conhecido como escopo da função.

---

## Var

> Ao utilizar o var, a variável é declarada e inicializada no escopo da função, *não respeitando o bloco* e *permitindo a redeclararão e retribuição*.

---

```jsx
console.log(pi)
var pi = 4.141592/
console.log(pi);
```

> Caso o console fosse declarado antes da variável o valor de *var* seria *undefined*, isso porque ao passar pelo código o interpretador pegaria o var e o declararia vazio no inicio do escopo.

---

```jsx
var pi = 4.141592/
console.log(pi);
pi =3;
console.log(pi);
```

> Outra questão é que ao utilizar o *var* podemos também redefinir o seu valor.

---

```jsx
var pi = 4.141592/
console.log(pi);
pi =3;
console.log(pi);

var pi = 4;
console.log(pi)
```

> Outro problema é que o *var* nos permite declarar a mesma variável novamente!

---

*Obs.: Ela não respeitara o bloco aonde foi declarada, ficando acessível fora deste, exemplo:*

```jsx
if () {
	var pi = 4
}
console.log(pi)
```

---

## LET

> Ao utilizar o *Let* podemos redefinir o valor dentro do escopo mais não redeclarar.

---

```jsx
console.log(pi)
let pi = 4.141592/
console.log(pi);
```

> Caso o console fosse declarado antes da variável o valor de *let* retornaria um erro de não definido, isso porque existe uma separação nela da inicialização e declaração.

---

```jsx
let pi = 4.141592/
console.log(pi);
pi =3;
console.log(pi);
```

> Outra questão é que ao utilizar o *let* podemos também redefinir o seu valor.

---

```jsx
let pi = 4.141592/
console.log(pi);
pi =3;
console.log(pi);

let pi = 4;
console.log(pi)
```

> O *let* nos proíbe a redeclararão, retornando o erro de variável já declarada.

*Obs.: Ela respeitara o bloco aonde foi declarada, ficando inacessível fora deste, exemplo:*

```jsx
if () {
	let pi = 4
}
console.log(pi)
```

---

## Const

> O *const* respeita o bloco aonde foi declarado assim como o *let*, é declarado também no escopo da função, mas não permite redeclararão e retribuição.

```jsx
//dead zone
console.log(pi) // retonaria um erro! que a variável não foi definida
const pi = 3.141592;
console.log(pi)

pi = 4 // retonaria um novo erro que não poderiamos reatribuir um valor a pi pois o mesmo é uma constante

if() {
	const pi = 3.141592
}
console.log(pi)//retonaria erro de variavel não declarada pois o mesmo está dentro do bloco do if
```

---

## Variáveis globais

> São variáveis declaradas sem o *const, let* ou *var,* automaticamente elas pertencem ao escopo global.