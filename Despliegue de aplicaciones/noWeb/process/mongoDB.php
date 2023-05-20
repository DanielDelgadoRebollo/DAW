<?php


//require_once $_SERVER["DOCUMENT_ROOT"] . "/noWeb/vendor/autoload.php";
require 'vendor/autoload.php';


// $usuario= $_POST["nombre"];
// $surname= $_POST["apellido"];

// $collection = (new MongoDB\Client)->usuarios->users;

// $insertOneResult = $collection->insertOne([
//     'username' => $usuario,
//     'apellido' => $surname,
    
// ]);

// var_dump($insertOneResult->getInsertedId());

$uri = 'mongodb://localhost:27017';  
$client = new MongoDB\Client($uri);

$database = $client->myDatabase;
$collection = $database->myCollection;

echo($database);
echo($collection);

?>