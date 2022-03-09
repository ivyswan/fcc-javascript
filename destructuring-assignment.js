// ES5
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
// ES6 Destructuring assignment
const { name, age } = user;


// ******************** //
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// *** Destructuring Assignment to Extract Values from Objects *** //
const { today, tomorrow } = HIGH_TEMPERATURES;

// Destructuring Assignment to Assign Variables from Objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


// ******************** //
// *** Destructuring Assignment to Assign Variables from Nested Objects *** //
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// *** Destructure values from nested objects *** //
const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
// extract the values of object properties and assign them to variables with the same name
const { johnDoe: { age, email } } = user;
// assign an object properties' values to variables with different names
const { johnDoe: { age: userAge, email: userEmail } } = user;


// ******************** //
// *** Destructuring Assignment to Assign Variables from Arrays *** //
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); //1, 2, 5

//swap the values
let a = 8, b = 6;
[a, b] = [b, a];

// *** Destructuring Assignment with the Rest Parameter to Reassign Array Elements *** //
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); //1, 2
console.log(arr); //[3, 4, 5, 7]

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);

// *** Destructuring Assignment to Pass an Object as a Function's Parameters *** //
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    //code
}

const profileUpdate = ({ name, age, nationality, location }) => {
    //code
}

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

//const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({ max, min }) => (max + min) / 2.0;