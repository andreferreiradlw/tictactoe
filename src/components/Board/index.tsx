// types
import { Marks, CellType } from '../../types/Marks';
// styles
import { Container } from './Board.styles';
// component
import BoardCell from '../BoardCell';

interface BoardProps {
  boardCells: CellType;
  onCellClick: (cellValue: Marks, cellIndex: number) => void;
}

const Board = ({ boardCells, onCellClick, ...rest }: BoardProps): JSX.Element | null => {
  if (!boardCells?.length) return null;

  return (
    <Container data-testid="boardContainer" {...rest}>
      {boardCells?.map((cell, i) => (
        <BoardCell key={`board-cell-${i}`} onClick={() => onCellClick(cell, i)} mark={cell} data-testid="boardCell" />
      ))}
    </Container>
  );
};

export default Board;
