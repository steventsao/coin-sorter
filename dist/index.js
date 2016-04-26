'use strict';

var _sortingMachine = require('./sorting-machine.js');

var _sortingMachine2 = _interopRequireDefault(_sortingMachine);

var _coinFactory = require('./coin-factory.js');

var _coinFactory2 = _interopRequireDefault(_coinFactory);

var _counter = require('./counter.js');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var machine = new _sortingMachine2.default({});
var factory = new _coinFactory2.default();
var coins = factory.makeCoins();

machine.addCoins(coins);

// intentionally design {@func startSort} as async to simulate a sorting process
// that precedes counting of each coin type.
machine.startSort().then(function (data) {
  for (var key in data) {
    console.log(key + ' is ' + (0, _counter.counter)(data[key]));
  }
});