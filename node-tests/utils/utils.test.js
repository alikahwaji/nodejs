const utils = require('./utils')
const expect = require('expect')

describe('Utils', () => {

  it('should add two numbers', () => {
    var res = utils.add(30, 20)

    expect(res).toBe(50).toBeA('number')
  })

  it('Should Add two numbers async', (result) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number')
      result()
    })
  })

  it('Should square a number', () => {
    var res = utils.square(10)

    expect(res).toBe(100).toBeA('number')
  })

  it('Should square two async numbers', (done) => {
    utils.asyncSquare(20, (squ) => {
      expect(squ).toBe(400).toBeA('number')
      done()
    })
  })

  it('Should sub two numbers', () => {
    var res = utils.sub(5, 4)
    expect(res).toBe(1).toBeA('number')
  })

  it('Should sub two async numbers', (res) => {
    utils.asyncSub(10, 3, (sub) => {
      expect(sub).toBe(7).toBeA('number')
      res()
    })
  })

  it('Should div two numbers', () => {
    var res = utils.div(30, 10)
    expect(res).toBe(3).toBeA('number')
  })

  it('Should div two async numbers', (res) => {
    utils.asyncDiv(100, 20, (div) => {
      expect(div).toBe(5).toBeA('number')
      res()
    })
  })
})

describe('Gen testing', () => {
  it('Should expect some values', () => {
    // expect(12).toNotBe(12)
    expect({name: 'Ali'}).toEqual({name: 'Ali'})
  })
})

describe('Testing objects', () => {
  it('Should test an object', () => {
    expect({
      name: 'Ali',
      age: 37,
      location: 'Auckland'
    }).toInclude ({
      age: 37
    }).toExclude ({
      age: 45
    })
  })
})

describe('Set names', () => {
  it('Should set first name and last name', () => {
    var user = {location: 'Auckland', age: 37}
    var res = utils.setName(user, 'Ali Kahwaji')
    expect(res).toInclude({
      firstName: 'Ali',
      lastName: 'Kahwaji'
    })
  })
})
