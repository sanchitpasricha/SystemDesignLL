const Dice = require("../Dice");
const assert = require("assert");

describe("Dice class", () => {
  it("Should return a number between 1 and 6 inclusive", () => {
    const dice = new Dice(1);
    const result = dice.rollDice();
    console.log(result);
    assert.ok((result) => 1 && result <= 6);
  });
});
