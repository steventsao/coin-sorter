'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coinSpecs = require('./coin-specs.js');

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
    value: function sort(coins) {
      var _this = this;

      if (!coins.length) {
        // pass to count machine or display results
        console.log('Sorting complete.');
        for (var property in this) {
          console.log('There are ' + property.length + ' ' + property);
        }
        return;
      }
      setTimeout(function () {
        // removes one coin from parameter and run it through the sorting process.
        var coin = coins.shift();
        console.log('sorting coin: ' + coin.weight);
        for (var coinType in _coinSpecs.coinSpecs) {
          if (coin.diameter === _coinSpecs.coinSpecs[coinType].diameter && coin.weight === _coinSpecs.coinSpecs[coinType].weight && _this.vagueCheck(coin.weight, _coinSpecs.coinSpecs[coinType].weight)) {
            console.log('this is a ' + coinType);
            _this[coinType + 's'].push(coin);
          } else {
            _this.nonCoins.push(coin);
          }
        }
        _this.sort(coins);
      }, 500);
    }
  }, {
    key: 'startSort',
    value: function startSort() {
      this.sort(this.coins);
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