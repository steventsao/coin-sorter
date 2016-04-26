import expect from 'expect';
import SortingMachine from '../src/sorting-machine.js';
import CoinFactory from '../src/coin-factory.js';

describe('Coin Factory', () => {
  it('should generate 100 coins by default', () => {
    let factory = new CoinFactory();
    let coins = factory.makeCoins();
    expect(coins.length).toEqual(100);
  });
});

describe('Sorting Machine', () => {
  it('should exist', () => {
    expect(SortingMachine).toExist();
  });
});
