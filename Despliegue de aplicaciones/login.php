<?php
require './template/header.php'
?>
<div style="height:200px; width:200px; margin:auto; margin-top : 100px;">
<h1 style="text-align:center;">Log in</h1>
<form action="welcome.php" method="post">
<div class="mb-2"><input type="text" class="form-control" id="formGroupExampleInput" placeholder="User" name="user"></div>
<div class="col-auto"><input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" name="pass" placeholder="Password"></div>
<div class="col-auto"><span id="passwordHelpInline" class="form-text">Must be 8-20 characters long.</span>
<input type="submit">
<div>
</form>
</div>
</body>
</html>