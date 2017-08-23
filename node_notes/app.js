console.log('Starting App')

const _ = require('lodash')
const fs = require('fs')
const os = require('os')
const notes = require('./notes')

var res = notes.addNote()
console.log(res)

var result = notes.addNumbers(5, 4)
console.log(result)

var resultSub = notes.subNumbers(10, 8)
console.log(resultSub)

var resultDiv = notes.divNumbers(12, 3)
console.log(resultDiv)

var resultMulti = notes.multiNumbers(20, 4)
console.log(resultMulti)

console.log(_.isString(true))
console.log(_.isString(34))

var filterArray = _.uniq(['Ali', 2, 'Ali', 1, 2, 3, 4])

console.log(filterArray)

// var user = os.userInfo()

// fs.appendFile('greeting.txt', ` Hello ${user.username} ! You are ${notes.age}. `)

// fs.appendFile('goodbye.txt', 'See you soon')

// fs.appendFile('info-card.txt', 'Ali Ghalib Younis Kahwaji')
