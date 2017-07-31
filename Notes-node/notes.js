// console.log(module);
// module.exports.age = 25;
// module.exports.addNumber =  (a,b) => {
//     // console.log('addNumber');
//     return a+b;
// }
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New Note';
// }

/*----------------------------------------------*/

console.log('Strating notes.js');

const fs = require ('fs')

var fetchNotes = () => {

    try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
    } catch (e) {

    }

};

var saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
    var notes =fetchNotes();
    var note ={
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes)
    return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getReadAll = (title) => {
    console.log('Reading note ',title);
};

var getRemoveNote = (title) => {
    console.log('Removing note ',title);
};

module.exports ={
    addNote: addNote,
    getAll: getAll,
    getReadAll: getReadAll,
    getRemoveNote: getRemoveNote
};