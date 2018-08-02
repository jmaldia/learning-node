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

// Utility function to print items
let print = (note) => {
    console.log(`-----\nTitle: ${note.title}\n-----`);
    console.log(`Body: ${note.body}\n-----`);
}

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
    let notesRetrievedAll = notes.getAll();

    if (notesRetrievedAll) {
        notesRetrievedAll.forEach((note) => {
            console.log(`-----\nTitle: ${note.title}\n-----`);
            console.log(`Body: ${note.body}\n-----`);
        });
    }
} else if (command === 'read') {
    let noteRetrieved = notes.readNote(argv.title);
    console.log(retrievedNote);

    if (noteRetrieved) {
        console.log(`-----\nTitle: ${noteRetrieved[0].title}\n-----`);;
        console.log(`Body: ${noteRetrieved[0].body}\n-----`);
    } else {
        console.log('The note does not exist');
    }
} else if (command === 'remove' || command === 'delete') {
    let noteRemoved = notes.deleteNote(argv.title);
    let message = noteRemoved ? 'The note was deleted' : 'The note does not exist';
    console.log(message);
} else {
    console.log('Command not recognized');
}