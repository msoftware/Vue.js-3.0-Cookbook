"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.FoodChainType = void 0;
var FoodChainType;
(function (FoodChainType) {
    FoodChainType["Carnivorous"] = "carnivorous";
    FoodChainType["Herbivorous"] = "herbivorous";
    FoodChainType["Omnivorous"] = "omnivorous";
})(FoodChainType = exports.FoodChainType || (exports.FoodChainType = {}));
class Animal {
    constructor(params) {
        this.name = params.name;
        this.sound = params.sound || '';
        this.family = params.family;
        this.foodChainType = params.foodChainType;
    }
    whoAmI() {
        console.log(`I am a ${this.name}, my family is ${this.family}. My diet is ${this.foodChainType}.`);
        if (this.sound) {
            console.log([...Array(2).fill(this.sound)].join(', '));
        }
    }
    makeSound() {
        console.log(this.sound);
    }
}
exports.Animal = Animal;
