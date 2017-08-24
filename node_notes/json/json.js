
const fs = require('fs')

var obj = {
  firstName: 'Ali',
  lastName: 'Kahwaji'
}

var stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(stringObj)

var personString = '{"name":"Ali", "age":37}'
var person = JSON.parse(personString)
console.log(typeof person)
console.log(person)

var originalNote = {
  title: 'Kahwaji',
  body: 'Ali Ghalib'
}

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)