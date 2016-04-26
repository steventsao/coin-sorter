'use strict';

var _sortingMachine = require('./sorting-machine.js');

var _sortingMachine2 = _interopRequireDefault(_sortingMachine);

var _coinFactory = require('./coin-factory.js');

var _coinFactory2 = _interopRequireDefault(_coinFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var machine = new _sortingMachine2.default({});
var factory = new _coinFactory2.default();
var coins = factory.makeCoins();

machine.addCoins(coins);
machine.startSort();