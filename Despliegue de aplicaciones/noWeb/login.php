<?php
require 'template/header.php';
include 'process\connectionMysql.php';
?>
<div style="height:400px; width:400px; margin:auto; margin-top : 100px;">
<h1 style="text-align:center;">Log in</h1>
<form action="./process/querys.php" method="post">
<div class="mb-2"><input type="text" class="form-control" id="formGroupExampleInput" placeholder="User" name="user"></div>
<div class="col-auto"><input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" name="pass" placeholder="Password"></div>
<input type="submit">
<div>
</form>
</div>
</body>
</html>