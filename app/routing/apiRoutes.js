//list needed variables -- had to make it global
//retrieve array
var peeps = require('../data/friends.js');


module.exports = function(app){
  //using get in order to find all persons
  app.get('/api/friends', function(request,response){
    response.json(peeps);
  });
//creating function that will run through person to get a match
  app.post('/api/friends', function(request,response){
//declare needed variables      
    var pRating = request.body.Ratings;
    var ratingArray = [];
    var match = 0;

//function to loop through person in list
    for(var i=0; i<peeps.length; i++){
      var ratingDif = 0;

//function to compare the persons ratings
      for(var j=0; j<pRating.length; j++){
        ratingDif += (Math.abs(parseInt(peeps[i].Ratings[j]) - parseInt(pRating[j])));
      }

//updates the ratings
     ratingArray.push(ratingDif);
    }

//final match
    for(var i=0; i<ratingArray.length; i++){
      if(ratingArray[i] <= ratingArray[match]){
        match = i;
      }
    }

// this is your friend that matches
    var yourMatch = peeps[match];
    response.json(yourMatch);

//pupdates the person in the list
    peeps.push(request.body);
  });
};