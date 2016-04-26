import { sample } from 'lodash';
import { coinSpecs } from './coin-specs.js';
class Coin {
  constructor(properties) {
    var type = sample(Object.keys(coinSpecs));
    this.weight = this.vary(coinSpecs[type].weight);
    this.diameter = coinSpecs[type].diameter;
    this.thickness = coinSpecs[type].thickness;
  }

  vary(weight) {
    // 40% chance the coin will be outside of the tolerant range
    return weight * sample([0.96, 0.98, 1, 1.02, 1.04]);
  }
}

// Coin specs
// https://www.usmint.gov/about_the_mint/?action=coin_specifications
export { Coin };
