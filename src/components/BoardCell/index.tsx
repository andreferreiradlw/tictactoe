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
  mark: Marks;
}

const BoardCell = ({
  mark,
  children,
  ...rest
}: BoardCellProps & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  //   const renderMark = () => {
  //     if (!mark) return null;
  //     else if (mark === 'X' && isHovering) return <XMarkIconOutline />;
  //     else if (mark === 'X') return <XMarkIcon />;
  //     else if (mark === 'O' && isHovering) return <OMarkIconOutline />;
  //     else return <OMarkIcon />;
  //   };

  const renderMark = () => {
    if (mark === 'X') return isHovering ? <XMarkIconOutline /> : <XMarkIcon />;
    if (mark === 'O') return isHovering ? <OMarkIconOutline /> : <OMarkIcon />;
  };

  return (
    <Cell onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} {...rest}>
      {renderMark()}
    </Cell>
  );
};

export default BoardCell;
