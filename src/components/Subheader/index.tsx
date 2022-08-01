// styles
import { Container, CurrentTurn, RestartBtn } from './Subheader.styles';
// icons
import { ReactComponent as RestartIcon } from '../../icons/restart.svg';
import { ReactComponent as XMarkIcon } from '../../icons/x_mark.svg';
import { ReactComponent as OMarkIcon } from '../../icons/o_mark.svg';

interface Subheader {
  playerName: string | null;
  isPlayerOne: boolean;
  onRestart: () => void;
}

const Subheader = ({ playerName, isPlayerOne, onRestart, ...rest }: Subheader): JSX.Element | null => {
  if (!playerName) return null;

  return (
    <Container data-testid="subheaderContainer" {...rest}>
      <CurrentTurn>
        <p data-testid="subheaderPlayer">{`${playerName}'s Turn`}</p>
        {isPlayerOne ? <XMarkIcon data-testid="subheaderXIcon" /> : <OMarkIcon data-testid="subheaderOIcon" />}
      </CurrentTurn>
      <RestartBtn onClick={onRestart} data-testid="subheaderButton">
        <RestartIcon />
      </RestartBtn>
    </Container>
  );
};

export default Subheader;
