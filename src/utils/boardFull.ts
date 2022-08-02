import type { CellType } from '../types/Marks';

const isBoardFull = (board: CellType): boolean => !board.includes(null);

export default isBoardFull;
