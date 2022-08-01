import type { CellType } from '../types/Marks';

const calculateWinner = (squares: CellType): null | string => {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let lines of possibleLines) {
    const [a, b, c] = lines;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
};

export default calculateWinner;
