'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coin = undefined;

var _lodash = require('lodash');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coin = function Coin(properties) {
  _classCallCheck(this, Coin);

  // unless specified, the properties of a coin is randomized by the coin specs from a cent, nickel, dime, quarter, to half dollar. Every array sample is followed by two elements that do not belong to the coin spec to mimic the possibily of fake coins.
  this.weight = properties.weight || (0, _lodash.sample)([2.5, 5, 2.268, 5.67, 11.34, 7, 4]);
  this.diameter = properties.diameter || (0, _lodash.sample)([19.05, 21.21, 17.91, 24.26, 30.61, 38, 23]);
  this.thickness = properties.thickness || (0, _lodash.sample)([1.52, 1.95, 1.35, 1.75, 2.15, 1.7, 2.0]);
};

exports.Coin = Coin;

// Coin specs
// https://www.usmint.gov/about_the_mint/?action=coin_specifications