const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

var app = express()

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.use((req, res, next) => {
  var now = new Date().toString()
  var log = `${now}: ${req.method} ${req.url}`

  console.log(log)
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to to console log the server.log')
    }
  })

  next()
})

// app.use((req, res, next) => {
//   res.render('fix.hbs')
// })

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    homeTitle: 'Welcome to our company',
    homeMessage: 'Our company provides good coffee'
  })
})

app.get('/view', (req, res) => {
  res.render('view.hbs', {
    pageTitle: 'About our page'
  })
})

app.get('/error', (req, res) => {
  res.send({
    errorMessage: 'Link broken'
  })
})

app.listen(3000, () => {
  console.log('Port listening on 3000')
})
