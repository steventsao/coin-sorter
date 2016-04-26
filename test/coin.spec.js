import { Coin } from '../src/coin.js';
import { coinSpecs } from '../src/coin-specs.js';
import expect from 'expect';
import { values } from 'lodash';

describe('Coin', () => {
  it('should have three properties', () => {

    let coin = new Coin({});
    expect(Object.keys(coin).length).toEqual(3);
  });

  describe('Coin Specs', () => {
    it('should contain 5 coin types', () => {
      expect(Object.keys(coinSpecs).length).toEqual(5);
    });

    it('each type should contain 3 properties', () => {
      for (var key in coinSpecs) {
        expect(Object.keys(coinSpecs[key]).length).toEqual(3);
      }
    });

    it('all properties are expressed in numbers', () => {
      for (var key in coinSpecs) {
        expect(values(coinSpecs[key])
          .every(prop => typeof prop === 'number')).toEqual(true);
      }
    });
  });
});
