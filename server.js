var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var bcrypt = require('bcrypt-node')
var Knex = require('knex')

var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = Knex(knexConfig[env]);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.send('success')
})

app.get('/signup', function (req, res) {
  res.render('login')
})


app.get('/currentListings', function(req, res){
  res.render('currentListings', { }) //handlebars-zie stuff
  //from = searched
  //to = searched
  // total number of records
  //listing details : date, to, from, driver

})

app.post('/signup', function (req, res) {
//   // if (req.body.email === '') {
//   //   res.redirect('/sign-up')
//   // }
var hash = bcrypt.hashSync( req.body.password)
 knex('users').insert({ email: req.body.email, hashedPassword: hash })
    .then(function(data){
        //create sessions
        // req.session.userId = data[0]
        res.redirect('currentListings')
    })
    .catch(function(error){
       console.log("error:", error)
        // req.session.userId = 0
        res.redirect('/')
    })
})

// app.post('/login', function(req, res){
//   knex('users').where('email', req.body.email)
//     .then(function(data) {
//       if ( req.body.email === '' ) {
//         res.redirect('/signIn')
//       }
//       else if (bcrypt.compareSync( req.body.password, data[0].hashed_password )) {
//         req.session.userId = data[0].id
//         res.redirect('/secret')
//       }
//       else {
//         res.redirect('/home') //main listings
//       }
//     })
//     .catch(function(error){
//       req.session.userId = 0
//       res.redirect('/signUp')
//   })
// })

app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
