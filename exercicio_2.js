
// Escreva um programa que receba um número inteiro de 1 a 5 representando a nota de um estudante. O programa deve imprimir "Excelente" para 5, "Bom" para 4, "Médio" para 3, "Ruim" para 2 e "Péssimo" para 1. Se o número fornecido não estiver nesse intervalo, deve imprimir "Nota inválida".

const prompt = require('prompt-sync')();

let nota = Number(prompt('Qual a sua nota? '));

if (nota == 5){
    console.log('Excelente');
} else if (nota == 4) {
    console.log('Bom'); 
} else if (nota == 3) {
    console.log('Médio');
} else if (nota == 2){
    console.log('Ruim');
} else if (nota == 1){
    console.log('Péssimo');
} else {
    console.log('Nota inválida');
};

