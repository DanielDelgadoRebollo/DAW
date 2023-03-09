const mysql = require("mysql");
var express = require('express');

const connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "programacion",
            password : "programacion",
            database: "formacion",
            port: 3306
        });

        connection.connect((err)=>{
            if(err) throw err;
            console.log("Connected to database");
        })

module.exports = connection;