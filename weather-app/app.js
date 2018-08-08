const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

let latitude, longitude;

// result of final object
const argv = yargs
    .options({
        a: {
            demand: true, 
            alias: 'address',
            describe: 'Address to fetch weather for', 
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
    }

    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(`It's currently ${weatherResults.temperature} degrees. \nIt feels like ${weatherResults.apparentTemperature} degrees.`);
        }
    });
});