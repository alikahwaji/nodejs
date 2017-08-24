console.log('Starting Notes')

const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }
  var duplicatNotes = notes.filter((note) => note.title === title)
  if (duplicatNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var listNote = () => {
  console.log('Listing Notes')
}

var readNote = (title) => {
  console.log('Reading notes', title)
}

var removeNote = (title) => {
  var notes = fetchNotes()
  var filterNotes = notes.filter((note) => note.title !== title)
  saveNotes(filterNotes)
  return notes.length !== filterNotes.length
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
