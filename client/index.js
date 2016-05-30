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
    if (origin == null || origin == "") {
      var message = "Ooops...please enter a start point"
        document.getElementById("alert").innerHTML = message;
        return false;
      }else{
          request
            .post('/moreCurrentListings')
            .send({ origin: origin, destination: destination })
            .end(function(err, res) {
              var newListing = res.body
              $('#newRides').html(ridesListing({ listing: newListing }))
          })
      }
  })

  $('#requestRide').click(function(e) {
    e.preventDefault()
    request
    .get('/liftConfirm')
    .send({origin: origin})
    .end(function(err, res) {
      var data = res.body
      $('body').html(liftConfirm({origin: res.body.origin, destination: res.body.destination,
            date: res.body.departureDate, time: res.body.departureTime, listingID: res.body.listingID}))
      })
  })

  $('.rideConfirm').click(function(e) {
    e.preventDefault()
    var listingID = e.target.id
    var description = $('#description').val()
    request
      .post('/liftEnjoy')
      .send({listingID: listingID, description: description })
      .end(function (err, res) {
        $('body').html(liftEnjoy())
      })
  })

  // 1. pure serverside rendering - nice and simple
    // take out ajax
    // res.render hbs

  // 2. initial render serverside
    // POST Listing/id/comment
    // GET listing/id data
    // client side render listing with its comments

  // 3. pure client-side


  // its working but is it using form action (html5 forms)?
  // what's happening with the ajax?

  // server
  // respond with the comment we just inserted

  $("body").on("click", "#commentSubmit", function(){
    var comment = $('#commentReply').val()
    console.log('Im heerrre')
    // debugger
    // request
    //   .post('/listings/' + listingID + '/comment')
    //   .send({ comment: comment, listingID: listingID })
    //   .end(function(err, res){
    //     var data = res.body
    //     console.log('res: ', res)
    //     $('#appendedComments').append(listingComment({comment: data.comment, listingID: data.listingID}))
    //     $('#commentReply').val('')
    //   })
  })
  // .get('/singleListing')
  // .end(function(err,res){



  $(".seeMore").click(function(e){
    e.preventDefault()
    var listingID = e.target.id
    request
    .get('/singleListing?listingID=' + listingID )
    .end(function(err, res){
      var listingIDfromServer = res.body
      // console.log(listingIDfromServer)
      $('#newRides').html(singleListing({ data : listingIDfromServer }))
    })
  })
}) // close doc ready
