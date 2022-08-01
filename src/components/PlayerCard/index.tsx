// types
import type { Marks } from '../../types/Marks';
// styles
import { Container, Name, Score } from './PlayerCard.styles';

interface PlayerCardProps {
  name: string;
  score: number;
  mark?: Marks;
}

const PlayerCard = ({ name, score, mark }: PlayerCardProps): JSX.Element | null => {
  if (!name || score === undefined) return null;

  return (
    <Container data-testid="playerCardContainer">
      <Name data-testid="playerCardName">
        {name}
        {mark && <span data-testid="playerCardMark">{`(${mark})`}</span>}
      </Name>
      <Score data-testid="playerCardScore">{score}</Score>
    </Container>
  );
};

export default PlayerCard;
