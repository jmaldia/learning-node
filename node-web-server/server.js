const express = require('express');

let app = express(); // create new express app

app.use(express.static(__dirname + '/public'));

// Route to serve up when a get request happens 
// request = req
// response = res
// Send text to server
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Jon',
        likes: [
            'Coding',
            'Watching Movies'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('This is the about page')
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: '500 Bad Gateway'
    })
});

// binds to port in machine to serve up
app.listen(3000, () => {
    console.log('Server is up in port 3000');
});