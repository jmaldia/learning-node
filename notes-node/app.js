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
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove' || command === 'delete') {
    notes.deleteNote(argv.title);
} else {
    console.log('Command not recognized');
}