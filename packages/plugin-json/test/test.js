'use strict'

var System = require('systemjs')
var path = require('path')
var test = require('tape').test

test('plugin-json should return the file as json', function (t) {
  t.plan(1)

  // when
  System.config({
    baseURL: path.resolve(__dirname, '..'),
    map: {
      json: 'lib/plugin-json.js'
    }
  })

  var actualFilePath = path.resolve(__dirname, 'actual.json')
  return System.import(actualFilePath + '!')
    .then(function (actual) {
      t.same(require(actualFilePath), actual)
    })
})
