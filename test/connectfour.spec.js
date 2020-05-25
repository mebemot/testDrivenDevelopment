const calculateWinner = require("../connectfour");
const checkCol = require("../connectfour");
const {
  coordsToIndex,
  indexToCoords,
  findStart,
  getLine,
  checkLine,
} = require("../connectfour");

const rows = 6;
const cols = 7;
const squares = new Array(rows * cols).fill(null);

/*describe("can check any row with last clicked in any position", () => {
  test("if win, calculateWinner(squares, 0) should return ['playerx', [0,1,2,3]]", () => {
    squares[1] = squares[2] = squares[3] = squares[0] = "playerx"; //setting up winning line
    const [player, cells] = calculateWinner(squares, 0);
    expect(player).toMatch("playerx");
    expect(cells).toStrictEqual([0, 1, 2, 3]);
  });
  test("if win, calculateWinner(squares, 10) should return ['playerx', [9,10,11,12]]", () => {
    squares[9] = squares[10] = squares[11] = squares[12] = "playerx"; //setting up winning line
    const [player, cells] = calculateWinner(squares, 10);
    expect(player).toMatch("playerx");
    expect(cells).toStrictEqual([9, 10, 11, 12]);
  });
  test("if win, calculateWinner(squares, 41) should return ['playerx', [38,39,40,41]]", () => {
    squares[38] = squares[39] = squares[40] = squares[41] = "playerx"; //setting up winning line
    const [player, cells] = calculateWinner(squares, 41);
    expect(player).toMatch("playerx");
    expect(cells).toStrictEqual([38, 39, 40, 41]);
  });
  test("if no win, calculateWinner(squares, 0) should return [null, [null]]", () => {
    squares[0] = "playery";
    expect(calculateWinner(squares, 0)).toBeNull;
  });
});


describe("can check any column with last clicked in any position", () => {
  test("if win, col 1 & lastClicked squares[8], returns ['playerx',[1,8,15,22]", () => {
    squares[1] = squares[8] = squares[15] = squares[22] = "playerx"; //setting up winning line
    const [player, cells] = checkCol(squares, 8);
    expect(player).toMatch("playerx");
    expect(cells).toStrictEqual([1,8,15,22]);
  });
});
*/

test.todo("checkWinner");

describe("indexToCoords(index) returns [rowPosition,colPosition]", () => {
  test("indexToCoords(0) returns [0,0]", () => {
    expect(indexToCoords(0)).toStrictEqual([0, 0]);
  });
  test("indexToCoords(41) returns [5,6]", () => {
    expect(indexToCoords(41)).toStrictEqual([5, 6]);
  });
});

describe("coordsToIndex([rowPosition,colPosition]) returns index", () => {
  test("coordsToIndex([0,0]) returns 0", () => {
    expect(coordsToIndex([0, 0])).toStrictEqual(0);
  });
  test("coordsToIndex([5,6]) returns 41", () => {
    expect(coordsToIndex([5, 6])).toStrictEqual(41);
  });
  test("coordsToIndex([1,0]) returns 7", () => {
    expect(coordsToIndex([1, 0])).toStrictEqual(7);
  });
});

describe("findStart(index, [rowStep,colStep]) returns [rowPos,colPos]", () => {
  test("findStart(6, [0, 1]) returns [0, 2]", () => {
    expect(findStart(6, [0, 1])).toStrictEqual([0, 2]);
  });
});

describe("getLine([rowPos, colPos], [rowStep,colStep]) returns [potentialWinningLine]", () => {
  test("HORIZONTAL: getLine([0,3], [0, 1]) returns [3, 4, 5, 6]", () => {
    expect(getLine([0, 3], [0, 1])).toStrictEqual([3, 4, 5, 6]);
  });
  test("VERTICAL: getLine([0,3], [1, 0]) returns [3, 10, 17, 24, 31, 38]", () => {
    expect(getLine([0, 3], [1, 0])).toStrictEqual([3, 10, 17, 24, 31, 38]);
  });
  test("DIAGNAL SE: getLine([0,3], [1, 1]) returns [3, 11, 19, 27]", () => {
    expect(getLine([0, 3], [1, 1])).toStrictEqual([3, 11, 19, 27]);
  });
  test("DIAGNAL SW: getLine([0,3], [1, -1]) returns [3, 9, 15, 21]", () => {
    expect(getLine([0, 3], [1, -1])).toStrictEqual([3, 9, 15, 21]);
  });
});

describe("checkLine([potentialWinningLine]) returns [winningLine] or [null]", () => {
  test("checkLine([0, 1, 2, 3, 4, 5, 6]) returns [2, 3, 4, 5]", () => {
    squares[0] = squares[1] = squares[6] = "playerx";
    squares[3] = squares[2] = squares[4] = squares[5] = "playery"; //setting up winning line
    expect(checkLine([0, 1, 2, 3, 4, 5, 6], squares)).toStrictEqual([
      2,
      3,
      4,
      5,
    ]);
  });
});
