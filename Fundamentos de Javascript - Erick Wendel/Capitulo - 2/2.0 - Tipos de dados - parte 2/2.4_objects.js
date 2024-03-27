const heroi = {
    nome: 'Batman',
    idade: 45,
    sexo: 'Masculino'
}

console.log('nome: ', heroi.nome)
console.log('idade: ', heroi['idade'])
console.log('sexo: ', heroi.sexo)
console.log('naoExiste: ', heroi.naoExiste)

heroi.id = 1

console.log(heroi)

//imprimindo as keys de um objeto
console.log('\nChaves: ', Object.keys(heroi))

//imprimindo os valores de um objeto
console.log('\nValores: ', Object.values(heroi))

const raca = {
    raca: 'humano',
    altura: 1.90,
    peso: 75,
    nacionalidade: 'americano'
}

//juntando objetos
const novoObj = Object.assign(heroi, raca)
console.log('\nNovo objeto: ', novoObj)

//remover uma chave de um objeto
delete novoObj.nacionalidade
console.log('\nNovo objeto: ', novoObj)