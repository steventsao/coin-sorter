import {
  coinSpecs
} from './coin-specs.js';
import {
  omit
} from 'lodash';

class SortingMachine {
  constructor(properties) {
    this.coins = properties.coins || [];
    this.cents = properties.cents || [];
    this.nickels = properties.nickels || [];
    this.dimes = properties.dimes || [];
    this.quarters = properties.quarters || [];
    this.halfDollars = properties.halfDollars || [];
    this.nonCoins = properties.nonCoins || [];
  }

  addCoins(coins) {
    this.coins = this.coins.concat(...coins);
  }

  sort(cb) {
    console.log(this.coins.length, ' coins left');
    console.log(this.nonCoins.length, ' are invalid');
    if (!this.coins.length) {
      // pass to count machine or display results
      console.log('Sorting complete:');
      for (var property in this) {
        console.log(`* ${this[property].length} ${property}`);
      }
      cb(omit(this, ['coins']));
      return;
    }
    setTimeout(() => {
      // removes one coin from parameter and run it through the sorting process.
      let coin = this.coins.shift();
      let checked = 0;
      console.log('sorting coin: ' + coin.weight);
      for (var coinType in coinSpecs) {
        if (coin.diameter === coinSpecs[coinType].diameter &&
          coin.thickness === coinSpecs[coinType].thickness &&
          this.vagueCheck(coin.weight, coinSpecs[coinType].weight)) {
          console.log('this is a ' + coinType);
          this[coinType + 's'].push(coin);
          continue;
        } else {
          checked++;
          if (checked === 5) {
            this.nonCoins.push(coin);
          }
        }
      }
      this.sort(cb);
    }, 50);
  }
  startSort() {
      return new Promise((resolve, reject) => {
        this.sort(resolve);
      });
    }
    // simulates property change on old coin that had picked up dirt and oil
  vagueCheck(actualProperty, expectedProperty) {
    if (actualProperty <= expectedProperty * 1.03 &&
      actualProperty >= expectedProperty * 0.97) {
      return true;
    } else {
      return false;
    }
  }
}

export default SortingMachine;
