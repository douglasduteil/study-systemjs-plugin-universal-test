'use strict'

var SystemJS = require('systemjs')
var fs = require('fs')
var path = require('path')
var test = require('tape').test

var actualFilePath = path.join(__dirname, 'actual.txt')

// HACK(douglasduteil): force inline path.join to ensure brfs is working
// brfs seems to not reconise the variable above ...
var expect = fs.readFileSync(path.join(__dirname, 'actual.txt'), 'utf8')

test('plugin-text should return the file as pure test', function (t) {
  t.plan(1)

  // when
  System.baseURL = path.resolve(__dirname, '..')
  System.map['txt'] = 'lib/plugin-text.js'

  return SystemJS.import(actualFilePath + '!')
    .then(function (actual) {
      t.same(expect, actual)
    })
})
