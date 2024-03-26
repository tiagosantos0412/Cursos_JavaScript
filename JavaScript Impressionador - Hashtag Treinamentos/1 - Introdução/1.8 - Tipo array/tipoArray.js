const investimentoMensal = [1000, 2000, 3000, 2000, 1500, 1200, 2500, 2000, 1000, 3500, 2100, 1500];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
console.log(investimentoMensal)


for (let i = 0; i < investimentoMensal.length; i ++) {
    console.log(`O valor investido no mês de ${meses[i]} é R$ ${investimentoMensal[i]}`);
}