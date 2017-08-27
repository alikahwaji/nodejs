const express = require('express')
const hbs = require('hbs')

var app = express()


app.use(express.static(__dirname+ '/public'))
app.set('view engine', 'hbs')
app.get('/', (req, res) => {
  // res.send('<h1>Hello and woelcome to the weather app</h1>')
  res.send({
    name: 'Ali',
    likes: [
      'Barcelona',
      'Messi'
    ]
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
