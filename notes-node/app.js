const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Display the specified note', {
        title: titleOptions
    })
    .command('remove', 'Delete the specified note', {
        title: titleOptions
    })
    .help()
    .argv;

// let command = process.argv[2]; -> change to:
let command = argv._[0];
// because: Yargs:  { _: [ 'remove' ], title: 'My note', '$0': 'app.js' }

if (command === 'add') {
    let noteAdded = notes.addNote(argv.title, argv.body);
   
    if (noteAdded === undefined) {
        console.log('The note title already exists. Please change the title of your note.');
    } else {
        console.log(`Note Successfully Added\n`);
        notes.logNote(noteAdded);
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    let noteRetrieved = notes.readNote(argv.title);

    if (noteRetrieved) {
        notes.logNote(noteRetrieved[0]);
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