<?php
require '../template/header.php' 
?>
<div style="width: 600px; height: 600px; margin:auto">
<h1 style="text-align:center">CRUD</h1>
<a href="./agregar.php" class="btn btn-primary">Agregar Usuario</a>
<a href="./eliminar.php" class="btn btn-danger">Eliminar</a>
<a href="./actualizar.php" class="btn btn-warning">Actualizar</a>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
</div>
</body>
</html>