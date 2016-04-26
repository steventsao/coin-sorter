import { Coin } from '../src/coin.js';
import expect from 'expect';

describe('Coin', () => {
  it('should have three properties', () => {

    let coin = new Coin({});
    expect(Object.keys(coin).length).toEqual(3);
  });
});
