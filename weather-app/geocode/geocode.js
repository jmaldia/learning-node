const request = require('request');

// This function accepts one argument - the address
// It takes the address and sends a request to the google maps api
// The result sent 
let geocodeAddress = (address) => {
    let encodedAdress = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=${encodedAdress}`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            console.log('Unable to connect with the Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find the address');
        } else if (body.status === 'OK') {
            console.log(`Address   : ${body.results[0].formatted_address}`);
            console.log(`Latitude  : ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
            // console.log(JSON.stringify(response, undefined, 2)); // How to pretty print on json on console
        }
    });

    // return body;
}

// Export the function so that you can use it on app.js
module.exports.geocodeAddress = geocodeAddress;
// module.exports = {
//     geocodeAddress
// }