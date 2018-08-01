console.log('Starting notes.js');
// console.log(module);

module.exports.age = 42;

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}

// Challenge: Add function
// 2 arguments a and b

module.exports.add = (a, b) => {
    return a + b;
}