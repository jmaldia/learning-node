const yargs = require('yargs');

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

let gAddy = geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

// console.log(gAddy);