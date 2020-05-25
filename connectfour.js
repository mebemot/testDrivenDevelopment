const colCount = 7;
const rowCount = 6;
const winningLineLength = 4;
function calculateWinner(squares, lastClicked) {}

function checkRow(squares, lastClicked) {
  const startOfRow = Math.floor(lastClicked / colCount) * colCount;
  const endofRow = startOfRow + (colCount - 1);
  for (let i = startOfRow; i < endofRow; ++i) {
    if (
      squares[i] &&
      squares[i] == squares[i + 1] &&
      squares[i] == squares[i + 2] &&
      squares[i] == squares[i + 3]
    ) {
      return [squares[i], [i, i + 1, i + 2, i + 3]];
    }
  } //end of for loop
  return [null, [null]];
}

function checkCol(squares, lastClicked) {
  const startOfCol = lastClicked % colCount;
  const endOfCol = startOfCol + (rowCount - 1);
  for (let i = startOfCol; i < endOfCol; i += colCount) {
    if (
      squares[i] &&
      squares[i] == squares[i + colCount] &&
      squares[i] == squares[i + 2 * colCount] &&
      squares[i] == squares[i + 3 * colCount]
    )
      return [
        squares[i],
        [i, i + colCount, i + 2 * colCount, i + 3 * colCount],
      ];
  }
}
function indexToCoords(index) {
  let col = index % colCount;
  let row = Math.floor(index / colCount);
  return [row, col];
}

function coordsToIndex([row, col]) {
  index = row * colCount + col;
  return index;
}

function findStart(index, [rowStep, colStep]) {
  var potentialWinner = [];
  [currentRow, currentCol] = indexToCoords(index);
  let rowPos = currentRow,
    colPos = currentCol;
  for (
    rowPos, colPos;
    rowPos >= 0 &&
    rowPos > currentRow - winningLineLength &&
    colPos >= 0 &&
    colPos > currentCol - winningLineLength;
    rowPos -= rowStep, colPos -= colStep
  ) {}
  return [rowPos, colPos];
}
function getLine([rowPos, colPos], [rowStep, colStep]) {
  var potentialWinner = [];
  for (
    rowPos, colPos;
    rowPos < rowCount && colPos < colCount && colPos >= 0;
    rowPos += rowStep, colPos += colStep
  ) {
    potentialWinner.push(coordsToIndex([rowPos, colPos])); //array of line to be checked
  }
  return potentialWinner;
}

function checkLine(potentialWinner, squares) {
  var winningLine = [];

  for (let i = 0; i < potentialWinner.length; ++i) {
    if (winningLine.length == 0 && squares[potentialWinner[i]]) {
      winningLine.push(potentialWinner[i]);
    } else if (squares[potentialWinner[i]] == squares[potentialWinner[i - 1]]) {
      winningLine.push(potentialWinner[i]);
    } else if (winningLine.length < winningLineLength) {
      winningLine = [];
      winningLine.push(potentialWinner[i]);
    }
  }
  return winningLine;
}

module.exports = {
  coordsToIndex,
  indexToCoords,
  findStart,
  getLine,
  checkLine,
};
