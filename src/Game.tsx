import { useState, useEffect, useMemo } from 'react';
// types
import type { CellType } from './types/Marks';
// styles
import {
  Container,
  Score,
  ScoreCards,
  PlayerInputContainer,
  PlayerInput,
  SubHeader,
  CurrentTurn,
  RestartBtn,
  Board,
} from './Game.styles';
// helpers
import calculateWinner from './utils/winner';
// components
import PlayerCard from './components/PlayerCard';
import BoardCell from './components/BoardCell';
import Modal from './components/Modal';
// sounds
import Click from './sounds/sounds_click.wav';
import GameOver from './sounds/sounds_game_over.wav';
// icons
import { ReactComponent as EnterKey } from './icons/enter_key.svg';
import { ReactComponent as XMarkIcon } from './icons/x_mark.svg';
import { ReactComponent as OMarkIcon } from './icons/o_mark.svg';
import { ReactComponent as RestartIcon } from './icons/restart.svg';

const TicTacToe = (): JSX.Element => {
  // players
  const [playerOne, setPlayerOne] = useState<string | null>(null);
  const [playerTwo, setPlayerTwo] = useState<string | null>(null);
  // scores
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [ties, setTies] = useState(0);
  // game
  const [cells, setCells] = useState<CellType>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  // sounds
  const clickSound = new Audio(Click);
  const gameOverSound = new Audio(GameOver);

  const currentSymbol = currentPlayer === playerOne ? 'X' : 'O';

  const isBoardFull = (board: CellType): boolean => !board.includes(null);

  const togglePlayer = (curr: string | null): string | null => (curr === playerOne ? playerTwo : playerOne);

  const restartGame = () => {
    setCells(Array(9).fill(null));
    setWinner(null);
  };

  const winnerCheck = useMemo(() => calculateWinner(cells), [cells]);

  useEffect(() => {
    // handle game logic
    if (winnerCheck) {
      // update winner
      gameOverSound.play();
      setWinner(currentPlayer);
      currentPlayer === playerOne
        ? setPlayerOneScore(prevScore => prevScore + 1)
        : setPlayerTwoScore(prevScore => prevScore + 1);
    } else if (isBoardFull(cells)) {
      // increment ties
      gameOverSound.play();
      setTies(prevTies => prevTies + 1);
    } else {
      // toggle player
      setCurrentPlayer(togglePlayer(currentPlayer));
    }
  }, [cells]);

  useEffect(() => {
    if (!!playerOne && !!playerTwo) setCurrentPlayer(playerOne); // player one starts first
  }, [playerOne, playerTwo]);

  return (
    <Container>
      <Score>
        <ScoreCards>
          {playerOne ? (
            <PlayerCard name={playerOne} score={playerOneScore} mark="X" />
          ) : (
            <PlayerInputContainer>
              <PlayerInput
                type="text"
                placeholder="Player One"
                onKeyDown={e => e.key === 'Enter' && setPlayerOne(e.target.value)}
              />
              <EnterKey />
            </PlayerInputContainer>
          )}
          {!(playerOne && playerTwo) ? 'VS' : <PlayerCard name="Ties" score={ties} />}
          {playerTwo ? (
            <PlayerCard name={playerTwo} score={playerTwoScore} mark="O" />
          ) : (
            <PlayerInputContainer>
              <PlayerInput
                type="text"
                placeholder="Player Two"
                onKeyDown={e => e.key === 'Enter' && setPlayerTwo(e.target.value)}
              />
              <EnterKey />
            </PlayerInputContainer>
          )}
        </ScoreCards>
        {!(playerOne && playerTwo) && `Player One goes first`}
      </Score>

      {playerOne && playerTwo && (
        <>
          <SubHeader>
            <CurrentTurn>
              <p data-testid="currentTurn">{`${currentPlayer}'s Turn`}</p>
              {currentPlayer === playerOne ? <XMarkIcon /> : <OMarkIcon />}
            </CurrentTurn>
            <RestartBtn onClick={restartGame}>
              <RestartIcon />
            </RestartBtn>
          </SubHeader>
          {/** board */}
          <Board>
            {cells?.map((cell, i) => (
              <BoardCell
                key={`board-cell-${i}`}
                onClick={() => {
                  // check if suqare already has value
                  if (cells[i] !== null || winner) return;
                  // sounds
                  clickSound.play();
                  // update board cells
                  const updatedCells = [...cells];
                  updatedCells[i] = currentSymbol;
                  setCells(updatedCells);
                }}
                mark={cells[i]}
              />
            ))}
          </Board>
          {/** winner modal */}
          {winner && <Modal onRestart={restartGame}>{`${winner} takes the win!`}</Modal>}
          {/** tie modal */}
          {isBoardFull(cells) && !winner && <Modal onRestart={restartGame}>{`It'\s a tie!`}</Modal>}
        </>
      )}
    </Container>
  );
};

export default TicTacToe;
