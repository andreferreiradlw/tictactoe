import type { CellType } from '../../types/Marks';
import isBoardFull from '../boardFull';

describe('Utils | isBoardFull', () => {
  it('Should return true when board is full', () => {
    const cells = Array(9).fill('X');

    expect(isBoardFull(cells)).toBe(true);
  });

  it('Should return false when board is empty', () => {
    const cells = Array(9).fill(null);

    expect(isBoardFull(cells)).toBe(false);
  });

  it('Should return false when there is only one cell empty', () => {
    const cells: CellType = ['X', 'O', 'O', null, 'X', 'O', 'O', 'X', 'X'];

    expect(isBoardFull(cells)).toBe(false);
  });
});
