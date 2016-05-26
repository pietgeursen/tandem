var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var hbs = require('express-hbs')
var Knex = require('knex')

var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = Knex(knexConfig[env]);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

 app.get('/', function (req, res) {
    res.render('main', {layout: '_layout'});
  });

app.get('/currentListings', function(req, res){
  res.render('currentListings', {layout: '_layout'}) //handlebars-zie stuff
  //from = searched
  //to = searched
  // total number of records
  //listing details : date, to, from, driver
  knex('listings').where({origin: 'Kaeo'}).innerJoin('users', 'listings.userID', '=', 'users.userID')
  .then(function(data){
  res.render('currentListings', { listing: data })
  })
})

app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
