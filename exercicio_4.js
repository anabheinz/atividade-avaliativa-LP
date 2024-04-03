
// Crie um programa que leia uma string que representa uma operação matemática ('+', '-', '*', '/') e dois números inteiros. O programa deve realizar a operação indicada pelo caractere nos dois números fornecidos e imprimir o resultado. Se o caractere não for um dos símbolos das operações matemáticas citadas, exiba para o usuário "Operação inválida".

const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Primeiro número: "));
let numero2 = Number(prompt("Segundo número: "));
let operacao = prompt("Qual a operação desejada? ('+', '-', '*', '/') ");
let resultado;

if (operacao == '+'){
    resultado = numero1 + numero2;
    console.log('Resultado: ' + resultado);
} else if (operacao == '-'){
    resultado = numero1 - numero2;
    console.log('Resultado: ' + resultado);
} else if (operacao == '*'){
    resultado = numero1 * numero2;
    console.log('Resultado: ' + resultado);
} else if (operacao == '/'){
    resultado = numero1 / numero2;
    console.log('Resultado: ' + resultado);
} else {
    console.log('Operação Inválida.');
};




