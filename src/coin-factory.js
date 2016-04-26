import { random } from 'lodash';
import { Coin } from './coin.js';

class CoinFactory {
  makeCoins(number = 100) {
    let count = 0;
    let coins = [];
    while (count < 100) {
      count++;
      let coin = new Coin({});
      coins.push(coin);
    }
    return coins;
  }
}



export default CoinFactory;
