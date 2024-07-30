//  escolher a bebida aqui

let bebida = "café"; 

let valor;



switch (bebida) {

    case "café":

        valor = 2.00;

        console.log(`Você escolheu café. Valor a ser pago: R$ ${valor.toFixed(2)}`);

        break;

    case "leite":

        valor = 4.00;

        console.log(`Você escolheu leite. Valor a ser pago: R$ ${valor.toFixed(2)}`);

        break;

    case "chá":

        valor = 3.50;

        console.log(`Você escolheu chá. Valor a ser pago: R$ ${valor.toFixed(2)}`);

        break;

    default:

        console.log("Opção inválida. Escolha entre café, leite ou chá.");

}



