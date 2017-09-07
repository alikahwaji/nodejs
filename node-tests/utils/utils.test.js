const utils = require('./utils')

it('should add two numbers', () => {
  var res = utils.add(30, 20)

  if (res !== 50) {
    throw new Error(`Expected 50, but got ${res}.`)
  }
})
