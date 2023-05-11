console.log('Segunda preentrega');

alert('Bienvenido, gracias por utilizar nuestros servicios')

class Cliente {
    constructor(nombre, apellido, identificacion, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.saldo = saldo;
    }
}

const clienteUno = new Cliente('Ivan', 'Rodriguez', '30989786', 150000000);
const clienteDos = new Cliente('Jaime', 'Villareal', '12874649', 150000);
const clienteTres = new Cliente('Pedro', 'Gonzalez', '108849484', 12000000);
const clientes = [clienteUno, clienteDos, clienteTres];
console.log(clientes)

function registroCliente() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    let identificacion = prompt('Ingrese su número de identificación');
    let saldo = parseInt(prompt('Ingrese saldo de cliente'));

    const cliente = new Cliente(nombre, apellido, identificacion, saldo);

    clientes.push(cliente);
    alert(`Gracias por registrarte, ${cliente.nombre}, contigo ya somos ${clientes.length} clientes alrededor del mundo`);
    console.log(clientes)
}

function eliminacionCliente() {
    let identificacion = prompt('Ingrese su número de identificación');
    let busqueda = clientes.find(cliente => cliente.identificacion === identificacion);
    let indice = clientes.indexOf(busqueda);
    function menuEliminar() {
        let opcionesEliminar = parseInt(prompt('Esta seguro de que desea eliminar su cuenta? \n1) Si, eliminar \n2) Deseo conservar mi cuenta'));
        return opcionesEliminar;
    };

    let opcionEliminar = menuEliminar();
    switch (opcionEliminar) {
        case 1:
            alert(`Lamentamos que te vayas, ${clientes[indice].nombre}. Tu cuenta ha sido eliminada`);
            clientes.splice(indice, 1);
            console.log(clientes)
            break;
        case 2:
            alert(`Gracias por quedarte con nosotros, ${clientes[indice].nombre}`);
            break;
        default:
            alert('Opcion incorrecta');
            break;
    }
}

function consultaCliente() {
    let identificacion = prompt('Ingrese numero de identificación');
    let busqueda = clientes.find(cliente => cliente.identificacion === identificacion);
    alert(`El número de identificación pertenece a ${busqueda.nombre} ${busqueda.apellido} y su saldo es de $${busqueda.saldo}`);
}

function simularInversion() {
    let tiempo = parseInt(prompt('Ingrese el plazo de su inversión en días'));
    let inversionInicial = parseInt(prompt('Ingrese el monto a invertir en COP'));
    let tasaInteres = 0;

    if (tiempo < 60) {
        tasaInteres = (0.07 / 365)
    } else if (tiempo >= 60 && tiempo < 180) {
        tasaInteres = (0.09 / 365)
    } else if (tiempo >= 180) {
        tasaInteres = (0.12 / 365)
    } else {
        while (tiempo < 0) {
            alert('El plazo ingresado es invalido, por favor ingrese valores numericos')
            tiempo = parseInt(prompt('Ingrese el plazo de su inversión en días'));
        }
    }

    function intereses(tiempo, inversionInicial, tasaInteres) {
        return Math.round(tiempo * inversionInicial * tasaInteres);
    }

    alert(`Gracias por la información, con su inversión inicial de $${inversionInicial} obtendrá unos intereses por $${intereses(tiempo, inversionInicial, tasaInteres)} y el monto inicial más intereses sería de $${inversionInicial + intereses(tiempo, inversionInicial, tasaInteres)}`)

    function menuInvertir() {
        let opcionesEliminar = parseInt(prompt('Esta seguro de que desea invertir \n1) Si, deseo invertir \n2) No deseo invertir por ahora'));
        return opcionesEliminar;
    };

    let opcionInvertir = menuInvertir();
    switch (opcionInvertir) {
        case 1:
            let identificacion = prompt('Ingrese numero de identificación');
            let busqueda = clientes.find(cliente => cliente.identificacion === identificacion);
            let indice = clientes.indexOf(busqueda);
            let nuevoSaldo = clientes[indice].saldo = clientes[indice].saldo + inversionInicial;
            alert(`Gracias por invertir, ahora su saldo es de $${nuevoSaldo}. Recibirá $${intereses(tiempo, inversionInicial, tasaInteres)} en ${tiempo} días por concepto de intereses y su nuevo saldo será de $${nuevoSaldo + intereses(tiempo, inversionInicial, tasaInteres)}`);
            break;
        case 2:
            alert(`No te preocupes, invierte cuando estés 100% seguro`);
            break;
        default:
            alert('Opcion incorrecta');
            break;
    }
}

function salir() {
    alert('Gracias por visitarnos!')
}

function menu() {
    let opciones = parseInt(prompt('Ingrese una opción: \n1) Registro de cliente \n2) Eliminación de cliente \n3) Consulta de cliente \n4) Simulación de inversión \n5) Salir'));
    return opciones;
};

let opcion = menu();
switch (opcion) {
    case 1:
        registroCliente();
        break;
    case 2:
        eliminacionCliente();
        break;
    case 3:
        consultaCliente();
        break;
    case 4:
        simularInversion();
        break;
    case 5:
        salir();
        break;
    default:
        alert('Opcion incorrecta');
        break;
}