<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">  
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
    <title>Captcha</title>
</head>
<body>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="inicio.php">App MongoDB+ PHP + bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="registro.php">Registro</a>
        </li>
    </div>
  </div>
</nav>
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