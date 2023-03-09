var express = require('express');
var router = express.Router();
const controlador = require("../controller/cursocontroller.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add',function(req,res,next){

});

router.get('/remove',function(req,res,next){

});


module.exports = router;
