var express = require('express');
var router = express.Router();



var animals = [{
  type:"dog",
  breeds:["Golden Retriever","German Sheperd","French Poodle"]
},
{
  type:"cat",
  breeds:["French Cat","Aristocat"]
},
{
  type:"hamster",
  breeds:["Hamster1","Hamster2"]
}]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getAnimalsAndBreeds",function(req,res){
    res.json(animals)
})


router.get("/test",function(req,res){
  res.json({name:"Sabrina"})
})


module.exports = router;
