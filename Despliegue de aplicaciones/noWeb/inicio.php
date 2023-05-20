<?php
require './template/header.php';
setcookie("User", "user", time()+1500);

/*
Check if cookies are enabled.

if(count($_COOKIE) > 0) {
  echo "Cookies are enabled.";
} else {
  echo "Cookies are disabled.";
}
*/

?>

 <div style="text-align:center">
  <h1>Bienvenidos a la aplicación realizada con MongoDB y PHP</h1>
  <p style="color:#33B8FF">En esta app podremos listar, agregar, modificar y eliminar Datos</p>
 </div>
</div>
</body>
</html>