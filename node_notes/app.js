console.log('Starting App')

const fs = require('fs')
const os = require('os')

var user = os.userInfo()

fs.appendFile('greeting.txt', ` Hello ${user.username}`)

fs.appendFile('goodbye.txt', 'See you soon')

fs.appendFile('info-card.txt', 'Ali Ghalib Younis Kahwaji')
