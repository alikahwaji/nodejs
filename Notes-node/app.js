//creating an app js file for notes-node 

console.log('Starting app.js');

const fs = require('fs');
const os =require ('os');
const notes = require ('./notes.js');
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('Ali'));

// var res =notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}.`);

// var sum = notes.addNumber(9, -2);
// console.log('addNumber= '+ sum);

var filteredArray = _.uniq(['Ali', 2, 'Ali', 1,2,3,4]);
console.log(filteredArray);