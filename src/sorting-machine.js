import { coinSpecs } from './coin-specs.js';

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

  sort(coins) {
    if(!coins.length) {
      // pass to count machine or display results
      console.log('Sorting complete.', this);
      return;
    }
    setTimeout(() => {
      // removes one coin from parameter and run it through the sorting process.
      let coin = coins.shift();
      console.log('sorting coin: ' + coin.diameter);
      for (var coinType in coinSpecs) {
        if (coin.diameter === coinSpecs[coinType].diameter &&
            coin.weight === coinSpecs[coinType].weight &&
            this.vagueCheck(coin.weight, coinSpecs[coinType].weight)) {
              console.log('this is a ' + coinType);
              this[coinType + 's'].push(coin);
        } else {
          console.log(`not a ${coinType}...`);
          this.nonCoins.push(coin);
        }
      }
      this.sort(coins);
    }, 1000);
  }
  startSort() {
    this.sort(this.coins);
  }
  // simulates property change on old coin that had picked up dirt and oil
  vagueCheck(actualProperty, expectedProperty) {
    if (actualProperty < expectedProperty * 1.03 &&
        actualProperty > expectedProperty * 0.97) {
          return true;
    } else {
      return false;
    }
  }
}



export default SortingMachine;
