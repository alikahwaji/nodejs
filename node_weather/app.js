
const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather =require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address for weather report',
      string: true
    }})
  .help()
  .alias('help', 'h')
  .argv

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(results.address)

    weather.currentWeather(results.latitude, results.longitude, (errorMessage, resultsWeather) => {
      if (errorMessage) {
        console.log(errorMessage)
      } else {
        console.log(`The current weather report : ${resultsWeather.temperature}. The apparent Temperature is : ${resultsWeather.apparentTemperature}`)
      }
    })
  }
})
