'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coinSpecs = require('./coin-specs.js');

var _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortingMachine = function () {
  function SortingMachine(properties) {
    _classCallCheck(this, SortingMachine);

    this.coins = properties.coins || [];
    this.cents = properties.cents || [];
    this.nickels = properties.nickels || [];
    this.dimes = properties.dimes || [];
    this.quarters = properties.quarters || [];
    this.halfDollars = properties.halfDollars || [];
    this.nonCoins = properties.nonCoins || [];
  }

  _createClass(SortingMachine, [{
    key: 'addCoins',
    value: function addCoins(coins) {
      var _coins;

      this.coins = (_coins = this.coins).concat.apply(_coins, _toConsumableArray(coins));
    }
  }, {
    key: 'sort',
    value: function sort(cb) {
      var _this = this;

      console.log(this.coins.length, ' coins left');
      console.log(this.nonCoins.length, ' are invalid');
      if (!this.coins.length) {
        // pass to count machine or display results
        console.log('Sorting complete:');
        for (var property in this) {
          console.log('* ' + this[property].length + ' ' + property);
        }
        cb((0, _lodash.omit)(this, ['coins']));
        return;
      }
      setTimeout(function () {
        // removes one coin from parameter and run it through the sorting process.
        var coin = _this.coins.shift();
        var checked = 0;
        console.log('sorting coin: ' + coin.weight);
        for (var coinType in _coinSpecs.coinSpecs) {
          if (coin.diameter === _coinSpecs.coinSpecs[coinType].diameter && coin.thickness === _coinSpecs.coinSpecs[coinType].thickness && _this.vagueCheck(coin.weight, _coinSpecs.coinSpecs[coinType].weight)) {
            console.log('this is a ' + coinType);
            _this[coinType + 's'].push(coin);
            continue;
          } else {
            checked++;
            if (checked === 5) {
              _this.nonCoins.push(coin);
            }
          }
        }
        _this.sort(cb);
      }, 50);
    }
  }, {
    key: 'startSort',
    value: function startSort() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.sort(resolve);
      });
    }
    // simulates property change on old coin that had picked up dirt and oil

  }, {
    key: 'vagueCheck',
    value: function vagueCheck(actualProperty, expectedProperty) {
      if (actualProperty <= expectedProperty * 1.03 && actualProperty >= expectedProperty * 0.97) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return SortingMachine;
}();

exports.default = SortingMachine;