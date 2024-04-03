
// Desenvolva um jogo simples onde o programa escolhe um número aleatório entre 1 e 5 e o usuário tenta adivinhar qual é esse número. Após a tentativa, o programa deve dizer se o usuário acertou ou errou. Se errar, o programa deve informar se o palpite é maior ou menor que o número escolhido.

// Considere a seguinte declaração em seu código para gerar um número aleatório entre 1 e 5: **`let random = Math.floor(Math.random() * 5) + 1;`**

let randomNumber = Math.floor(Math.random() * 5) + 1; 
console.log(randomNumber)

const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número de 0 a 5: '));


if (numero == randomNumber){
        console.log('Parabéns! Você acertou!')
} else if (numero > randomNumber){
    console.log('Seu palpite é maior que o número aleatório');
} else if (numero < randomNumber){
    console.log('Seu palpite é menor que o número aleatório');
}
