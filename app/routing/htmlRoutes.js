//identify needed variables
var path = require('path');

//add route 

module.exports = function(app){
  //use get to direct to the survey page
  app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //use for using the home page 
  app.use(function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};