//

export function translate (load) {
  if (this.builder) {
    load.metadata.format = 'cjs'
    return 'module.exports = ' + JSON.stringify(JSON.parse(load.source))
  }
}

export function instantiate (load) {
  if (!this.builder) {
    return JSON.parse(load.source)
  }
}
