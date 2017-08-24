console.log('Starting App')

const _ = require('lodash')
const fs = require('fs')

const notes = require('./notes')

var command = process.argv[2]
console.log('Command : ', command)
console.log(process.argv)

if (command === 'add') {
  console.log('Adding new note')
} else if (command === 'list') {
  console.log('listing all the note')
} else if (command === 'read') {
  console.log('Fetaching a note')
} else if (command === 'remove') {
  console.log('Removing a note')
} else if (command === 'edit') {
  console.log('Editing a note')
} else {
  console.log('Command not found')
}
