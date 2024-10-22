var express = require('express');
var app = express();

app.get("/", function (res, res) {
  res.send("Well");
})

// //config body-parser
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


// //router
// require('./app/routers/TrangChuRouter')(app);

app.listen(3000, function() { 
  console.log('Example app listening on port 3000!');
});