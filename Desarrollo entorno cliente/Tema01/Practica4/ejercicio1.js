class Equipo{
 nombre;
 plantilla = Array()
 presupuesto;

 ficharJugador(jugador){
   Array.from(this.plantilla).unshift(jugador)
 }



 constructor(nombre,plantilla,presupuesto){
    this.nombre = nombre;
    this.plantilla = plantilla;
    this.presupuesto = presupuesto;
 }
 get getNombre(){
   return this.nombre
 }
 get getPlantilla(){
   return this.plantilla
 }
 get getPresupuesto(){
   return this.presupuesto
 }

 set setNombre(nombre){
   this.nombre = nombre;
 }
 mostrarDatos(){
   console.log(`El jugador fichado es: ${this.plantilla}`);
 }
}

class Jugador{
nombre;
posicion;
valor;

constructor(nombre,posicion,valor){
this.nombre = nombre;
this.posicion = posicion;
this.valor = valor;
}
}


var nombre = 'Real Madrid';
var plantilla = '';
var presupuesto = 100000
var team = new Equipo(nombre,plantilla,presupuesto);

var namePlayer = 'El bicho';
var PositionPlayer = 'Left winger';
var valorPlayer = 100000000;
var player = new Jugador(namePlayer,PositionPlayer,valorPlayer);

team.ficharJugador('amai');




