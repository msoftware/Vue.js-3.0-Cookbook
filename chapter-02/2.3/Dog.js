"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
// Needs export to be available in test.ts
class Dog extends Animal_1.Animal {
    constructor() {
        super({
            name: 'Dog',
            sound: 'Wof!',
            family: 'Canidae',
            foodChainType: Animal_1.FoodChainType.Carnivorous,
        });
    }
}
exports.Dog = Dog;
