var getUserSync = require('./getUserSync');

console.log('Starting user1');
var user1 =getUserSync('123');
console.log('user1',user1);

console.log('Starting user2')
var user2 = getUserSync('321');
console.log('user2',user2);

var sum = 1+2;
console.log('The sum is '+ sum);