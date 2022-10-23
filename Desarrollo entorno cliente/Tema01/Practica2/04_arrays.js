var baraja = [];
var palos = ["c", "p", "t", "d"];
for (var i = 0; i< palos.length; i++ ){
     for (var  j = 1; j<=12; j++){
          baraja[baraja.length] = {p:palos[i], v:j};
    }
 
}
var rojas = [];
var negras = [];
for (var i=0; i<baraja.length; i++) {
    if (baraja[i].p==="c" || baraja[i].p==="d") {
       rojas[rojas.length] = baraja[i];
  }
   else {
       negras[negras.length] = baraja[i];
   }
}