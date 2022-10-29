<?php
//Determinar si existe o no una palabra en un string
$existe_cadena = FALSE;
$posicion_cadena = strpos("CES JUAN PABLO", "SEGUNDO");
if($posicion_cadena !== FALSE){$existe_cadena = TRUE;}
echo "CES JUAN PABLO";
echo "<br/>";
echo $existe_cadena ? 'true' : 'false';

?>