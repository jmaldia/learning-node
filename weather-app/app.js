const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=126%20hackett%20place%20rutherford',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(error, undefined, 2));
    if (response.statusCode === 400) {
        console.log(body.results[0].geometry.location.lat);
        console.log(JSON.stringify(response, undefined, 2)); // How to pretty print on json on console
    }
});

