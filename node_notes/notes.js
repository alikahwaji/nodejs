console.log('Starting Notes')

const fs = require('fs')

var addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  }

  try {
    var notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString)
  } catch (e) {

  }

  var duplicatNotes = notes.filter((note) => note.title === title)
  if (duplicatNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }
}

var listNote = () => {
  console.log('Listing Notes')
}

var readNote = (title) => {
  console.log('Reading notes', title)
}

var removeNote = (title) => {
  console.log('Rmoving notes', title)
}

var editNote = (title) => {
  console.log('Editing notes', title)
}

module.exports = {
  addNote,
  listNote,
  readNote,
  removeNote,
  editNote
}
