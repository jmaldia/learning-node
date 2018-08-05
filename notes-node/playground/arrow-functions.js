let square = x => x * x;
console.log(square(3));

let user = {
    name: 'Jon',
    sayHi: () => {
        console.log(arguments); // Arguments is not bound
        console.log(`Hi. I'm ${this.name}`); // This is not bound
    }, // this does not bind
    sayHiAlt () { // Use this when you need this and arguments
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);