import type { CellType } from '../../types/Marks';
import calculateWinner from '../winner';

describe('Utils | calculateWinner', () => {
  it('Should return null when board is empty', () => {
    const cells = Array(9).fill(null);

    expect(calculateWinner(cells)).toBe(null);
  });

  it('Should return null when board is full with no winner', () => {
    const cells: CellType = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'];

    expect(calculateWinner(cells)).toBe(null);
  });

  it('Should return the correct winner when board is full', () => {
    const cells: CellType = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'O', 'X'];

    expect(calculateWinner(cells)).toBe('O');
  });

  it('Should return the winner on the first horizontal line', () => {
    const cells: CellType = ['X', 'X', 'X', 'O', 'O', null, null, null, null];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the second horizontal line', () => {
    const cells: CellType = ['O', 'O', null, 'X', 'X', 'X', null, null, null];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the third horizontal line', () => {
    const cells: CellType = ['O', 'O', null, null, null, null, 'X', 'X', 'X'];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the first vertical line', () => {
    const cells: CellType = ['X', 'O', 'O', 'X', null, null, 'X', null, null];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the second vertical line', () => {
    const cells: CellType = ['O', 'X', 'O', null, 'X', null, null, 'X', null];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the third vertical line', () => {
    const cells: CellType = ['O', 'O', 'X', null, null, 'X', null, null, 'X'];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the first diagonal pattern', () => {
    const cells: CellType = ['X', 'O', 'O', null, 'X', null, null, null, 'X'];

    expect(calculateWinner(cells)).toBe('X');
  });

  it('Should return the winner on the second diagonal pattern', () => {
    const cells: CellType = ['O', 'O', 'X', null, 'X', null, 'X', null, null];

    expect(calculateWinner(cells)).toBe('X');
  });
});
