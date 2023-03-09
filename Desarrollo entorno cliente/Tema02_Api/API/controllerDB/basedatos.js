const mysql = require("mysql");
let connection ={
    createConnection: () =>{
        return mysql.createConnection({
            host: "127.0.0.1",
            user: "programacion",
            password : "programacion",
            database: "formacion",
            port: 3306
        });
    },
}