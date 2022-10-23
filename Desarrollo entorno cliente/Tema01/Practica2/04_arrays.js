var baraja = [];
var palos = ["C","D","P","R"];

for (let i = 0; i < 14; i++) {
    if(i<=10){
        palos.forEach(element => {
            baraja.unshift(element + i);
        });
    }
  switch(i){
    case 11: palos.forEach(element =>{
        baraja.unshift(element+"J");
    }); 
    break;
    case 12: 
    palos.forEach(element =>{
        baraja.unshift(element+"Q");
    }); 
    break;
    case 13: palos.forEach(element =>{
        baraja.unshift(element+"K");
    }); 
    break;
  }

}

console.log(_.shuffle(baraja));




