let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked!'); // can pass one argument - can pass an object
        // reject('Unable to fulfill promise.');
    }, 2500);
});

somePromise.then((message) => { // only gets called when promise is fulfilled
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
})  