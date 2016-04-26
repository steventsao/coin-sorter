import {
  tail
} from 'lodash';

let counter = (coins) => !coins.length ?
  0 : 1 + counter(tail(coins));

export {
  counter
};
