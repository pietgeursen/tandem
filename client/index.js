var request = require('superagent')
var $ = require('jquery')
var ridesListing = require('../views/currentListings/_ridesListing.hbs')
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
        console.log("newListing :", newListing)
        $('#newRides').html(ridesListing({ listing: newListing }))
      })
  })

  $("#commentSubmit").click(function(e){
    e.preventDefault()
    var comment = $('#commentReply').val()
    var listingID = $('#listingID').val()
    request
      .post('/commentOnListing')
      .send({ comment: comment, listingID: listingID })
      .end(function(err, res){
        var data = res.body
        $('#appendedComments').append(listingComment({comment: data.comment, listingID: data.listingID}))
        $('#commentReply').val('')
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
        $('#newRides').html(singleListing({ data : listingIDfromServer }))
    })
  })
}) // close doc ready
