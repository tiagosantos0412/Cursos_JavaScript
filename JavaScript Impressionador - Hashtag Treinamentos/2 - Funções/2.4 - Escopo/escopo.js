const primeiraVariavel = 'texto inicial';

function imprimirNoConsole(){
    const primeiraVariavel = 'segundo texto';
    function segundaFuncao(){
        const primeiraVariavel = 'terceiro texto';
        console.log(primeiraVariavel);
    }
    console.log(primeiraVariavel);
    segundaFuncao();
}

imprimirNoConsole();