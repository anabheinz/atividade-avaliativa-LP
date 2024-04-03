
// Crie um programa que converta unidades de temperatura. O usuário deve inserir um número seguido por dois caracteres: o primeiro representando a unidade da temperatura original (C para Celsius, F para Fahrenheit, K para Kelvin) e o segundo a unidade para a qual a temperatura deve ser convertida. 

const prompt = require('prompt-sync')();

let temperatura = Number(prompt("Qual a temperatura? (Somente número):  " ));
let unidadeOriginal = prompt("Qual a unidade original da temperatura? ('C para Celsius, F para Fahrenheit, K para Kelvin'):  ");
let unidadeACoverter = prompt("Para qual unidade desja converter a temperatura? ('C para Celsius, F para Fahrenheit, K para Kelvin'):  ");
let temperaturaConvertida;

if ((unidadeOriginal == 'C' || unidadeOriginal == 'c') && (unidadeACoverter =='F' || unidadeACoverter == 'f')){
    temperaturaConvertida = (1.8 * temperatura) + 32;
    console.log(temperatura + '°C corresponde a ' + temperaturaConvertida + '°F');
} else if ((unidadeOriginal == 'C' || unidadeOriginal == 'c') && (unidadeACoverter == 'K' || unidadeACoverter == 'k')){
    temperaturaConvertida = temperatura + 273;
    console.log(temperatura + '°C corresponde a ' + temperaturaConvertida + 'K');
}  else if ((unidadeOriginal == 'F' || unidadeOriginal == 'f') && (unidadeACoverter == 'C' || unidadeACoverter == 'c')){
    temperaturaConvertida = (temperatura - 32) / 1.8;
    console.log(temperatura + '°F corresponde a ' + temperaturaConvertida + 'ºC');
} else if ((unidadeOriginal == 'F' || unidadeOriginal == 'f') && (unidadeACoverter == 'K' || unidadeACoverter == 'k')){
    temperaturaConvertida = ((temperatura - 32) * (5/9) + 273);
    console.log(temperatura + '°F corresponde a ' + temperaturaConvertida + 'K');    
} else if ((unidadeOriginal == 'K' || unidadeOriginal == 'k') && (unidadeACoverter == 'C' || unidadeACoverter == 'c')){
    temperaturaConvertida = temperatura - 273;
    console.log(temperatura + 'K corresponde a ' + temperaturaConvertida + 'ºC');    
} else if ((unidadeOriginal == 'K' || unidadeOriginal == 'k') && (unidadeACoverter == 'F' || unidadeACoverter == 'f')){
    temperaturaConvertida = ((temperatura - 273) * 1.8 + 32);
    console.log(temperatura + 'K corresponde a ' + temperaturaConvertida + 'ºF');
} else {
    console.log('Operação Inválida.');
};
