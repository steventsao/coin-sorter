import SortingMachine from './sorting-machine.js';
import CoinFactory from './coin-factory.js';

let machine = new SortingMachine({});
let factory = new CoinFactory();
let coins = factory.makeCoins();
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
