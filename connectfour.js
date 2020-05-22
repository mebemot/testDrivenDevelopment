function calculateWinner(squares, lastClicked) {
  const startOfRow = Math.floor(lastClicked / 7) * 7;
  const endofRow = startOfRow + 6;
  for (let i = startOfRow; i < endofRow; ++i) {
    if (
      squares[i] &&
      squares[i] == squares[i + 1] &&
      squares[i] == squares[i + 2] &&
      squares[i] == squares[i + 3]
    ) {
    
      //console.log(squares[i].toString());
    return [
        squares[i],
        [i, i + 1, i + 2, i + 3],
      ];
      //return(["playerx",[0,1,2,3]]);
    } else {
      return [null, [null]];
    }
  }
}

module.exports = calculateWinner;
