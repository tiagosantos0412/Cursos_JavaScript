let x = 2;
let y = 10;
z = 'string de teste.';

console.log(`01 -> x > y: ${x > y}`); //maior q
console.log(`02 -> x >= y: ${x >= y}`); //maior ou igual
console.log(`03 -> x < y: ${x < y}`); //menor que
console.log(`04 -> x <= y: ${x <= y}`); //menor ou igual
console.log(`05 -> x === y: ${x === y}`); //igualdade
console.log(`06 -> y === 10: ${y === 10}`); // comparação forte
console.log(`07 -> y == '10': ${y == '10'}`); // comparação frágil, não compara a igualdade dos tipos
console.log(`07 -> z !== 'outro texo qualquer.': ${z !== 'outro texo qualquer.'}`); //diferença
console.log(`08 -> z === 'string de teste.': ${z === 'string de teste.'}`);
console.log(`09 -> z === 'outro texo qualquer.': ${z === 'outro texo qualquer.'}`);