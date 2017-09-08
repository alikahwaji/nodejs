const utils = require('./utils')
const expect = require('expect')

it('should add two numbers', () => {
  var res = utils.add(30, 20)

  expect(res).toBe(50).toBeA('number')
})

it('Should square a number', () => {
  var res = utils.square(10)

  expect(res).toBe(100).toBeA('number')
})

it('Should sub two numbers', () => {
  var res = utils.sub(5, 4)
  expect(res).toBe(1).toBeA('number')
})

it('Should div two numbers', () => {
  var res = utils.div(30, 10)
  expect(res).toBe(3).toBeA('number')
})
