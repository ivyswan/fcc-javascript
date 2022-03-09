// Note: UpperCamelCase should be used by convention for ES6 class names
class Vegetable {
    constructor(newVegetable) {
        this.name = newVegetable;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'