import SortingMachine from './sorting-machine.js';
import CoinFactory from './coin-factory.js';

let machine = new SortingMachine({});
let factory = new CoinFactory();
let coins = factory.makeCoins();

machine.addCoins(coins);
machine.startSort();
