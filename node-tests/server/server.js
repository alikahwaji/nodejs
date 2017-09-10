const express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.send('Wlecome to our home page')
})

app.listen(3000)
