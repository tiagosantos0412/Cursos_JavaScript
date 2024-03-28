/**
 * 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
cálculo).

 */
nomeDoAluno = 'Tiago Felipe';
notas = [8, 5, 9];
materias = ['Português', 'Matemática', 'História'];

function mediaEscolar(notas=[]){
    let notasAcumuladas = 0;
    for(let i = 0; i< notas.length; i++){
        notasAcumuladas += notas[i]
    }
    media = notasAcumuladas / notas.length;
   
    return media;
}

function exibirAsNotas(notas=[], materias=[]){
    for(let i = 0; i < materias.length; i++){
        console.log(materias[i], notas[i])
    }
}

let resultado = mediaEscolar(notas);


console.log('Resultado do exercício 01');
exibirAsNotas(notas, materias);
console.log(`A média do aluno ${nomeDoAluno} é: ${resultado.toFixed(1)}.`);

/**
 * 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
média_final = (média_antes_da_pf + pf)/2
Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
necessário.
Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
resultado do cálculo).
 */

const provaFinal = 8;
function mediaRecuperacao(resultado, provaFinal){
    const mediaFinal = (resultado + provaFinal) / 2;
    return mediaFinal;
}
resultado = mediaRecuperacao(resultado, provaFinal); 

console.log('\nResultado do exercício 02');
console.log(
    `A média final do aluno ${nomeDoAluno} é: ${resultado.toFixed(1)}`
);

/**
 * 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
tela o texto:
a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32
 */

const grausCelsius = 26;

function conversaoDeTemperatura(grausCelsius){
    const farenheit = (9/5) * grausCelsius + 32;
    return farenheit;
}

const temperatura = conversaoDeTemperatura(grausCelsius);
console.log('\nResultado do exercício 03');
console.log(`A temperatura correspondente a ${grausCelsius}º Celsius em Farenheit é ${temperatura.toFixed(1)}º`);

/**
 * 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
etiqueta e registre na tela a frase:
O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).
 */

const valorToatal = 125;

function calcularImposto(valorToatal){
    const imposto = (valorToatal * 8.875) / 100;
    return imposto.toFixed(2);
}

const valorImposto = calcularImposto(valorToatal);
const valorInicial = valorToatal - valorImposto;
console.log(`O valor a ser pago é R$ ${valorToatal} sendo R$${valorImposto} acréscimo dos impostos sobre o valor inicial de R$ ${valorInicial}`);