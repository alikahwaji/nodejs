const request = require('request')

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address)
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google maps')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unble to find the address.') 
      } else if (body.status === 'OK') {
        resolve(null, {
          address: body.results[0].formatted_address,
          Latitude: body.results[0].geometry.location.lat,
          Longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
  console.log(errorMessage)
})