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
