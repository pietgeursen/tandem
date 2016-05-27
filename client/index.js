var request = require('superagent')
var $ = require('jquery')

console.log("index.js")

function createListingElement(listing){
  return (
    '<div>' + listing.origin + '</div>'
  )
}

$("#searchButton").click(function(e) {
  e.preventDefault()
  var origin = $("#origin").val()
  var destination = $("#destination").val()
  request
    .post('/currentListings')
    .send({ origin: origin, destination: destination})
    .end(function(err, res) {
      console.log("*******", err, res)
      var newListing = res.body[0]
      console.log("newListing: ", createListingElement(newListing))
      $('.listing').append(createListingElement(newListing))

      // grab the response
      // grab the element within the page where you want to stick your
      // updated data

      // append the data within the response, to the element that you have selected

    })

})
