var express = require('express');
var router = express.Router();

var animalsAvailable = [{
  type:"dog",
  breeds:["Golden Retriever","German Shepherd","French Poodle"]
},
{
  type:"cat", 
  breeds:["French Cat","Aristocat"]
},
{
  type:"hamster",
  breeds:["Hamster1","Hamster2"]
}]

var animalsToAdopt = [
  {
    id:1,
    name:"Jodie",
    type:"dog",
    breed:"Golden Retriever",
    image:"https://adopt-me-spa.s3.amazonaws.com/black-puppy.jpg",
    zipCode:22207,
    age:12

  },
  {
    id:2,
    name:"Jonah",
    type:"dog",
    breed:"German Shepherd",
    image:"https://adopt-me-spa.s3.amazonaws.com/domestic-dog_thumb.jpg",
    zipCode:22000,
    age:40

  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getAnimalsAndBreeds",function(req,res){
    res.json(animalsAvailable)
})


router.post("/findAnimals",function(req,res){
  var results = []
  for(var i=0;i<animalsToAdopt.length;i++){
      var item = animalsToAdopt[i]
      if( (item.type === req.body.animalType) && (true) && (true) && (true) ){
        results.push(item)
        
      }
  }

  console.log(req.body)
  res.json(results)
   
})


module.exports = router;
