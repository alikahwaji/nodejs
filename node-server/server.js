const express = require('express')

var app = express()

app.use(express.static(__dirname+ '/'))

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

app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/error', (req, res) => {
  res.send({
    errorMessage: 'Link broken'
  })
})

app.listen(3000)
