<?php

include 'connectionMysql.php';
session_start();


$user= $_POST["user"];
$password= $_POST["pass"];

$searchUser ="Select * FROM usuarios WHERE name_user='$user' && password='$password'";
$query = $conn->query($searchUser);

if($query->num_rows > 0){

    $_SESSION = $_SESSION[$user];

}else{
    if(isset($_SERVER['HTTP_REFERER'])) {
        $message = urlencode("After clicking the button, the form will submit to home.php. When, the page home.php loads, the previous page index.php is redirected. ");
        header("Location:".$_SERVER[HTTP_REFERER]."?message=".$message);
        die;
    }
    else
      {
         //it was not sent, perform your default actions here
      }
}
?>