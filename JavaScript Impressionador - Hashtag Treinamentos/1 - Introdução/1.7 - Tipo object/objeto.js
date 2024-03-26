const documentoIdentidade = {
    nome: 'Tiago',
    sobrenome: 'Felipe dos Santos',
    rg: '12587456x',
    cpf: '32554821587',
    empresa: 'Unihosp Saúde',
    dataDeNascimento: '04/12/1986',
    idade: 37,
}

console.log(documentoIdentidade);

//Recuperando o nome completo e idade
saudacao = `Bem vindo ${documentoIdentidade.nome} ${documentoIdentidade.sobrenome}.`;

console.log(saudacao);