console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

var user = os.userInfo()
    //console.log(user)

fs.appendFile('greeting.txt', `Hello ${user.username} !`)