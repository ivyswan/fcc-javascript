function Bird(name) {
    this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

// Iterate Over All Properties

// using for in statement
for (let property in duck) {
    // check if duck has that certain property
    if (duck.hasOwnProperty(property)) {
        // if duck has that property, then add it to the ownProps array
        ownProps.push(property);
    } else {
        // if duck doesn't have that property, then add it to the prototypeProps array
        prototypeProps.push(property);
    }
}

console.log(ownProps); // ["name"]
console.log(prototypeProps); // ["numLegs"]


// more efficient way is to set the prototype to a new object but this will erase the constructor property
Bird.prototype = {
    constructor: Bird, // remember to define the constructor property!!!
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};


// Bird.prototype and Dog.prototype will both have describe method written in the Animal.prototype
function Animal() { };
Animal.prototype = {
    constructor: Animal,
    describe: function () {
        console.log("My name is " + this.name);
    }
};
Bird.prototype = {
    constructor: Bird
};
Dog.prototype = {
    constructor: Dog
};


// create two instances of Animal named duck and beagle
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);


// Set the Child's Prototype to an Instance of the Parent
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();

// ** When an object inherits its prototype from another object, it also inherits the supertype's constructor property
//Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
