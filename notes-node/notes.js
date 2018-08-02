console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title, 
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    } else {
        console.log('The note title already exists. Please change the title of your note.');
    }
};

let getAll = () => {
    console.log(`Getting all notes`);
};
let readNote = (title) => {
    console.log(`This is your note: ${title}`);
};
let deleteNote = (title) => {
    console.log(`${title} deleted`);
};

module.exports = {
    addNote, // identical to this -> addNote: addNote
    getAll, 
    readNote, 
    deleteNote
};