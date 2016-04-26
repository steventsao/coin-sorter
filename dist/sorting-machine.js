'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortingMachine = function () {
  function SortingMachine(coins) {
    _classCallCheck(this, SortingMachine);

    this.coins = coins;
  }

  _createClass(SortingMachine, [{
    key: 'sort',
    value: function sort(coins) {
      var _this = this;

      if (!coins.length) {
        console.log('Sorting complete.');
        return;
      }
      setTimeout(function () {
        var coin = coins.shift();
        console.log('sorting coin: ' + coin);
        _this.sort(coins);
      }, 1000);
    }
  }, {
    key: 'startSort',
    value: function startSort() {
      this.sort(this.coins);
    }
  }]);

  return SortingMachine;
}();

exports.default = SortingMachine;