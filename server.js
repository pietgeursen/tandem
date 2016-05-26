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


app.get('/', function(req, res){
  res.send('success')
})


app.get('/currentListings', function(req, res){
  knex('users').select('*')
  .then(function(data){
    console.log("data : ", data)
  res.render('currentListings', { listing: data })

  })
})

app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
