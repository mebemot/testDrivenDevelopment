let calculateWinner = require("../connectfour");
let rows = 6;
let cols = 7;
/*test("if win, calculateWinner(squares, 0) should return [playerx, winningLine]", () => {
  let squares = new Array(rows * cols).fill(null);
  squares[1] = squares[2] = squares[3] = squares[0] = "playerx"; //setting up winning line, squares[0] to squares[3].
  expect(calculateWinner(squares, 0)).toStrictEqual(["playerx", [0, 1, 2, 3]]);
});
test("correct row taken", () => {
  let squares = new Array(rows * cols).fill(null);
  squares[1] = squares[2] = squares[3] = squares[0] = "playerx"; //setting up winning line, squares[0] to squares[3].
  expect(calculateWinner(squares, 0)).toStrictEqual(["playerx", [0, 1, 2, 3]]);
});

test("if win, calculateWinner(squares, 0) should return [playerx, winningLine]", () => {
  let squares = new Array(rows * cols).fill(null);
  squares[1] = squares[2] = squares[3] = squares[0] = "playerx"; //setting up winning line, squares[0] to squares[3].
  expect(calculateWinner(squares, 0)).toStrictEqual(["playerx", [0, 1, 2, 3]]);
});

test("if no win, calculateWinner(squares, 0) should return [null, [null]]", () => {
  let squares = new Array(rows * cols).fill(null);
  squares[0] = "playery";
  expect(calculateWinner(squares, 0)).toBeNull
});

test("win any row w/ any position of last clicked e.g. 1", () => {
  let squares = new Array(rows * cols).fill(null);
  squares[1] = squares[2] = squares[3] = squares[0] = "playerx"; //setting up winning line, squares[0] to squares[3].
  const [player, cells] = calculateWinner(squares, 1);
  expect(player).toMatch('playerx');
  expect(cells).toStrictEqual([0, 1, 2, 3]);
});*/
test("win any row w/ any position of last clicked(10)", () => {
  let squares = new Array(rows * cols).fill(null);
  squares[11] = squares[8] = squares[9] = squares[10] = "playerx"; //setting up winning line, squares[0] to squares[3].
 const [player, cells] = calculateWinner(squares, 10);
 expect(player).toMatch('playerx');
 expect(cells).toStrictEqual([8,9,10,11]);
});

