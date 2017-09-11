const expect = require('expect')

describe('App', () => {
  it('Should call Correctly', () => {
    var spy = expect.createSpy()
    spy()
    expect(spy).toHaveBeenCalled()
  })
})
