var express = require('express');
var app = express();

// //config body-parser
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


/**
 * Router
*/
require('./app/routes/HomeRouter')(app);

// var homeRouter = require('./app/routes/HomeRouter');

app.listen(3000, function() { 
  console.log('Example app listening on port 3000!');
});