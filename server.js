var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var Knex = require('knex')

var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = Knex(knexConfig[env]);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

function search(origin){
  return knex('listings').where({origin: origin}).innerJoin('users', 'listings.userID', '=', 'users.userID')
}


app.get('/', function(req, res){
  res.render('main')
})


app.post('/currentListings', function(req, res) {
  search(req.body.origin)
  .then(function(data) {
    res.json(data)
  })
})


app.get('/currentListings/:origin', function(req, res){
  search(req.params.origin)
  .then(function(data){
  res.render('./currentListings/currentListings', { listing: data })
  })
})



app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
