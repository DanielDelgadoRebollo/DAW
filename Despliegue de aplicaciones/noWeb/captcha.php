<?php
require './template/header.php'
?>
   <!-- <div style="margin: left 400px;">
    <div class="container w-4/12 mx-auto">
        <p>Utiliza el captcha para poder seguir.</p>
    <div class="h-captcha" data-sitekey="520d0bcf-d7df-409f-adea-f51f50122351"></div>
    <button type="submit" mat-raised-button [href]="login.php">Pulse aqui para seguir</button> 
    </div> 
    !-->
    <div class="form-group">
    <label class="col-md-4 control-label"> <img style="border: 1px solid #D3D0D0" src="get_captcha.php?rand=<?php echo rand(); ?>" id='captcha'></label>
</div>
</body>
</html>