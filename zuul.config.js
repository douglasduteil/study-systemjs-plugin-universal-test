'use strict'

const {
  BROWSER_NAME,
  BROWSER_VERSION,
  COMMIT_SHA1,
  CI,
  TRAVIS_BRANCH,
  TRAVIS_JOB_NUMBER
} = process.env

const name = `${TRAVIS_BRANCH} (${COMMIT_SHA1}) - ${TRAVIS_JOB_NUMBER}`

module.exports = {
  name: CI ? name : 'Local cloud launch |> ' + new Date(),
  browserify: [
    {transform: 'brfs'}
  ],
  browsers: CI && [
    {
      name: BROWSER_NAME,
      version: BROWSER_VERSION
    }
  ],
  ui: 'tape'
}
