<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica3</title>
</head>
<body>
    <h1>Manejo de cadenas</h1>
    <h2>Ejemplo 2</h2>
    <?php
    $lista_numeros = ["uno","dos","tres","cuatro","cinco"];
    print("<UL>\n");
    for($i=0; $i<=4; $i++){
        print("<LI>$lista_numeros[$i]</LI>\n");
            }
    print("</UL>\n");
    ?>

</body>
</html>