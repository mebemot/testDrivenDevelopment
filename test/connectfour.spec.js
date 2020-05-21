let calculateWinner = require("../connectfour");
let rows = 6;
let cols = 7;

test("if win, calculateWinner(squares, 0) should return [playerx, winningLine]", () => {
  let squares = new Array(rows * cols).fill("null");
  squares[1] = squares[2] = squares[3] = squares[0] = "playerx"; //setting up winning line, squares[0] to squares[3].
  expect(calculateWinner(squares, 0)).toMatch("playerx,0,1,2,3");
});
test("if no win, calculateWinner(squares, 0) should return [null, [null]]", () => {
  let squares = new Array(rows * cols).fill("null");
  squares[0] = "playery";
  expect(calculateWinner(squares, 0)).toMatch(",");
});
