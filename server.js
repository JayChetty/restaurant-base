var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var path = require('path')

var restaurant = require('./models/restaurant');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
    console.log('res', restaurant);
    res.render('home', {restaurant: restaurant});
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
