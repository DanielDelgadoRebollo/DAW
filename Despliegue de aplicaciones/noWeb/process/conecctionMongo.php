<?php

//require_once $_SERVER["DOCUMENT_ROOT"] . "/noWeb/vendor/autoload.php";
require_once "../vendor/autoload.php";


            $servidor = "127.0.0.1";
            $usuario = "admin";
            $password = "admin";
            $basedatos = "usuarios";
            $puerto = "27017";
    
            //$cadenaConexion = "mongodb+srv://admin:admin@daw.7nriel5.mongodb.net/?retryWrites=true&w=majority";
            $users = (new MongoDB\Client)->usuarios->users;
            echo($users) 

  

?>