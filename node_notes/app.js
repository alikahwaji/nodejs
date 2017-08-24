console.log('Starting App')

const _ = require('lodash')
const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0]
console.log('Command : ', command)
console.log('Yargs', argv)

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created')
    console.log('--')
    console.log(`Title : ${note.title}`)
    console.log(`Body : ${note.body}`)
  } else {
    console.log('Note taken')
  }
} else if (command === 'list') {
  notes.listNote()
} else if (command === 'read') {
  notes.readNote(argv.title)
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(messa)
} else if (command === 'edit') {
  notes.editNote(argv.title)
} else {
  console.log('Command not found')
}

// Yargs is a npm package that help us to parser .
// using process.argv in parsering can be hard, we have to write alot
// of code to parse out the hyphens , the equal and the optional qoutes.
// Yargs do all that and put it on an object to access it.
//
