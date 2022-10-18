//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
let num = 0;
let media = 0;
let total = 0;


while(num<arrayNumeros.length){
    console.log(("Uso del while " + arrayNumeros[num]));
    num++;
}

//Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("Uso del for " + arrayNumeros[i]);
}

//Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

arrayNumeros.forEach(element => {
    console.log("Uso del forEach : " + element);
});

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

arrayNumeros.forEach(element => {
    console.log("Suma de elementos :  "+ (element+1));
});

//Calcular la media de todos los elementos del array


arrayNumeros.forEach(element => {
    total +=element;
});
media = total/arrayNumeros.length;
console.log("La media de todos los números es : " + media);