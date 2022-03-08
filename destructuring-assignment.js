// ES5
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
// ES6 Destructuring assignment
const { name, age } = user;


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { today, tomorrow } = HIGH_TEMPERATURES;

// Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Destructure values from nested objects
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
