
// Escreva um programa que receba um número inteiro de 1 a 7 do usuário e imprima o dia da semana correspondente, onde 1 é Domingo, 2 é Segunda-feira, e assim por diante. Se o número não estiver entre 1 e 7, o programa deve imprimir "Número inválido"

const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número de 1 a 7: '));


switch (numero) {
    case 1:
        console.log("O dia da semana correspondente é Domingo.");
        break;
    case 2:
        console.log("O dia da semana correspondente é Segunda-feira.");
        break;
    case 3:
        console.log("O dia da semana correspondente é Terça-feira.");
        break;
    case 4:
        console.log("O dia da semana correspondente é Quarta-feira.");
        break;
    case 5:
        console.log("O dia da semana correspondente é Quinta-feira.");
        break;
    case 6:
        console.log("O dia da semana correspondente é Sexta-feira.");
        break;
    case 7:
        console.log("O dia da semana correspondente é Sábado.");
        break;
    default:
        console.log('Número inválido');

};