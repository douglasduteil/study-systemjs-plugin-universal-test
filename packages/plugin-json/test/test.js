'use strict'

var SystemJS = require('systemjs')
var path = require('path')
var test = require('tap').test

test('plugin-json should return the file as json', function (t) {
  t.plan(1)

  // when
  System.baseURL = path.resolve(__dirname, '..')
  System.map['json'] = 'lib/plugin-json.js'

  var actualFilePath = path.resolve(__dirname, 'actual.json')
  return SystemJS.import(actualFilePath + '!')
    .then(function (actual) {
      t.same(require(actualFilePath), actual)
    })
})
