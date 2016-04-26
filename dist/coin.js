'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _coinSpecs = require('./coin-specs.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coin = function () {
  function Coin(properties) {
    _classCallCheck(this, Coin);

    var type = (0, _lodash.sample)(Object.keys(_coinSpecs.coinSpecs));
    this.weight = this.vary(_coinSpecs.coinSpecs[type].weight);
    this.diameter = _coinSpecs.coinSpecs[type].diameter;
    this.thickness = _coinSpecs.coinSpecs[type].thickness;
  }

  _createClass(Coin, [{
    key: 'vary',
    value: function vary(weight) {
      // 40% chance the coin will be outside of the tolerant range
      return weight * (0, _lodash.sample)([0.96, 0.98, 1, 1.02, 1.04]);
    }
  }]);

  return Coin;
}();

exports.Coin = Coin;

// Coin specs
// https://www.usmint.gov/about_the_mint/?action=coin_specifications