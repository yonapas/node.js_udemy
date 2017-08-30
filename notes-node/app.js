console.log("Starting app.");

//file, OS (node.js/api/)
//fs.appendFile

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNot();
console.log(res);

var add = notes.add(3,-7);
console.log("result:", notes.add(88, -54));
//var user = os.userInfo();
//console.log(user);
//fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}. `)

//os.userInfo
