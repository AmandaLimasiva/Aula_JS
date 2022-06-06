//FLOAT = 1.72
//Double

//Texto = String "Amanda"

//num inteiro = integer 27

//credito? - true ou false 

/*

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


//aula - Lógica de Programação

let estadoDeNasc = prompt('Qual estado você nasceu? :/ ');

if (estadoDeNasc === 'Pernambuco'){
    console.log('És Pernambucano')
}else{
    console.log('Não és... :(')
}

//Desafio 01

let numero = parseFloat(Number(prompt('Informe um número: ')));

if (numero <= 10){
    console.log('Número é menor que 10');
}else if (numero === 10){ 
    console.log('Número é menor que 10');
}else{
    console.log('O número é maior que 10');
}
*/

//Desafio 02

let numUm = parseFloat(Number(prompt('Informe um número: ')));
let numDois = parseFloat(Number(prompt('Informe um número: ')));
let soma = numUm + numDois;

if(soma > 100){
    console.log('Número é MAIOR!! ');
}else if(soma == 100){
    console.log('BINGO, deu 100');
}else{
    console.log('Número é menor que 100');
}


//Switch

const idade = 5;

switch(idade){
    case 5:
        console.log("Você é infantil A");
        break;
    case 8: 
        console.log("você infantil B")
        break;
    case 12: 
        console.log("você infanjuvenil A");
        break; //PARA
    case 14:
        console.log("você infanjuvenil B");
        break;
    default:
        console.log("Você não pode competir")
}