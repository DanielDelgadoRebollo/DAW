<?php

require_once $_SERVER["DOCUMENT_ROOT"] . "/noWeb/vendor/autoload.php";

$usuario= $_POST["nombre"];
$surname= $_POST["apellido"];

$collection = (new MongoDB\Client)->mydb->users;

$insertOneResult = $collection->insertOne([
    'username' => $usuario,
    'apellido' => $surname,
    
]);

var_dump($insertOneResult->getInsertedId());

?>