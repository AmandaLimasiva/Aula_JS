//Arrays

const marcaCarro = ["Ford", "Hyundai", "Fiat", "BMW", "Etios"];

console.log(marcaCarro[0]);

console.log(marcaCarro.length)//Conta os elementos do Array

//PUSH - Adiciona elemento no final do Array

marcaCarro.push("Porsche")

console.log(marcaCarro.length)

// Remover um elemento
console.log(marcaCarro.pop)


console.log(marcaCarro);
console.log(marcaCarro.sort());

marcaCarro.push("LisCar")
console.log(marcaCarro.length)

//Splice - Altera o conteudo de uma lista, adicionando novos elementos
const massas = ['Lasanha', 'Pizza', 'Macarronada']
massas.splice(1,0,'Nonque')

massas.splice(2,2,'Carbonara')


console.log(massas)