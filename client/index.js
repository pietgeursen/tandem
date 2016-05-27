var request = require('superagent')
var $ = require('jquery')
var currentListings = require('../views/_ridesListing.hbs')

console.log("index.js")


$("#searchButton").click(function(e) {
  console.log('hiiiiiiiiiiiii!!!')
  e.preventDefault()
  var origin = $("#origin").val()
  var destination = $("#destination").val()
  request
    .post('/currentListings')
    .send({ origin: origin, destination: destination})
    .end(function(err, res) {
      var newListing = res.body
      $('#foo').html(currentListings({ listing: newListing }))

    })

})
