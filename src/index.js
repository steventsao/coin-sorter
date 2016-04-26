import SortingMachine from './sorting-machine.js';
import CoinFactory from './coin-factory.js';
import {
  counter
} from './counter.js';
import {
  values
} from 'lodash';

let machine = new SortingMachine({});
let factory = new CoinFactory();
let coins = factory.makeCoins();

machine.addCoins(coins);

// intentionally design {@func startSort} as async to simulate a sorting process
// that precedes counting of each coin type.
machine.startSort()
  .then(data => {
    for (var key in data) {
      console.log(`${key} is ${counter(data[key])}`);
    }
  });
