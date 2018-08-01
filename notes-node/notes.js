console.log('Starting notes.js');

let addNote = (title, body) => {
    console.log(`Adding note: ${title} - ${body} `);
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