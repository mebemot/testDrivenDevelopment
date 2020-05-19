let calculateWinner = require("../connectfour");

test("calculateWinner(squares, 0) should return [player, winningLine]", () => {
    let squares = new Array(6 * 7).fill("player");
  expect(calculateWinner(squares, 0)).toMatch("player,0,1,2,3");
});
