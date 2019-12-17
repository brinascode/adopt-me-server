module.exports = function(app){
  var express = require('express');

  
  var animalsAvailable = [{
    type:"dog",
    breeds:["Golden Retriever","German Shepherd","Poodle", "Pitbull"]
  },
  {
    type:"cat", 
    breeds:["Persian Cat","Ragdoll"]
  },
  {
    type:"hamster",
    breeds:["Syrian","Dwarf Campbell Russian","Roborovski Dwarf"]
  }]
  
  var animalsToAdopt = [
    {
      id:1,
      name:"Jodie",
      type:"dog",
      breed:"Golden Retriever",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/golden-retriever1.jpg",
      zipCode:22207,
      age:7,
      description:"This is the pet you need!"
  
    },
    {
      id:2,
      name:"Johnny",
      type:"dog",
      breed:"Golden Retriever",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/german-shepherd2.jpg",
      zipCode:22201,
      age:15,
      description:"This is the pet you need!"
  
    },
    {
      id:3,
      name:"Luca",
      type:"dog",
      breed:"Pitbull",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/pitbull1.jpg",
      zipCode:95051,
      age:13,
      description:"This is the pet you need!"
  
    },
    {
      id:4,
      name:"Jolie",
      type:"dog",
      breed:"Pitbull",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/pitbull2.jpg",
      zipCode:95051,
      age:20,
      description:"This is the pet you need!"
  
    },
    {
      id:5,
      name:"Moses",
      type:"dog",
      breed:"Pitbull",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/pitbull3.jpg",
      zipCode:95051,
      age:7,
      description:"This is the pet you need!"
  
    },
    {
      id:6,
      name:"Touffy",
      type:"dog",
      breed:"Poodle",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/poodle1.jpeg",
      zipCode:23457,
      age:8,
      description:"This is the pet you need!"
  
    },
    {
      id:7,
      name:"Boule",
      type:"dog",
      breed:"Poodle",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/poodle2.jpg",
      zipCode:21117,
      age:9,
      description:"This is the pet you need!"
  
    },
    {
      id:8,
      name:"King",
      type:"dog",
      breed:"German Shepherd",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/german-shepherd1.jpg",
      zipCode:24444,
      age:5,
      description:"This is the pet you need!"
  
    },
    {
      id:9,
      name:"Queen",
      type:"dog",
      breed:"German Shepherd",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/german-shepherd2.jpg",
      zipCode:24444,
      age:5,
      description:"This is the pet you need!"
  
    },
    {
      id:10,
      name:"Candy",
      type:"cat",
      breed:"Persian Cat",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/persian1.jpeg",
      zipCode:95051,
      age:5,
      description:"This is the pet you need!"
  
    },
    {
      id:11,
      name:"Greeny",
      type:"cat",
      breed:"Persian Cat",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/persian2.jpg",
      zipCode:95051,
      age:20,
      description:"This is the pet you need!"
  
    },
    {
      id:12,
      name:"Beam",
      type:"cat",
      breed:"Persian Cat",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/persian3.jpeg",
      zipCode:95051,
      age:20,
      description:"This is the pet you need!"
  
    },
    {
      id:13,
      name:"Bravo",
      type:"cat",
      breed:"Persian Cat",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/persian4.jpg",
      zipCode:95051,
      age:15,
      description:"This is the pet you need!"
  
    },
    {
      id:14,
      name:"Doll",
      type:"cat",
      breed:"Ragdoll",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/ragdoll1.jpg",
      zipCode:22207,
      age:6,
      description:"This is the pet you need!"
  
    },
    {
      id:15,
      name:"Lemon",
      type:"cat",
      breed:"Ragdoll",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/ragdoll2.jpg",
      zipCode:22207,
      age:9,
      description:"This is the pet you need!"
  
    },
    {
      id:16,
      name:"Pie",
      type:"cat",
      breed:"Ragdoll",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+cats/ragdoll3.jpg",
      zipCode:22207,
      age:4,
      description:"This is the pet you need!"
  
    },
    {
      id:17,
      name:"Santa Claus",
      type:"hamster",
      breed:"Syrian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/syrian1.jpg",
      zipCode:22207,
      age:4,
      description:"This is the pet you need!"
  
    },
    {
      id:18,
      name:"Natie",
      type:"hamster",
      breed:"Syrian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/syrian2.jpg",
      zipCode:22207,
      age:3,
      description:"This is the pet you need!"
  
    },
    {
      id:19,
      name:"Noel",
      type:"hamster",
      breed:"Syrian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/syrian3.jpg",
      zipCode:95051,
      age:5,
      description:"This is the pet you need!"
  
    },
    {
      id:20,
      name:"Jolly",
      type:"hamster",
      breed:"Syrian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/syrian4.jpg",
      zipCode:95051,
      age:7,
      description:"This is the pet you need!"
  
    },
    {
      id:21,
      name:"Hammy",
      type:"hamster",
      breed:"Dwarf Campbell Russian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/dwarf-russian1.jpg",
      zipCode:222222,
      age:1,
      description:"This is the pet you need!"
  
    },
    {
      id:22,
      name:"Holly",
      type:"hamster",
      breed:"Dwarf Campbell Russian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/dwarf-russian2.jpg",
      zipCode:222222,
      age:3,
      description:"This is the pet you need!"
  
    },
    {
      id:23,
      name:"Dodo",
      type:"hamster",
      breed:"Dwarf Campbell Russian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/dwarf-russian3.jpg",
      zipCode:222222,
      age:8,
      description:"This is the pet you need!"
  
    },
    {
      id:24,
      name:"Puce",
      type:"hamster",
      breed:"Dwarf Campbell Russian",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/dwarf-russian4.jpg",
      zipCode:222222,
      age:4,
      description:"This is the pet you need!"
  
    },
    {
      id:25,
      name:"Happy",
      type:"hamster",
      breed:"Roborovski Dwarf",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/robo1.jpg",
      zipCode:20000,
      age:3,
      description:"This is the pet you need!"
  
    },
    {
      id:26,
      name:"Star",
      type:"hamster",
      breed:"Roborovski Dwarf",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/robo2.jpg",
      zipCode:20000,
      age:7,
      description:"This is the pet you need!"
  
    },
    {
      id:27,
      name:"Starlette",
      type:"hamster",
      breed:"Roborovski Dwarf",
      image:"https://adopt-me-spa.s3.amazonaws.com/The+Pets/the+hamsters/robo3.jpg",
      zipCode:20000,
      age:9,
      description:"This is the pet you need!"
  
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
