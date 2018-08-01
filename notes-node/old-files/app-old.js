console.log('Starting app');

const fs = require('fs');
const os = require('os');os
const notes = require('./notes.js');
const _ = require('lodash');
const date = new Date();

let user = os.userInfo();
let res = notes.addNote();

let myArray = [5, 3, 2, 4, 1, 2, 10]

fs.appendFile('greetings.txt', `[${date.toDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] >> Hello ${user.username}! ${res}: your age is ${notes.age}\n\n`, function(err) {
    if (err){
        console.log('Unable to  write to file');
    }
});

console.log(res);

// Call add function and print on console
console.log(notes.add(129, 121));

// Use lodash
console.log(_.isString(12));