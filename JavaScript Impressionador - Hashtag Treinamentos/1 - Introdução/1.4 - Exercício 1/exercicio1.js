/**
 * 1 - Escreva um programa executando os seguintes passos:
-Crie uma variável com o valor inicial igual a 2148. Esse valor não deve ser
alterado.
-Crie uma segunda variável, dessa vez sem um valor inicial.
-Imprima na tela a seguinte mensagem: "O valor da primeira variável é $valor",
substituindo o termo iniciado em $ pelo valor abrigado na sua variável.
-Atribua um valor numérico à segunda variável.
-Imprima na tela os textos "Minha segunda variável vale $valor" e "o valor da soma
das minhas duas variáveis é $valor", substituindo o termo $valor pelos valores
correspondentes.
-Eleve a sua segunda variável ao quadrado e imprima esse resultado na tela. Após
isso, divida esse resultado por 3 e coloque-o na tela novamente.
 */

const primeiroNumero = 2148;
let segundoNumero;
console.log(`O valor da primeira variável é ${primeiroNumero}`);
segundoNumero = 120;
console.log(`Minha segunda variável vale ${segundoNumero}`);
const soma = primeiroNumero + segundoNumero;
console.log(`E o valor da soma das minhas variáveis é ${soma}`);
segundoNumero = segundoNumero ** 2;
console.log(`O  do segundo número ao quadrado é ${segundoNumero}`);
const resultadoDivisao = segundoNumero / 3;
console.log(`o valor do segundo número divido por 3 é ${resultadoDivisao}`);

/**
 * 2 - Crie duas variáveis booleanas de valores iniciais distintos. Imprima na tela o resultado das
operações AND e OR entre elas. Depois disso, crie uma terceira variável booleana, com o valor
de sua escolha. Imprima na tela o resultado das operações AND e OR para as três variáveis
disponíveis.
 */

