<?php
session_start();
include 'connectionMysql.php';


$user= $_POST["user"];
$password= $_POST["pass"];

$searchUser ="Select * FROM usuarios WHERE name_user='$user' && password='$password'";
$query = $conn->query($searchUser);

if($query->num_rows > 0){
    echo "Welcome $user!";
}else{
    echo "thats not the way";
}



?>