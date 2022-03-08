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