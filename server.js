//package variables
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//connection variables
var app = express();
var PORT = process.env.PORT || 3000;

// directions for express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//per instructions need two routes set-up to go to the correct pages
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// the 'listening string'
app.listen(PORT, function () {
  console.log('App listening on http://localhost:' + PORT);
});

