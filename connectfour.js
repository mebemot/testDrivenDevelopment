function calculateWinner(squares, lastClicked) {
  let winCheck = squares.slice(lastClicked, lastClicked + 4);
  if (
    winCheck[0] &&
    winCheck[0] == winCheck[1] &&
    winCheck[0] == winCheck[2] &&
    winCheck[0] == winCheck[3]
  ) {
    return [
      winCheck[0],
      [lastClicked, lastClicked + 1, lastClicked + 2, lastClicked + 3],
    ].toString();
  } else {
    return [null, [null]].toString();
  }
}

module.exports = calculateWinner;
