const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');

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

let encodedAdress = encodeURIComponent(argv.address);
let geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    } 

    let latitude = response.data.results[0].geometry.location.lat;
    let longitude = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/f6576bc9d29adeee72cabe3ed763bf87/${latitude},${longitude}`
    console.log(`Temperature for ${response.data.results[0].formatted_address}`);

    return axios.get(weatherUrl);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It's currently ${temperature} degrees. \nIt feels like ${apparentTemperature} degrees.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});