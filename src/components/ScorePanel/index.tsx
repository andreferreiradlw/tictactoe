// styles
import { Container, ScoreCards, Versus, PlayerInputContainer, PlayerInput, Tip } from './ScorePanel.styles';
// components
import PlayerCard from '../PlayerCard';
// icons
import { ReactComponent as EnterKey } from '../../icons/enter_key.svg';

interface ScorePanelProps {
  playerOne?: string;
  playerOneScore: number;
  onPlayerOneSelect: (name: string) => void;
  playerTwo?: string;
  playerTwoScore: number;
  onPlayerTwoSelect: (name: string) => void;
  ties: number;
}

const ScorePanel = ({
  playerOne,
  playerOneScore,
  onPlayerOneSelect,
  playerTwo,
  playerTwoScore,
  onPlayerTwoSelect,
  ties,
  ...rest
}: ScorePanelProps): JSX.Element => (
  <Container data-testid="scorePanelContainer" {...rest}>
    <ScoreCards>
      {playerOne ? (
        <PlayerCard name={playerOne} score={playerOneScore} mark="X" data-testid="scorePanelPlayerOneCard" />
      ) : (
        <PlayerInputContainer>
          <PlayerInput
            type="text"
            placeholder="Player One"
            onKeyDown={e => e.key === 'Enter' && onPlayerOneSelect(e.target.value)}
            data-testid="scorePanelPlayerOneInput"
          />
          <EnterKey />
        </PlayerInputContainer>
      )}
      {!(playerOne && playerTwo) ? (
        <Versus data-testid="scorePanelVersus">VS</Versus>
      ) : (
        <PlayerCard name="Ties" score={ties} data-testid="scorePanelTies" />
      )}
      {playerTwo ? (
        <PlayerCard name={playerTwo} score={playerTwoScore} mark="O" data-testid="scorePanelPlayerTwoCard" />
      ) : (
        <PlayerInputContainer>
          <PlayerInput
            type="text"
            placeholder="Player Two"
            onKeyDown={e => e.key === 'Enter' && onPlayerTwoSelect(e.target.value)}
            data-testid="scorePanelPlayerTwoInput"
          />
          <EnterKey />
        </PlayerInputContainer>
      )}
    </ScoreCards>
    {!(playerOne && playerTwo) && <Tip data-testid="scorePanelTip">Player One goes first</Tip>}
  </Container>
);

export default ScorePanel;
