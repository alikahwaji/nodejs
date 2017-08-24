console.log('Starting Notes')

var addNote = (title, body) => {
  console.log('Adding Note', title, body)
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
