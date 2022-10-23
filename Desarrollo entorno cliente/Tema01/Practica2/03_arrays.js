const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let suma = 0;
let maximo = 0; 
let media = 0;
let minimo = 0;

//Ordena el array y obten el valor máximo y mínimo
function ordenarValorMaximoMinimo(){
    ages.sort();
    ages.forEach(element => {
        if(element < element+1){
            maximo = element;
        }
    });
    minimo = Math.min.apply(null,ages);
  console.log("El valor maximo es: "+maximo);
  console.log("El valor minimo es: "+minimo);
}

ordenarValorMaximoMinimo();
//Obtén la medida de edad

function obtenerMediaEdad(){
    ages.forEach(element => {
        suma += element;
    });
    media = (suma / ages.length);
    console.log("La media de edad es : " + media);
}

obtenerMediaEdad();