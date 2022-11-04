let HousePrice = prompt("Introduce el valor de la casa");
let MoneyBank = prompt("Introduce el dinero pedido al banco");
let years = prompt("Introduce los años a pagar");
let percent = prompt("Introduce el interes aplicado por el banco");
let cuota; 
let interes;
let variableTotal;

function tablaAmortizacion(HousePrice,MoneyBank,years,percent){
    years = years*12;
    cuota = HousePrice/years;
    interes = MoneyBank + (MoneyBank*percent);
    variableTotal = HousePrice + interes;

    for (let i = 1; i < years; i++) {
         console.log("Pago correspondiente al mes "+ i + "con una cantidad de " + HousePrice); 
         variableTotal = variableTotal - cuota;
    }
}

tablaAmortizacion(HousePrice,MoneyBank,years,percent);