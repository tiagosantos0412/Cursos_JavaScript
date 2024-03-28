function calcularQuadrada(base){
    return base **(1/2); 
}

function resolverBaskara(a, b, c){
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularQuadrada(delta)) / (2 * a);
    const x2 = (-b - calcularQuadrada(delta)) / (2 * a);

    console.log(
        `Os dois valores de X dos pontos da parábola n eixo X são ${x1} ${x2}`
    );
}


let numero = 4;
let a = 2;
let b = 3;
let c = -2;
let valorRaizQuadrada = calcularQuadrada(numero);

resolverBaskara(a, b, c);
