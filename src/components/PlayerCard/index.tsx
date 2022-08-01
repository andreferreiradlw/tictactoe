// types
import type { Marks } from '../../types/Marks';
// styles
import { Container, Name, Score } from './PlayerCard.styles';

interface PlayerCardProps {
  name: string;
  score: number;
  mark?: Marks;
}

const PlayerCard = ({ name, score, mark }: PlayerCardProps): JSX.Element => {
  return (
    <Container>
      <Name>
        {name}
        {mark && ` (${mark})`}
      </Name>
      <Score>{score}</Score>
    </Container>
  );
};

export default PlayerCard;
