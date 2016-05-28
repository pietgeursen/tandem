var request = require('superagent')
var $ = require('jquery')
var currentListings = require('../views/currentListings/_ridesListing.hbs')
var singleListing = require('../views/singleListing.hbs')
var listingComment = require('../views/listingComment.hbs')

$(document).ready(function(){
  $("#searchButton").click(function(e) {
    e.preventDefault()
    var origin = $("#origin").val()
    var destination = $("#destination").val()
    request
      .post('/moreCurrentListings')
      .send({ origin: origin, destination: destination })
      .end(function(err, res) {
        var newListing = res.body
        $('#newRides').html(currentListings({ listing: newListing }))
      })
  })

  $("#commentSubmit").click(function(e){
    e.preventDefault()
    var comment = $('#commentReply').val()
    var listingID = $('#listingID').val()
    request
      .post('/singleListing')
      .send({ comment: comment, listingID: listingID })
      .end(function(err, res){
        var data = res.body
        $('#appendedComments').append(listingComment({comment: data.comment, listingID: data.listingID}))
        $('#commentReply').val('')
      })
  })

}) // close doc ready





// $("#findButton").click(function(e) {
//   e.preventDefault()
//   var origin = $("#origin").val()
//   var destination = $("#destination").val()
//   console.log('origin:', origin)
//   request
//     .post('/currentListings')
//     .send({ origin: origin, destination: destination})
//     .end(function(err, res) {
//       var newListing = res.body
//       $('#newRides').html(currentListings({ listing: newListing }))
//     })
//
// })
