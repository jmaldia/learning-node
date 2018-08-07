const request = require('request');

// This function accepts one argument - the address
// It takes the address and sends a request to the google maps api
// The result sent 
let geocodeAddress = (address, callback) => {
    let encodedAdress = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=${encodedAdress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect with the Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address, 
                latitude: body.results[0].geometry.location.lat, 
                longitude: body.results[0].geometry.location.lng
            });
        }
    });

    // return body;
}

// Export the function so that you can use it on app.js
module.exports.geocodeAddress = geocodeAddress;
// module.exports = {
//     geocodeAddress
// }