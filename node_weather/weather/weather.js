const request = require('request')

var currentWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/ac82990c1895d75cec402eaa7dc9e9fd/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast.io')
    } else if (!error && response.statusCode === 200) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      console.log('Unable to get weather data')
    }
  })
}

module.exports.currentWeather = currentWeather
