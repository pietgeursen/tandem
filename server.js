var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', function(req, res){
  res.send('success')
})

app.listen(3000, function () {
  console.log('catching a lift on 3000!');
});
