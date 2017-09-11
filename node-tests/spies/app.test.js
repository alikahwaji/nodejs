const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)
  it('Should call Correctly', () => {
    var spy = expect.createSpy()
    spy('Ali', 37)
    expect(spy).toHaveBeenCalledWith('Ali', 37)
  })
  it('Should call saveUser with user object', () => {
    var email = 'ali.kahwaji@example.com'
    var password = '1234asdf'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})
