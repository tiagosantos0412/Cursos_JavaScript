//Listas

const minhaLista = []
const minhasTarefas = [
    'mandar e-mail',
    'alimentar o cachorro',
    'limpar o quarto'
]

// console.log(minhasTarefas[0])
// console.log(minhasTarefas[1])
// console.log(minhasTarefas[4])

//quantidade de itens no array
console.log('\nTamanho da lista ',minhasTarefas.length)

//adicionar um item no fim da lista
minhasTarefas.push('formatar o computador')

console.log('\nLista completa ',minhasTarefas)

//remover o ultimo item da lista
const ultimo = minhasTarefas.pop()
//console.log(ultimo, minhasTarefas)

//remover o primeiro item da lista
const primeiro = minhasTarefas.shift()
//console.log(ultimo, primeiro, minhasTarefas)

//remover um item especifico a partir de um índice
//console.log(minhasTarefas[1])

// remover qual item de início?
//quantos remover?
const especifico = minhasTarefas.splice(1, 1)
console.log(
    '\nLista editada ',
    '\nprimeiro item removido: ', primeiro,
    '\nitem específico removido: ', especifico,
    '\núltimo item removido: ', ultimo,
    '\no que sobrou da lista: ', minhasTarefas
)


const itens = [10, 'notebook', 0.25]

//verificar o ipo do array
//console.log(typeof(itens))
console.log('\nÉ um array? ', Array.isArray(itens))

//Ordenar uma lista
const numeros = [3, 2, 8, 5, 0, 6, 7, 4, 1]
console.log('\nOrdenando a lista: ', numeros.sort())

//juntar dois arrays
console.log(itens.concat(numeros))

//imprimir um array conforme a necessidade
console.log('\n', itens.join(' - '))
console.log('\n ou: ', itens.join(' / '))

//descobrir o indice de um item no array
let index = itens.indexOf('notebook')
console.log('\nO Item notebook está no indice: ', index)

//quando m item não é encontrado ele retorna -1
index = itens.indexOf('computador')
console.log('\nO Item notebook está no indice: ', index)

//retornar um item a partir de um índice descoberto
index = itens.indexOf(0.25)
console.log('\n', itens[index])
