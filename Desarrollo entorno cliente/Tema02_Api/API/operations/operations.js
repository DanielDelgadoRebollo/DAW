const mysql = require("mysql");
const { router } = require("../app");
let button = document.getElementById('addButton');
let textFieldTeam = document.getElementById('teamName').value;
button.addEventListener("click",function (){
insert(textFieldTeam);
})


function insert(connection,callback,textFieldTeam) {
let insertQuery = 'INSERT INTO Equipo (id, nombre, goles_favor, goles_contra, puntos,posicion) VALUES ("?","?","0","0","0","0")';
connection.query(insertQuery,[textFieldTeam],(err,result) => {
if(err) throw err;
callback(result);
});
}

module.exports = {insert};