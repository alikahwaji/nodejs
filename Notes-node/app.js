//creating an app js file for notes-node 

//console.log('Starting app.js');

// const os =require ('os');
// console.log(_.isString(true));
// console.log(_.isString('Ali'));
// var res =notes.addNote();
// console.log(res);
// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}.`);
// var sum = notes.addNumber(9, -2);
// console.log('addNumber= '+ sum);
//var filteredArray = _.uniq(['Omar']);
//console.log(filteredArray);
/*-------------------------------------------------------------*/

console.log('Strating app.js');

const fs = require('fs');
const notes = require ('./notes.js');
const _ = require('lodash');
const yargs = require ('yargs');


const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
    //console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') { 
    //console.log('Reading notes');
    notes.getReadAll(argv.title);
} else if (command === 'remove') {
    //console.log('Removing notes')
    notes.getRemoveNote(argv.title)
}  else {
    console.log('Command not recongized');
}