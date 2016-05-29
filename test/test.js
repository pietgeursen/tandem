var request = require('supertest')
var test = require('tape')
var cheerio = require('cheerio')
var app = require('../server')

test('visiting homepage takes user to correct view', function(t){
  request(app)
  .get('/')
  .end(function(err, res) {
    t.equal(res.status, 200, 'http status is 200 (ok)')
    t.end()
  })
})

test('posting on homepage redirects to currentListings + origin', function(t) {
  var origin = { origin: 'Kaeo' }
  request(app)
  .post('/currentListings')
  .send( origin )
  .end(function(err, res) {
    t.equal(res.status, 302, 'http status is 302 (redirect)')
    t.end()
  })
} )
