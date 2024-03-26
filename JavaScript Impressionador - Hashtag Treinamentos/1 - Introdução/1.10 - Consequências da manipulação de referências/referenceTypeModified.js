const cartao1 = {
    nome: 'Tiago Felipe dos Santos',
    saldo: 50000,
};

const cartao2 = cartao1;
console.log(cartao1);
console.log(cartao2);

cartao2.saldo -= 3250;

console.log(cartao1);
console.log(cartao2);

const listaAlunos = ['Daniel', 'Lira', 'Daniel'];
listaAlunos[3] = 'Renan';
console.log(listaAlunos);
