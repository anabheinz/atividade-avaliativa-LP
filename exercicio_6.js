
// Desenvolva um programa que calcule o Índice de Massa Corporal (IMC) de um indivíduo. O usuário deve inserir seu peso em quilogramas e sua altura em metros. Depois, o programa deve calcular o IMC e categorizar o resultado em: 'Abaixo do peso', 'Saudável', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II' ou 'Obesidade Grau III'.

const prompt = require('prompt-sync')();

let peso = Number(prompt('Qual o seu peso em kg?: '));
let altura = Number(prompt('Qual a sua altura em cm?: '));
altura = altura/100;

const imc = (peso/(altura**2));
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc < 25){
    console.log('Saudável');
} else if (imc < 30) {
    console.log('Sobrepeso');
} else if (imc < 35){
    console.log('Obesidade Grau I');
} else if (imc <40){
    console.log('Obesidade Grau II');
} else {
    console.log('Obesidade Grau III');
};
