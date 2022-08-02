import { render, screen, fireEvent, within } from '@testing-library/react';
import Game from '../index';

const renderGame = (props: any = {}) => {
  render(<Game {...props} />);

  const Container = screen.queryByTestId('gameContainer');
  const ScorePanel = screen.queryByTestId('gameScorePanel');
  const Subheader = screen.queryByTestId('gameSubheader');
  const Board = screen.queryByTestId('gameBoard');

  return {
    ...screen,
    Container,
    ScorePanel,
    Subheader,
    Board,
  };
};

describe('Game', () => {
  it('Should render the component', () => {
    const { Container } = renderGame();

    expect(Container).toBeInTheDocument();
  });

  it('Should render the ScorePanel when game starts', () => {
    const { ScorePanel } = renderGame();

    expect(ScorePanel).toBeInTheDocument();
  });

  it('Should not render the Subheader when game starts', () => {
    const { Subheader } = renderGame();

    expect(Subheader).not.toBeInTheDocument();
  });

  it('Should not render the Board when game starts', () => {
    const { Board } = renderGame();

    expect(Board).not.toBeInTheDocument();
  });
});

describe('Game | Second stage', () => {
  beforeEach(() => {
    const { ScorePanel } = renderGame();

    if (ScorePanel) {
      const PlayerOneInput = within(ScorePanel).queryByTestId('scorePanelPlayerOneInput');
      const PlayerTwoInput = within(ScorePanel).queryByTestId('scorePanelPlayerTwoInput');

      PlayerOneInput && fireEvent.change(PlayerOneInput, { target: { value: 'playerOne' } });
      PlayerOneInput && fireEvent.keyDown(PlayerOneInput, { key: 'Enter' });
      PlayerTwoInput && fireEvent.change(PlayerTwoInput, { target: { value: 'playerTwo' } });
      PlayerTwoInput && fireEvent.keyDown(PlayerTwoInput, { key: 'Enter' });
    }
  });

  it('Should render the subheader', () => {
    expect(screen.queryByTestId('gameSubheader')).toBeInTheDocument();
  });

  it('Should render the board', () => {
    expect(screen.queryByTestId('gameBoard')).toBeInTheDocument();
  });

  it('Should not render the win modal', () => {
    expect(screen.queryByTestId('gameWinModal')).not.toBeInTheDocument();
  });

  it('Should not render the tie modal', () => {
    expect(screen.queryByTestId('gameTieModal')).not.toBeInTheDocument();
  });

  it('Should render the board with nine cells', () => {
    const Board = screen.queryByTestId('gameBoard');
    let Cells = null;

    if (Board) {
      Cells = within(Board).getAllByRole('button');
    }

    expect(Cells?.length).toBe(9);
  });

  it('Should render the win modal with the correct text if there is a winner', () => {
    const Board = screen.queryByTestId('gameBoard');
    let Cells = null;

    if (Board) {
      Cells = within(Board).getAllByRole('button');
    }

    if (Cells) {
      fireEvent.click(Cells[0]);
      fireEvent.click(Cells[3]);
      fireEvent.click(Cells[1]);
      fireEvent.click(Cells[4]);
      fireEvent.click(Cells[2]);
    }

    const WinModal = screen.queryByTestId('gameWinModal');

    expect(WinModal).toBeInTheDocument();
    expect(WinModal).toHaveTextContent('playerOne takes the win!');
  });

  it('Should render the tie modal when there is a draw', () => {
    const Board = screen.queryByTestId('gameBoard');
    let Cells = null;

    if (Board) {
      Cells = within(Board).getAllByRole('button');
    }

    if (Cells) {
      fireEvent.click(Cells[0]);
      fireEvent.click(Cells[3]);
      fireEvent.click(Cells[1]);
      fireEvent.click(Cells[4]);
      fireEvent.click(Cells[5]);
      fireEvent.click(Cells[2]);
      fireEvent.click(Cells[6]);
      fireEvent.click(Cells[7]);
      fireEvent.click(Cells[8]);
    }

    const TieModal = screen.queryByTestId('gameTieModal');

    expect(TieModal).toBeInTheDocument();
    expect(TieModal).toHaveTextContent(`It'\s a tie!`);
  });
});
