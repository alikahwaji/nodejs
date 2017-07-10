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

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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