//creating an app js file for notes-node 

console.log('Starting app.js');

const fs = require('fs');
const os =require ('os');
const notes = require ('./notes.js')

// var res =notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}.`);

var sum = notes.addNumber(9, -2);
console.log('addNumber= '+ sum);