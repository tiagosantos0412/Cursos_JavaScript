let musica = {
    nome: 'Let it Be',
    artista: 'Beatles',
    album: 'Let it Be'
}

musica.ano = 1969;
let listaDeBandas = ['Beatles', 'Rolling Stones', 'Led Zeppelin', 'Iron Maiden', 'Black Sabbath']

console.log(musica);

// for(let i = 0; i < listaDeBandas.length; i ++){
//     console.log(listaDeBandas[i]);
// }

let banda = 'Deep Purple';

let indice = listaDeBandas.indexOf('Rolling Stones');

if(indice !== -1){
    listaDeBandas[indice] = banda;
}else {
    console.log('Bnada Não encontrada.')
}

for(let i = 0; i < listaDeBandas.length; i ++){
    console.log(listaDeBandas[i])
}
