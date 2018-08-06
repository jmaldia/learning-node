const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=126%20hackett%20place%20rutherford',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(error, undefined, 2));
    if (response.statusCode === 200) {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        // console.log(JSON.stringify(response, undefined, 2)); // How to pretty print on json on console
    }
});

