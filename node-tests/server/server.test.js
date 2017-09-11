const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe('Server', () => {
  describe('Get', () => {
    it('Should return company welcoming', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          })
        })
        .end(done)
    })
  })
  describe('Get /users', () => {
    it('Should return my users object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Mahmood Kahwaji',
            age: 2
          })
        })
        .end(done)
    })
  })
})
