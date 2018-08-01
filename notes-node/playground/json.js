// let obj = {
//     name: "Jon"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// let personString = '{"name": "Jon","age": 42}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log(person.name, person.age);

const fs = require('fs');

let originalNote = {
    title: 'The Greatest Show on Earth', 
    body: 'OMG! This is pretty awesome!'
};

// originalNoteString
let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('./playground/notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

// note
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title, note.body);