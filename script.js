//FLOAT = 1.72
//Double

//Texto = String "Amanda"

//num inteiro = integer 27

//credito? - true ou false 

const nameF = 'Amanda'

const lastName = 'Lima'

const age = 22

console.log("Meu nome é  " + nameF  +  lastName + " Tenho " + age + "de idade")

//alert("Meu nome é  " + nameF  +  lastName + " Tenho " + age + "de idade")

//Interpolação
console.log(`Meu nome é ${nameF} ${lastName}, tenho ${age} de idade!`)


//Operadores aritmétricos

let num1 = Number(prompt('Informe um número: '))
let num2 = Number(prompt('Informe um número: '))


// Soma
let soma = num1 + num2
console.log(`A soma dos números ${num1} + ${num2} é igual a ${soma}`);

//Sub
let sub = num1 - num2
console.log(`A subtração dos números ${num1} + ${num2} é igual a ${sub}`);

//Multiplicação
let mult = num1 * num2
console.log(`A multiplicação dos números ${num1} + ${num2} é igual a ${mult}`);

//divisão
let div = num1 / num2
console.log(`A divisão dos números ${num1} + ${num2} é igual a ${div}`);

//modulo

let modulo =  num1 % num2
console.log(`O modulo dos números ${num1} + ${num2} é igual a ${modulo}`);
8




//Calculando a circunferencia

//const pi = 3.1415
const pi = Math.PI //MATH
let raio = parseFloat(Number(prompt('Informe um número: ')))

comprimento = 2 * pi * raio;

console.log(`O circulo tem raio ${raio} e seu comprimento é ${comprimento}`)
console.log(pi)


//DESAFIO

const frase = "Amo violino"
const frase2 = "Mas também amo piano"

let verificar = frase === frase2;

console.log(verificar)