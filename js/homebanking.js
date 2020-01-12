//Declaración de variables
var nombreUsuario = "Paula Gigena";
var saldoCuenta = 10000;
var limiteExtraccion = 8000;
var dineroAdepositar;
var dineroAextraer;
var valorAgua = 350;
var valorTelefono = 425;
var valorLuz = 210;
var valorInternet = 570;
var pagoServicio;
var name = " ";
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 1234;
var cbu = 987654;

//funciones creadas
function incrementarSaldo(montoSuma) {
    return saldoCuenta += montoSuma;

}

function restarSaldo(montoResta) {
    return saldoCuenta -= montoResta;

}
function billetesCien(monto) {
    resultadoBilletesCien = monto % 100 == 0;
    return resultadoBilletesCien;
}


function limitarExtraccionDinero() {
    if (dineroAextraer > saldoCuenta) {
        alert("Usted no cuenta con saldo disponible para la cantidad de dinero ingresada");
    } else if (dineroAextraer > limiteExtraccion) {
        alert("El monto ingresado supera el límite de extracción disponible");
    } else if (billetesCien(dineroAextraer) == false) {
        alert("Sólo puedes extraer billetes de 100")
    }
}

function pagarCuentas(id) {

    switch (id) {
        case 1:
            pagoServicio = valorAgua;
            break;
        case 2:
            pagoServicio = valorLuz;
            break;
        case 3:
            pagoServicio = valorInternet;
            break;
        case 4:
            pagoServicio = valorTelefono;
            break;
        default:
            alert("No existe el servicio que se ha seleccionado");
    }
    return pagoServicio
}

function nombreServicio(id) {

    switch (id) {
        case 1:
            name = "Agua";
            break;
        case 2:
            name = "Luz";
            break;
        case 3:
            name = "Internet";
            break;
        case 4:
            name = "Teléfono";
            break;
        default:
            alert("No existe el servicio que se ha seleccionado");
    }
    return name
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}



function cambiarLimiteDeExtraccion() {
    var nvoLimiteExtraccion = parseInt(prompt("Ingrese su nuevo límite de extracción: "));
    if (isNaN(nvoLimiteExtraccion)) {
        return;
    }
    limiteExtraccion = nvoLimiteExtraccion;
    actualizarLimiteEnPantalla();
    alert("Felicidades! Su límite de extracción fue modificado con éxito! Su nuevo límite de extracción es: $" + nvoLimiteExtraccion);
}


function extraerDinero() {
    dineroAextraer = parseInt(prompt("Ingrese la cantidad de dinero que desea extraer: "));
    if (isNaN(dineroAextraer)) {
        return;
    }
    var saldoAnteriorextraccion = saldoCuenta;
    if (dineroAextraer > saldoCuenta) {
        alert("Usted no cuenta con saldo disponible para la cantidad de dinero ingresada");
    } else if (dineroAextraer > limiteExtraccion) {
        alert("El monto ingresado supera el límite de extracción disponible");
    } else if (billetesCien(dineroAextraer) == false) {
        alert("Sólo puedes extraer billetes de 100");
    } else {
        restarSaldo(dineroAextraer);
        actualizarSaldoEnPantalla();
        alert("Usted ha retirado: $" + dineroAextraer + "\n" + "Su saldo anterior era: $" + saldoAnteriorextraccion + "\n" + "Su saldo actual es: $" + saldoCuenta);
    }
}


function depositarDinero() {
    dineroAdepositar = parseInt(prompt("Ingrese la cantidad de dinero que desea depositar: "));
    if (isNaN(dineroAdepositar)) {
        return;
    }
    var saldoAnterior = saldoCuenta;
    incrementarSaldo(dineroAdepositar);
    actualizarSaldoEnPantalla();
    alert("Usted ha depositado: $" + dineroAdepositar + "\n" + "Su saldo anterior era: $" + saldoAnterior + "\n" + "Su saldo actual es: $" + saldoCuenta);
}

function pagarServicio() {
    var servicioApagar = parseInt(prompt("Ingrese el número que corresponda con el servicio que desea pagar: \n 1- Agua \n 2- Luz \n 3- Internet \n 4- Teléfono"));
    if (isNaN(servicioApagar)) {
        return;
    }
    pagarCuentas(servicioApagar);
    if (pagoServicio <= saldoCuenta) {
        var saldoAnterior = saldoCuenta;
        restarSaldo(pagoServicio);
        nombreServicio(servicioApagar);
        actualizarSaldoEnPantalla();
        alert("Usted ha pagado el servicio de: " + name + "\n" + "Su saldo anterior era: $ " + saldoAnterior + "\n" + "Se le ha descontado: $" + pagoServicio + "\n" + "Su saldo actual es de : $" + saldoCuenta);
    } else {
        alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
    }
}

function transferirDinero() {
    var dineroAtransferir = parseInt(prompt("Ingrese la cantidad de dinero que desea transferir:"));
    if (isNaN(dineroAtransferir)) {
        return;
    }
    if (dineroAtransferir <= saldoCuenta) {
        var nroCuentaAmiga = parseInt(prompt("Ingrese el número de cuenta a la que desea transferir dinero:"));
        if (nroCuentaAmiga == cuentaAmiga1 || nroCuentaAmiga == cuentaAmiga2) {
            restarSaldo(dineroAtransferir);
            actualizarSaldoEnPantalla();
            alert("Se han transferido: $" + dineroAtransferir + "\n" + "Cuenta de destino: " + nroCuentaAmiga);
        } else {
            alert("Sólo puede realizar una transferencia a una cuenta amiga");
        }
    } else {
        alert("Usted no dispone de la cantidad de dinero ingresada para realizar la transferencia");
    }
}

function iniciarSesion() {

    inicioSesion = parseInt(prompt("Ingrese su código de seguridad: "));
    if (inicioSesion == codigoSeguridad) {
        cargarNombreEnPantalla();
        alert("Bienvenida/o " + nombreUsuario + " usted puede comenzar a realizar operaciones en su cuenta");
    } else {
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        alert("Código incorrecto. Su dinero ha sido retenido por cuestiones de seguridad");
    }
}

function obtenerCbu() {
    alert("Su número de CBU es: \n" + cbu);

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}