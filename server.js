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
 console.log("to field: ", req.body)
  knex('listings').innerJoin('users', 'listings.userID', '=', 'users.userID')
  .then(function(data){
  res.render('currentListings', { listing: data })

  })
})

app.post('/currentListings', function(req, res) {
  console.log('req.body: ', req.body)
  res.json({'food' : 'burger'})
})


// app.get('/currentListings', function(req, res){
//  console.log("to field: ", req.body)
//   knex('listings').where({origin: 'Cromwell'}).innerJoin('users', 'listings.userID', '=', 'users.userID')
//   .then(function(data){
//   res.render('currentListings', { listing: data })
//
//   })
// })


app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
