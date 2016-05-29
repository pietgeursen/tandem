var request = require('superagent')
var $ = require('jquery')
var ridesListing = require('../views/currentListings/_ridesListing.hbs')
var singleListing = require('../views/singleListing.hbs')
var listingComment = require('../views/listingComment.hbs')
var liftConfirm = require('../views/liftConfirm.hbs')
var liftEnjoy = require('../views/liftEnjoy.hbs')

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
        $('#newRides').html(ridesListing({ listing: newListing }))
      })
  })

  $('#requestRide').click(function(e) {
    e.preventDefault()
    request
    .get('/liftConfirm')
    .send({origin: origin}) //this is getting sent to the server
    .end(function(err, res) { //res comes back here and this is where you render it to page
      var data = res.body
      $('body').html(liftConfirm({origin: res.body.origin, destination: res.body.destination,
            date: res.body.departureDate, time: res.body.departureTime, listingID: res.body.listingID}))
      })
  })

  $('.rideConfirm').click(function(e) {
    e.preventDefault()
    console.log("hitting listener!")
    var listingID = e.target.id
    var description = $('#description').val()
    console.log("here's the listing ID: ", listingID, "heres description: ", description)
    request
      .post('/liftEnjoy')
      .send({listingID: listingID, description: description })
      .end(function (err, res) {
        console.log("error: ", err)
        console.log("hopefully there's some data in request Ride table!")
        $('body').html(liftEnjoy())
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
        // console.log('res: ', res)
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
        // console.log('res: ', res)
        var listingIDfromServer = res.body
        // console.log('listingIDfromServer: ', listingIDfromServer)
        $('#newRides').html(singleListing({ data : listingIDfromServer }))
    })
  })

}) // close doc ready
