const carta = {
palos: ['C','D','P','R'],
numero : ['1','2','3','4','5','6','7','8','9','10','11','12','13'],
}

var baraja = [];
var manoJugador = [];
var respuesta;
var random = Math.round(Math.random()*52);
var puntuacion = 0;



function formarBaraja() {
    
    for (let i = 0; i < carta.numero.length; i++) {
        if(i<=10){
            carta.palos.forEach(element => {
                baraja.unshift(element + i);
            });
        }
      switch(i){
        case 11: carta.palos.forEach(element =>{
            baraja.unshift('J'+element);
        }); 
        break;
        case 12: 
        carta.palos.forEach(element =>{
            baraja.unshift('Q'+element);
        }); 
        break;
        case 13: carta.palos.forEach(element =>{
            baraja.unshift('K'+element);
        }); 
        break;
      }
       
    }
}

function pedirCarta(){
     manoJugador.unshift(baraja[random]);
}

function comprobarValorDuplicado(valor){
    return manoJugador.filter((element) => {
         if(element == valor){
            random = Math.round(Math.random()*52);
         }
    });
}

function elegirCartaRandom(){
   random = Math.round(Math.random()*52);
}
function verMano(){
       console.table(manoJugador);
}

function comprobarPuntuacion(){
      baraja.filter(element => {
        if(element.indexOf(carta.numero)){
            puntuacion += carta.numero;
        }
      });
      console.log('Su puntuacion es de ' + puntuacion);
}




    do{
        console.log('Bienvenido al blackjack');
        console.log('1.Nueva partida');
        console.log('2.Reglas');
        console.log('3.Salir');
        var reglas = "Cada mesa muestra de forma clara las apuestas mínima y máxima que pueden realizar los jugadores, y el tamaño de las apuestas se selecciona haciendo clic en el icono de las fichas que muestren el valor correcto de la apuesta deseada. Una vez colocadas las apuestas (o la apuesta) se repartirán dos cartas boca arriba frente a los jugadores, y la banca recibirá bien sea una carta (estilo clásico) o dos, una boca arriba y otra boca abajo (estilo americano)";
        var num = parseInt(prompt('Introduce un numero'));
        switch(num)
        {
            case 1:console.log('Has entrado en el blackjack')
            formarBaraja();
            manoJugador.unshift(baraja[random])
            verMano();
            do{
                respuesta = confirm('Deseas otra carta?')
                elegirCartaRandom();
                comprobarValorDuplicado(random);
                pedirCarta();
                verMano();
                comprobarPuntuacion();
            }while(respuesta == true)

                break;
            case 2:console.log(reglas)
                break;
            case 3: alert('Se recargara la pagina');
                    console.log('Usted ha salido de la pagina');
                    console.clear();
                    location.reload();
                break;
        }
    }
    while(num<=3);
    

