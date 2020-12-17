import {Animal, FoodChainType} from './Animal';

// Needs export to be available in test.ts
export class Dog extends Animal {
  constructor() {
    super({
      name: 'Dog',
      sound: 'Wof!',
      family: 'Canidae',
      foodChainType: FoodChainType.Carnivorous,
    });
  }
}
