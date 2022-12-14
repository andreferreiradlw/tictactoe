import { useState, useEffect, useMemo } from 'react';
// types
import type { Marks, CellType } from '../../types/Marks';
// styles
import { Container } from './Game.styles';
// helpers
import { isBoardFull, togglePlayer, calculateWinner } from '../../utils';
// components
import ScorePanel from '../ScorePanel';
import Subheader from '../Subheader';
import Board from '../Board';
import Modal from '../Modal';
// sounds
import Click from '../../sounds/sounds_click.wav';
import GameOver from '../../sounds/sounds_game_over.wav';

const TicTacToe = (): JSX.Element => {
  // players
  const [playerOne, setPlayerOne] = useState<string>();
  const [playerTwo, setPlayerTwo] = useState<string>();
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
  // memo
  const winnerCheck = useMemo(() => calculateWinner(cells), [cells]);

  const restartGame = () => {
    setCells(Array(9).fill(null));
    setWinner(null);
  };

  const onCellClick = (cellValue: Marks, cellIndex: number) => {
    // check if suqare already has value
    if (cellValue !== null || winner) return;
    // sounds
    clickSound.play();
    // update board cells
    const updatedCells = [...cells];
    updatedCells[cellIndex] = currentPlayer === playerOne ? 'X' : 'O';
    setCells(updatedCells);
  };

  useEffect(() => {
    if (!!playerOne && !!playerTwo) setCurrentPlayer(playerOne); // player one starts first
  }, [playerOne, playerTwo]);

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
    } else if (currentPlayer && playerOne && playerTwo) {
      // toggle player
      setCurrentPlayer(togglePlayer(currentPlayer, playerOne, playerTwo));
    }
  }, [winnerCheck, cells]);

  return (
    <Container data-testid="gameContainer">
      <ScorePanel
        playerOne={playerOne}
        playerOneScore={playerOneScore}
        onPlayerOneSelect={name => setPlayerOne(name)}
        playerTwo={playerTwo}
        playerTwoScore={playerTwoScore}
        onPlayerTwoSelect={name => setPlayerTwo(name)}
        ties={ties}
        data-testid="gameScorePanel"
      />

      {playerOne && playerTwo && (
        <>
          {/** subheader */}
          <Subheader
            playerName={currentPlayer}
            isPlayerOne={currentPlayer === playerOne}
            onRestart={restartGame}
            data-testid="gameSubheader"
          />
          {/** board */}
          <Board boardCells={cells} onCellClick={onCellClick} data-testid="gameBoard" />
          {/** winner modal */}
          {winner && <Modal onRestart={restartGame} data-testid="gameWinModal">{`${winner} takes the win!`}</Modal>}
          {/** tie modal */}
          {isBoardFull(cells) && !winner && (
            <Modal onRestart={restartGame} data-testid="gameTieModal">{`It'\s a tie!`}</Modal>
          )}
        </>
      )}
    </Container>
  );
};

export default TicTacToe;
