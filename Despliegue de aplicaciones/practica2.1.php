<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        setlocale(LC_TIME, 'es_ES.UTF-8');
        date_default_timezone_set ('Europe/Madrid');
        $fechaActual = date('d/m/Y');
        $horaActual=date('h:i:s A');
        $añoBisiesto=date('L', strtotime("2022-01-01")) ? 'bisiesto' : 'no bisiesto';
        $diaActual=date('l ', strtotime("this week"),);
  echo ("La fecha de hoy es: $fechaActual <br> La hora actual es: $horaActual<br>Año $añoBisiesto<br>Dia de la semana: $diaActual") ;
        ?>
    </body>
</html>