let salario = 2900
let bonificacao = '700aaa'
let salarioCorrigido = 0

if (isNaN(bonificacao) === false){
    salarioCorrigido = Number(bonificacao) + salario
}else {
    console.log(
        `
            O valor da bonificação ${bonificacao} não é um número válido. Faça a correção antes de prosseguir.
        `
    )
}


console.log(salario + bonificacao)
console.log(
    typeof(bonificacao),
    bonificacao
)

console.log(
    typeof(salario),
    salario
)

console.log(
    typeof(salarioCorrigido),
    salarioCorrigido
)