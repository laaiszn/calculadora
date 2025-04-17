var teclado = require("prompt-sync")();
var operacoes = (teclado("Qual opera\u00E7\u00E3o voc\u00EA quer calcular?"));
if (operacoes == "+") {
    var numero1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var numero2 = parseInt(teclado("Digite o outro n\u00FAmero: "));
    var mais = numero1 + numero2;
    console.log("O resultado \u00E9 ".concat(mais));
}
else if (operacoes == "-") {
    var numero1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var numero2 = parseInt(teclado("Digite o outro n\u00FAmero: "));
    var menos = numero1 - numero2;
    console.log("O resultado \u00E9 ".concat(menos));
}
else if (operacoes == "*") {
    var numero1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var numero2 = parseInt(teclado("Digite o outro n\u00FAmero: "));
    var mult = numero1 * numero2;
    console.log("O resultado \u00E9 ".concat(mult));
}
else if (operacoes == "/") {
    var numero1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var numero2 = parseInt(teclado("Digite o outro n\u00FAmero: "));
    var div = numero1 / numero2;
    console.log("O resultado \u00E9 ".concat(div));
}
else
    (console.log("Erro na resposta"));
