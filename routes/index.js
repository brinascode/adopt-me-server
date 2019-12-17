module.exports = function(app){
  var express = require('express');

  
  var animalsAvailable = [{
    type:"dog",
    breeds:["Golden Retriever","German Shepherd","Poodle", "Pitbull"]
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
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/golden-retriever1.jpg",
      zipCode:22207,
      age:7
  
    },
    {
      id:2,
      name:"Johnny",
      type:"dog",
      breed:"Golden Retriever",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/german-shepherd2.jpg",
      zipCode:22201,
      age:15
  
    },
    {
      id:3,
      name:"Luca",
      type:"dog",
      breed:"Pitbull",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/pitbull1.jpg",
      zipCode:95051,
      age:13
  
    },
    {
      id:4,
      name:"Jolie",
      type:"dog",
      breed:"Pitbull",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/pitbull2.jpg",
      zipCode:95051,
      age:20
  
    },
    {
      id:5,
      name:"Moses",
      type:"dog",
      breed:"Pitbull",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/pitbull3.jpg",
      zipCode:95051,
      age:7
  
    },
    {
      id:6,
      name:"Touffy",
      type:"dog",
      breed:"Poodle",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/poodle1.jpeg",
      zipCode:23457,
      age:8
  
    },
    {
      id:7,
      name:"Boule",
      type:"dog",
      breed:"Poodle",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/poodle2.jpg",
      zipCode:21117,
      age:9
  
    },
    {
      id:8,
      name:"King",
      type:"dog",
      breed:"German Shepherd",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/german-shepherd1.jpg",
      zipCode:24444,
      age:5
  
    },
    {
      id:8,
      name:"Queen",
      type:"dog",
      breed:"German Shepherd",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/german-shepherd2.jpg",
      zipCode:24444,
      age:5
  
    }
  ]
  
  /* GET home page. */
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  app.get("/getAnimalsAndBreeds",function(req,res){
      res.json(animalsAvailable)
  })
  
  
  app.post("/findAnimals",function(req,res){
    var results = []
    for(var i=0;i<animalsToAdopt.length;i++){
        var item = animalsToAdopt[i]
        if( (item.type === req.body.animalType) && (item.breed === req.body.animalBreed) && (item.zipCode === req.body.zipCode) && (item.age < req.body.maxAge   || req.body.maxAge === item.age) ){
          results.push(item)
          
        }
    }
  
    res.json(results)
     
  })
  
  

  
}
