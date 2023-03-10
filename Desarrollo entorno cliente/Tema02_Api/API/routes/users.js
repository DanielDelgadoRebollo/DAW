var express = require('express');
var router = express.Router();
const connection = require('../controllerDB/basedatos.js');
const { insert, select } = require('../operations/operations.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/insert',function(req,res,next){
   insert(connection,result =>{
    res.json(result)
   })
});

router.get('/select',function(req,res,next){
  select(connection,result =>{
    res.json(result);
  })
})

router.get('/remove',function(req,res,next){

});


module.exports = router;
