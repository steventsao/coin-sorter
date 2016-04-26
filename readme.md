## Coin System Demo ##

![Demo](http://i.giphy.com/127U7JFJpfoHew.gif)

### About ###
+ The simulation starts with `coin-factory` generating a default of 100 randomized coins using the constructor from `coin.js`. 
+ The coins are generated with an intentional 40% error rate, and are passed to `sorting-machine` that verifies the: 
  + weight, 
  + diameter, 
  + and thickness of each coin based on `coin-specs.js` by [United States Mint](https://www.usmint.gov/about_the_mint/?action=coin_specifications). 
+ The sorted coins are passed to `counter.js` that increments after removing a coin from the input.
+ The modules are assembled in `./src/index.js`.

There are several inconveniences intentionally designed to simulate the process chain:
+ The 50 ms process time for each coin in `sorting-machine`.
+ Having a counter mechanism rather than using `Array.prototype.length` to get coin count per type.
+ Having functions `vagueCheck` in `sorting-machine.js` and `vary` in `coin.js` to simulate the weight of a coin after long usage.

### Running ###
`npm install`

`npm start`
### Testing ###
`npm test`

