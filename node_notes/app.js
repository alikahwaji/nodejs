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
    notes.logNote(note)
  } else {
    console.log('Note taken')
  }
} else if (command === 'list') {
  var listNotes = notes.listNote()
  console.log(`Printing ${listNotes.length} note(s)`)
  listNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
  var note = notes.readNote(argv.title)
  if (note) {
    console.log('Note found')
    notes.logNote(note)
  } else {
    console.log('Note not found!')
  } 
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message)
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
