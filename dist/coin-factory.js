'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _coin = require('./coin.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var coinFactory = function () {
  function coinFactory(coins) {
    _classCallCheck(this, coinFactory);

    this.coins = coins || [];
  }

  _createClass(coinFactory, [{
    key: 'makeCoins',
    value: function makeCoins() {
      var number = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];

      var count = 0;
      while (count < 100) {
        count++;
        var coin = new _coin.Coin();
        this.coins.push(coin);
      }
    }
  }]);

  return coinFactory;
}();

exports.default = coinFactory;