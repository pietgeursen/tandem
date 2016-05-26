var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var hbs = require('express-hbs')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// setting up landing page

// app.get('/', function(req, res){
//   res.send('success')
// })

 app.get('/', function (req, res) {
    res.render('main', {layout: '_layout'});
  });

app.get('/currentListings', function(req, res){
  res.render('currentListings', {layout: '_layout'}) //handlebars-zie stuff
  //from = searched
  //to = searched
  // total number of records
  //listing details : date, to, from, driver

})








app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
