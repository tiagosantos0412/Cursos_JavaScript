console.log('Resultado do exercício 01');
const listaNumerica = [1, 2, 3, 4, 5];
console.log(listaNumerica)

let numero = 4;
let indice = listaNumerica.indexOf(numero);
console.log('Resultado sem o for, com busca de índice');
console.log(`O valor do elemento ${indice}, da minha lista é ${listaNumerica[indice]}`);

console.log('Resultado com o for');
for(let i = 0; i < listaNumerica.length; i++){
    console.log(`O valor do elemento ${i}, da minha lista é ${listaNumerica[i]}`);
}

console.log('Resultado do exercício 02');
const pokemon = {
    nome: 'Charmander',
    hp: 380,
    ataque: 120,
    defesa: 100,
    habilidade: 'ember ',
    tipo: 'fogo',
}

console.log(`Meu objeto pokémon é um ${pokemon.nome} do tipo ${pokemon.tipo} 
possui HP = ${pokemon.hp}, ataque = ${pokemon.ataque}, defesa = ${pokemon.defesa} e sua habilidade é ${pokemon.habilidade}`);

console.log('Resultado do exercício 03');
let numero1 = 856;
let numero2 = 720;
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const divisao = numero1 / numero2;
const multiplicacao = numero1 * numero2;

const resultado = [soma, subtracao, divisao, multiplicacao];
const operacoes = ['soma', 'subtracao', 'divisao', 'multiplicacao'];

for(let i = 0; i < resultado.length; i++){
    console.log(`O resultado da operação ${operacoes[i]} entre ${numero1} e ${numero2} é = ${resultado[i]}`);
}

console.log('Resultado do exercício 04');
console.log(`${numero1} > ${numero2} ${numero1 > numero2}`);
console.log(`${numero1} >= ${numero2} ${numero1 >= numero2}`);
console.log(`${numero1} < ${numero2} ${numero1 < numero2}`);
console.log(`${numero1} <= ${numero2} ${numero1 <= numero2}`);
console.log(`${numero1} === ${numero2} ${numero1 === numero2}`);
console.log(`${numero1} !== ${numero2} ${numero1 !== numero2}`);