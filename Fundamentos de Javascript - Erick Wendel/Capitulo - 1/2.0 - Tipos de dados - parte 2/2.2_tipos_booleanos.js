/**
 * Valores Falsos:
 * false
 * 0
 * []
 * ""
 * ''
 * null
 * undefined
 * NaN
 */

/**
 * Valores Verdadeiros
 * true
 * 1
 * -1
 * 0.5
 * "0"
 */
const idade = 37
const sexo = 'm'
const podeDirigir = idade >= 18 ? true : false 

if(podeDirigir) {
    if(sexo === 'm' || sexo === 'M'){
        console.log('Ele pode dirigir.')
    }
    else if(sexo === 'f' || sexo === 'F'){
        console.log('Ela pode dirigir.')
    }
} 
else {
    console.log('Não pode dirigir.')
}

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('Não possui saldo em conta!')
}
else {
    console.log('Possui saldo em conta!')
}

const boolComString = 'ae hackerzão!!'

//força o valor a true ou false
//de acordo com a tabela
console.log('boolComString', !!boolComString)

//negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log(
    'negação + forçar bool',
    ! (!!boolComString)
)