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
  res.render('main', { layout: '_layout' })
})

app.get('/currentListings', function(req, res){
  knex('listings').where({origin: 'Kaeo'}).innerJoin('users', 'listings.userID', '=', 'users.userID')
  .then(function(data){
    res.render('currentListings', { layout: '_layout', listing: data })
  })
})

// '2' in knex query will eventually be replaced with something like req.body.userID..
app.get('/singleListing', function(req, res){
  knex('users').where({'users.userID': 2}).select('*').innerJoin('listings', 'users.userID', 'listings.userID')
  .then(function(data){
    // console.log('data: ', data)
    res.render('singleListing', { userID: data[0].name, origin: data[0].origin, destination: data[0].destination, date: data[0].dateTime, listingID: data[0].listingID, description: data[0].description, layout: '_layout' })
  })
})



// { commenterID: req.body.commenterID }
// commenterID comes from session? params?
app.post('/singleListing', function(req, res){
  knex('comments').insert({comment: req.body.comment, listingID: req.body.listingID })
  .then(function(data){
    console.log('yea')
    console.log('req.body: ', req.body)
    // res.send('success!')
    knex.select('comment', 'listingID').from('comments')
  })
  .then(function(data){
    console.log('data: ', data)
    // res.render('listingComment', { layout : 'singleListing' })
// // will this re-render whole page? with all data from 'get /singleListing' route?
  })
})

// app.post('/listingComment', function(req, res){
//
//
// })


app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
