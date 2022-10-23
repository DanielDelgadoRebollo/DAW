//Crear un array vacío, luego generar 20 números al azar y guardarlos en un array
let arrayVacio = [];
let random = Math.round(Math.random()*20);
let arrayNumPares = [];
let maximo = 0;
let minimo = 20;
let media = 0;
let suma = 0;

for (let i = 0; i <= 19; i++) {
    arrayVacio.unshift(random);
    random = Math.round(Math.random()*20);
}

//Muestra por consola los pares

function mostrarPares(){
    for (let i = 0; i < arrayVacio.length; i++) {
        if(arrayVacio[i]%2==0){
            arrayNumPares.unshift(arrayVacio[i]);
        }
    }
    console.log(arrayNumPares);
}

mostrarPares();

//Muestra por consola todos los numeros

function mostrarNumeros(){
    console.log(arrayVacio);
}

mostrarNumeros();

//Muestra el número máximo

function mostrarNumeroMaximo(){
    arrayVacio.forEach(element => {
        if(element > maximo){
            maximo = element;
        }
    });
    console.log("El numero máxmimo es : " + maximo);
}

mostrarNumeroMaximo();

//Mostrar el numero Minimo 

function mostrarNumeroMinimo(){
    arrayVacio.forEach(element => {
        if(element < minimo){
            minimo = element;
        }
    });
    console.log("El numero minimo es " + minimo);
}
mostrarNumeroMinimo();

//Mostrar media 

function mostrarMedia(){
    arrayVacio.forEach(element =>{
       suma +=element;
    });
    media = parseInt(suma/arrayVacio.length);
    console.log("La media es : "+ media);
}

mostrarMedia();