let num1 = parseInt(prompt('Introduce el primer número'))
let num2 = parseInt(prompt('Introduce el segundo número'))

function sumar(num1,num2){
    console.log("La suma es: " + (Number (num1) + Number (num2)))
    return (Number (num1) + Number (num2));
}

function restar(num1,num2){
    console.log("La resta es: " + (Number (num1) - Number (num2)))
    return (Number (num1) - Number (num2));
}

function multiplicar(num1,num2){
    console.log("La multiplicación es: " + (Number (num1) + Number (num2)))

    return (Number (num1) * Number (num2));
}

function dividir(num1,num2){
    console.log("La división es: " + (Number (num1) / Number (num2)))

    return (Number (num1) / Number (num2));
}


alert("Suma: " + sumar(num1,num2) + " Resta: " + restar(num1,num2) + " Multiplicación: " + multiplicar(num1,num2) + " División: " + dividir(num1,num2))
