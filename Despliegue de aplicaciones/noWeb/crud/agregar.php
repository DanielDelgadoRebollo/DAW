<?php
require '../template/header.php' 
?>
<div style="width: 600px; height: 600px; margin:auto">
<h1 style="text-align:center">Agregar nuevo registro</h1>
<form action="" method="post">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="nombre" name="nombre">
    <label for="apellido">Apellido</label>
    <input type="text" class="form-control" id="apellido" name="apellido">
    <label for="telefono">Telefono</label>
    <input type="text" class="form-control" id="telefono" name="telefono">
    <label for="Mail">Mail</label>
    <input type="text" class="form-control" id="Mail" name="Mail">
    <label for="Direccion">Direccion</label>
    <input type="text" class="form-control" id="Direccion" name="Direccion">
    <label for="Localidad">Localidad</label>
    <input type="text" class="form-control" id="Localidad" name="Localidad">
    <a href="agregar.php" class="btn btn-primary" style="margin-top:10px">Agregar Usuario</a>
</form>
</div>
</body>
</html>