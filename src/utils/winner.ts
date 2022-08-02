import type { CellType } from '../types/Marks';

const calculateWinner = (cells: CellType): null | string => {
  const possibleLines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  // go over all the possible line patterns in the array
  // check if they all match
  for (let lines of possibleLines) {
    const [a, b, c] = lines;
    // return winner if the three cells match
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) return cells[a];
  }
  return null;
};

export default calculateWinner;
