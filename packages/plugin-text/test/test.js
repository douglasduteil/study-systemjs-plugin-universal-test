/* eslint-env mocha */

var SystemJS = require('systemjs')
var chai = require('chai')
var chaiFiles = require('chai-files')
var path = require('path')

chai.use(chaiFiles)

var expect = chai.expect
var file = chaiFiles.file

describe('plugin-text', function () {
  before(function () {
    System.baseURL = path.resolve(__dirname, '..')
    System.map['txt'] = 'lib/plugin-text.js'
  })

  it('should return the file as pure test', function () {
    var actualFilePath = path.resolve(__dirname, 'actual.txt')
    return SystemJS.import(actualFilePath + '!')
      .then(function (actual) {
        expect(file(actualFilePath)).to.equal(actual)
      })
  })
})
