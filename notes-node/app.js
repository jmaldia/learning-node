console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;

// let command = process.argv[2]; -> change to:
let command = argv._[0];
// because: Yargs:  { _: [ 'remove' ], title: 'My note', '$0': 'app.js' }

console.log('\n------\nCommand: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    let noteAdded = notes.addNote(argv.title, argv.body);
   
    if (noteAdded === undefined) {
        console.log('The note title already exists. Please change the title of your note.');
    } else {
        console.log(`Note Successfully Added\n------`);
        console.log(`\nTitle: ${noteAdded.title}`);
        console.log(`\nBody: ${noteAdded.body}`);
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove' || command === 'delete') {
    let noteRemoved = notes.deleteNote(argv.title);
    let message = noteRemoved ? 'The note was deleted' : 'The note does not exist';
    console.log(message);
} else {
    console.log('Command not recognized');
}