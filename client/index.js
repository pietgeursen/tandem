var request = require('superagent')
var $ = require('jquery')
var ridesListing = require('../views/currentListings/_ridesListing.hbs')
var singleListing = require('../views/singleListing.hbs')


$("#searchButton").click(function(e) {
  e.preventDefault()
  var origin = $("#origin").val()
  var destination = $("#destination").val()
  request
    .post('/moreCurrentListings')
    .send({ origin: origin, destination: destination })
    .end(function(err, res) {
      var newListing = res.body
      $('#newRides').html(ridesListing({ listing: newListing }))
    })
})


$(".seeMore").click(function(e){
  e.preventDefault()
  var listingID = e.target.id
  console.log("listingID :", listingID)
  request
  .post('/singleListing' )
    .send({ listingID: listingID })
    .end(function(err, res){
      var listingIDfromServer = res.body
      $('#newRides').html(singleListing({ listing : listingIDfromServer }))
  })
})
