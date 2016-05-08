var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var path = require('path')

var restaurant = require('./models/restaurant');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('about', {restaurant: restaurant});
});

app.get('/about', function (req, res) {
    res.render('about', {restaurant: restaurant});
});

app.get('/menu', function (req, res) {
    res.render('menu', {restaurant: restaurant});
});

app.get('/contact', function (req, res) {
    res.render('contact', {restaurant: restaurant});
});

app.listen(process.env.PORT || 3000);
