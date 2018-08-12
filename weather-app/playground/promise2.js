const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAdress = encodeURIComponent(address);

        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=${encodedAdress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect with the Google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address, 
                    latitude: body.results[0].geometry.location.lat, 
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });        
    });
};

geocodeAddress('191465656').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});