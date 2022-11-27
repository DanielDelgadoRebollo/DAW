class Carta{




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
    

