
// Desenvolva um programa que simula uma classificação de produtos de uma loja. O usuário insere um caractere que representa uma categoria de produto ('A' para Alimentos, 'B' para Bebidas, 'C' para Cosméticos) e o programa deve imprimir a categoria completa. Se o caractere não corresponder a uma categoria conhecida, imprimir "Categoria não encontrada".

const prompt = require('prompt-sync')();

let categoriaProduto = prompt('Qual a categoria do produto? (A, B ou C): ')

switch (categoriaProduto){
    case 'A':
    case 'a':
        console.log('Categoria Alimentos');
        break;
    case 'B':
    case 'b':
        console.log('Categoria Bebidas');
        break;
    case 'C':
    case 'c':
        console.log('Categoria Cosméticos');
        break;
    default:
        console.log('Categoria não encontrada');
};