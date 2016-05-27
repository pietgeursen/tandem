var request = require('superagent')
var $ = require('jquery')

console.log('hiiiiiiiiiiii!!')

$("#searchButton").click(function(e) {
  e.preventDefault()
  var origin = $("#origin").val()
  var destination = $("#destination").val()
  console.log("this is origin: ", origin)
  console.log("this is destination: ", destination)
  request
    .post('/currentListings')
    .send({ origin: origin, destination: destination})
    .end(function(err, res) {
      console.log(res)
    })

})
