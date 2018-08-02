console.log('Starting notes.js');

const fs = require('fs');

// Utility function to get the notes
let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
// Utility function to save the notes
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
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
};
let readNote = (title) => {
    let notes = fetchNotes();
    let noteRetrieved = notes.filter((note) => note.title === title);

    return noteRetrieved.length === 1 ? noteRetrieved : false;
};
let deleteNote = (title) => {
    let notes = fetchNotes();
    let notesWithDeleted = notes.filter((note) => note.title !== title);
    saveNotes(notesWithDeleted);

    return (notes.length !== notesWithDeleted.length) ? true : false;
};

module.exports = {
    addNote, // identical to this -> addNote: addNote
    getAll, 
    readNote, 
    deleteNote
};