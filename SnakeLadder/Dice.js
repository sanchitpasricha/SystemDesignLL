class Dice {
  constructor(numberOfDice) {
    this.numberOfDice = numberOfDice;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1 * this.numberOfDice;
  }
}

module.exports = Dice;
