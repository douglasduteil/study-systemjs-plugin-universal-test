'use strict'

var SystemJS = require('systemjs')
var fs = require('fs')
var path = require('path')
var test = require('tap').test

test('plugin-text should return the file as pure test', function (t) {
  t.plan(1)

  // when
  System.baseURL = path.resolve(__dirname, '..')
  System.map['txt'] = 'lib/plugin-text.js'

  var actualFilePath = path.resolve(__dirname, 'actual.txt')
  return SystemJS.import(actualFilePath + '!')
    .then(function (actual) {
      t.same(fs.readFileSync(actualFilePath, 'utf8'), actual)
    })
})
