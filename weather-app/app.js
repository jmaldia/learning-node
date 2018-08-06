const request = require('request');
const yargs = require('yargs');
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

let encodedAdress = encodeURIComponent(argv.a);

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    if (response.statusCode === 200) {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        // console.log(JSON.stringify(response, undefined, 2)); // How to pretty print on json on console
    }
});

