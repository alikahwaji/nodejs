const request = require('request')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1010%20nelson%20street%20auckland',
  jason: true
}, (error, response, body) => {
  console.log(error)
  console.log(body)
})