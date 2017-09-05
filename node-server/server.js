const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

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
