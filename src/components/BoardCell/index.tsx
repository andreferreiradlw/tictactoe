import { ButtonHTMLAttributes, useState } from 'react';
// types
import type { Marks } from '../../types/Marks';
// styles
import { Cell } from './BoardCell.styles';
// icons
import { ReactComponent as XMarkIcon } from '../../icons/x_mark.svg';
import { ReactComponent as OMarkIcon } from '../../icons/o_mark.svg';
import { ReactComponent as XMarkIconOutline } from '../../icons/x_mark_outline.svg';
import { ReactComponent as OMarkIconOutline } from '../../icons/o_mark_outline.svg';

interface BoardCellProps {
  mark?: Marks;
}

const BoardCell = ({ mark, ...rest }: BoardCellProps & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  const renderMark = (): JSX.Element | null => {
    if (mark === 'X')
      return isHovering ? <XMarkIconOutline data-testid="cellXMarkOutline" /> : <XMarkIcon data-testid="cellXMark" />;
    if (mark === 'O')
      return isHovering ? <OMarkIconOutline data-testid="cellOMarkOutline" /> : <OMarkIcon data-testid="cellOMark" />;
    return null;
  };

  return (
    <Cell
      data-testid="cellContainer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...rest}
    >
      {renderMark()}
    </Cell>
  );
};

export default BoardCell;
