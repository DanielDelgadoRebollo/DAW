//gestionar acciones sobre los cursos de las bases de datos

const db = require("../controllerDB/basedatos.js");
var controlador = {
   insertar: (req,res) =>{
    let conexion = db.connection.createConnection()
    conexion.connect((err,ok)=>{
        if(err){
            res.send({status: "1", mensaje: "Error en la conexion"});
        }else{

        }
    });
   },
};

module.exports = controlador;