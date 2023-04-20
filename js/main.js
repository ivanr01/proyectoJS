console.log('Primera preentrega');

// Simulador inversion

let tiempo = parseInt(prompt('Ingrese el plazo de su inversión en días'));
let inversionInicial = parseInt(prompt('Ingrese el monto a invertir en COP'));

let tasaInteres = 0;

if (tiempo<60) {
    tasaInteres=0.07/365
} else if (tiempo>=60 && tiempo<180) {
    tasaInteres=0.09/365
} else if (tiempo>=180) {
    tasaInteres=0.12/365
} else {
    while (tiempo<0) {
        alert('El plazo ingresado es invalido, por favor ingrese valores numericos')
        tiempo = parseInt(prompt('Ingrese el plazo de su inversión en días'));
    }
}

function intereses(tiempo, inversionInicial, tasaInteres) {
    return Math.floor(tiempo*inversionInicial*tasaInteres);
}

alert(`Gracias por la información, con su inversión inicial de $${inversionInicial} obtendrá unos intereses por $${intereses(tiempo, inversionInicial, tasaInteres)} y el monto que sera consignado en su cuenta será por un valor de $${inversionInicial+intereses(tiempo, inversionInicial, tasaInteres)}`)