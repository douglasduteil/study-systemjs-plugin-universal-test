/* eslint-env mocha */

var SystemJS = require('systemjs')
var chai = require('chai')
var path = require('path')

var expect = chai.expect

describe('plugin-json', function () {
  before(function () {
    System.baseURL = path.resolve(__dirname, '..')
    System.map['json'] = 'lib/plugin-json.js'
  })

  it('should return the file as json', function () {
    var actualFilePath = path.resolve(__dirname, 'actual.json')
    return SystemJS.import(actualFilePath + '!')
      .then(function (actual) {
        expect(require(actualFilePath)).to.eql(actual)
      })
  })
})
