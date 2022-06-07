const aluna = {nome: "Amanda", cargo: "aluna", empresa:"Minas Programam", signo:"Peixes"};

const professora = {nome: "Liz", cargo: "Professora", empresa:"Minas Programam", signo:"Leão"};

const disciplinaLP = ["L1", "L2", "L3"];

console.log(`A aluna ${aluna.nome} tem aula com a professora ${professora.nome} no curso ${professora.empresa}!`)


//Laços de Repetição 

// **************** FOR

for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 1001; i >= 0; i--){
    console.log(i)
}

//FOR e ARRAY

const notas = [5.1, 0.1, 6.2, 0.6,7.4,10];

console.log(notas)

for(let i = 0; notas.length <= i; i++){
    console.log(i)
}

for(let i = 0; notas.length < i; i++){
    console.log(notas[i])
}

//FOR OF - -Para cada nota dentro do array notas 

for(const nota of notas){
    console.log(notas)
}