
let teclado = require(`prompt-sync`)();

let operacoes: string =(teclado(`Qual operação você quer calcular?`));

if (operacoes == `+`){
    let numero1: number =parseInt(teclado (`Digite o primeiro número: `));
    let numero2: number =parseInt(teclado (`Digite o outro número: `));
    let mais= numero1 + numero2
    console.log (`O resultado é ${mais}`);
}
else if (operacoes == `-`){
    let numero1: number =parseInt(teclado (`Digite o primeiro número: `));
    let numero2: number =parseInt(teclado (`Digite o outro número: ` ));
    let menos= numero1 - numero2
    console.log(`O resultado é ${menos}`);
}
else if (operacoes == `*`){
    let numero1: number =parseInt(teclado (`Digite o primeiro número: `));
    let numero2: number =parseInt(teclado (`Digite o outro número: ` ));
    let mult= numero1 * numero2
    console.log(`O resultado é ${mult}`);
}
else if (operacoes == `/`){
    let numero1: number =parseInt(teclado (`Digite o primeiro número: `));
    let numero2: number =parseInt(teclado (`Digite o outro número: ` ));
    let div= numero1 / numero2
    console.log(`O resultado é ${div}`);
}
else (console.log(`Erro na resposta`));