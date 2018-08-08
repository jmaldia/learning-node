const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/f6576bc9d29adeee72cabe3ed763bf87/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {    
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to connect to fetch the weather.');
        }
    });
}

module.exports = {
    getWeather
}
