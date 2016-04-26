'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counter = undefined;

var _lodash = require('lodash');

var counter = function counter(coins) {
  return !coins.length ? 0 : 1 + counter((0, _lodash.tail)(coins));
};

exports.counter = counter;