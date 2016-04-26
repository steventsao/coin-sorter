class SortingMachine {
  constructor(coins) {
    this.coins = coins;
  }
  sort(coins) {
    if(!coins.length) {
      console.log('Sorting complete.');
      return;
    }
    setTimeout(() => {
      let coin = coins.shift();
      console.log('sorting coin: ' + coin);
      this.sort(coins);
    }, 1000);
  }
  startSort() {
    this.sort(this.coins);
  }
}

export default SortingMachine;
