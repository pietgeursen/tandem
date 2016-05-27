var request = require('superagent')
var $ = require('jquery')
var currentListings = require('../views/currentListings/_ridesListing.hbs')


$("#searchButton").click(function(e) {
  e.preventDefault()
  var origin = $("#origin").val()
  var destination = $("#destination").val()
  request
    .post('/currentListings')
    .send({ origin: origin, destination: destination})
    .end(function(err, res) {
      var newListing = res.body
      $('#newRides').html(currentListings({ listing: newListing }))
    })

})
