const express = require('express')
const hbs = require('hbs')

var app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home.hbs', {
    homeTitle: 'Welcome to our company',
    homeMessage: 'Our company provides good coffee',
    currentYear: new Date().getFullYear()
  })
})

app.get('/view', (req, res) => {
  res.render('view.hbs', {
    pageTitle: 'About our page',
    currentYear: new Date().getFullYear()
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
