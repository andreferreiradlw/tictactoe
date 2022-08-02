// types
import type { Marks } from '../../types/Marks';
// styles
import { Container, Details, Name, Score } from './PlayerCard.styles';
// icons
import { ReactComponent as XMarkIcon } from '../../icons/x_mark.svg';
import { ReactComponent as OMarkIcon } from '../../icons/o_mark.svg';

interface PlayerCardProps {
  name: string;
  score: number;
  mark?: Marks;
}

const PlayerCard = ({ name, score, mark, ...rest }: PlayerCardProps): JSX.Element | null => {
  if (!name || score === null || typeof score === 'undefined') return null;

  return (
    <Container data-testid="playerCardContainer" {...rest}>
      <Details>
        <Name data-testid="playerCardName">{name}</Name>
        {mark &&
          (mark === 'X' ? <XMarkIcon data-testid="playerCardXIcon" /> : <OMarkIcon data-testid="playerCardOIcon" />)}
      </Details>

      <Score data-testid="playerCardScore">{score}</Score>
    </Container>
  );
};

export default PlayerCard;
