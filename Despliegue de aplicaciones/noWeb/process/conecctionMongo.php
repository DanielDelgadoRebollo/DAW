<?php

require_once $_SERVER["DOCUMENT_ROOT"] . "/noWeb/vendor/autoload.php";

class Conexion{
    public function conectar(){
        try{
            $servidor = "127.0.0.1";
            $usuario = "admin";
            $password = "admin";
            $basedatos = "daw";
            $puerto = "27017";
    
            $cadenaConexion = "mongodb+srv://admin:admin@daw.7nriel5.mongodb.net/?retryWrites=true&w=majority";
            $cliente = new MongoDB\Client($cadenaConexion);
            return $cliente ->selectDatabase($basedatos);
        } catch(\Throwable $th) {
            return $th->getMessage();

        }
       
    }
}
  $objeto = new Conexion();
  var_dump($objeto ->conectar());

?>