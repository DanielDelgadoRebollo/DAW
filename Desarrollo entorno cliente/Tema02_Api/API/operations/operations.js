const mysql = require("mysql");
/*let button = document.getElementById('addButton');
let textFieldTeam = document.getElementById('teamName').value;
button.addEventListener("click",function (){
insert(textFieldTeam);
})*/


function insert(connection,callback){
let insertQuery = 'INSERT INTO equipo (id, nombre, goles_favor, goles_contra, puntos,posicion) VALUES ("Deniel","0","0","0","0")';
connection.query(insertQuery,(err,result) => {
if(err) throw err;
callback(result);
});
}

function select(connection,callback){
    let selectQuery = 'SELECT * from Equipo ';
    connection.query(selectQuery ,(err,result)=>{
     if(err) throw err;
     callback(result);
    });
}



module.exports = {insert,select};