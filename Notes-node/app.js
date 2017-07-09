//creating an app js file for notes-node 

console.log('Starting app.');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World!');
