'use strict';

var _sortingMachine = require('./sorting-machine.js');

var _sortingMachine2 = _interopRequireDefault(_sortingMachine);

var _coinFactory = require('./coin-factory.js');

var _coinFactory2 = _interopRequireDefault(_coinFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var machine = new _sortingMachine2.default({});
// console.log(machine.coins);
var factory = new _coinFactory2.default();
var coins = factory.makeCoins();
machine.addCoins(coins);
machine.startSort();

// Choose a diagram format you believe best conveys the logic and behavior of the system.

// The coin system takes only American legal tender, but any coin shaped object could be input.

// You can read any imaginable feature from the physical coin except its true identity (as a nickel, quarter, etc)

// The system will categorize each coin by its type (e.g. nickel, quarter, etc) using a minimal number of features.

// The system will output a count of each type of coin it identifies.

// implement a conveyer belt that carries all circular objects
// separate sorting from counting
// sorting
// diameter
// thickness
// weight
// may vary
// https://www.usmint.gov/about_the_mint/?action=coin_specifications
// implement factories to share sorting mechanism

// startMachine([1, 2, 3]);