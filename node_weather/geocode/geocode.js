const request = require('request')

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address)
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google maps')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unble to find the address.') 
    } else if (body.status === 'OK') {
      callback(null, {
        address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      })
    }
  })
}
module.exports.geocodeAddress = geocodeAddress
