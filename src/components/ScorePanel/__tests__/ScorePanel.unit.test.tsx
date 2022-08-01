import { render, screen, fireEvent } from '@testing-library/react';
import ScorePanel from '../index';

const data = {
  playerOne: 'player one',
  playerOneScore: 2,
  onPlayerOneSelect: jest.fn(),
  playerTwo: 'player two',
  playerTwoScore: 5,
  onPlayerTwoSelect: jest.fn(),
  ties: 3,
};

const renderScorePanel = (props: any = {}) => {
  render(<ScorePanel {...data} {...props} />);

  const Container = screen.queryByTestId('scorePanelContainer');
  const PlayerOneCard = screen.queryByTestId('scorePanelPlayerOneCard');
  const PlayerOneInput = screen.queryByTestId('scorePanelPlayerOneInput');
  const PlayerTwoCard = screen.queryByTestId('scorePanelPlayerTwoCard');
  const PlayerTwoInput = screen.queryByTestId('scorePanelPlayerTwoInput');
  const Versus = screen.queryByTestId('scorePanelVersus');
  const Ties = screen.queryByTestId('scorePanelTies');
  const Tip = screen.queryByTestId('scorePanelTip');

  return {
    ...screen,
    Container,
    PlayerOneCard,
    PlayerOneInput,
    PlayerTwoCard,
    PlayerTwoInput,
    Versus,
    Ties,
    Tip,
  };
};

describe('ScorePanel', () => {
  it('Should render the ScorePanel', () => {
    const { Container } = renderScorePanel();

    expect(Container).toBeInTheDocument();
  });

  it('Should not render the player one card if no playerOne is provided', () => {
    const { PlayerOneCard } = renderScorePanel({ playerOne: null });

    expect(PlayerOneCard).not.toBeInTheDocument();
  });

  it('Should render the player one card if playerOne is provided', () => {
    const { PlayerOneCard } = renderScorePanel();

    expect(PlayerOneCard).toBeInTheDocument();
  });

  it('Should not render the player one input if playerOne is provided', () => {
    const { PlayerOneInput } = renderScorePanel();

    expect(PlayerOneInput).not.toBeInTheDocument();
  });

  it('Should render the player one input if no playerOne is provided', () => {
    const { PlayerOneInput } = renderScorePanel({ playerOne: null });

    expect(PlayerOneInput).toBeInTheDocument();
  });

  it('Should render the player one input with the correct placeholder text', () => {
    const { PlayerOneInput } = renderScorePanel({ playerOne: null });

    expect(PlayerOneInput).toHaveAttribute('placeholder', 'Player One');
  });

  it('Should trigger the onPlayerOneSelect function when enter is pressed in player one input', () => {
    const mockPlayerOneSelect = jest.fn();

    const { PlayerOneInput } = renderScorePanel({ playerOne: null, onPlayerOneSelect: mockPlayerOneSelect });

    PlayerOneInput && fireEvent.change(PlayerOneInput, { target: { value: 'player one name' } });
    PlayerOneInput && fireEvent.keyDown(PlayerOneInput, { key: 'Enter' });

    expect(mockPlayerOneSelect).toHaveBeenCalledTimes(1);
    // first arg
    expect(mockPlayerOneSelect.mock.calls[0][0]).toBe('player one name');
  });

  it('Should not render the player two card if no playerTwo is provided', () => {
    const { PlayerTwoCard } = renderScorePanel({ playerTwo: null });

    expect(PlayerTwoCard).not.toBeInTheDocument();
  });

  it('Should render the player two card if playerTwo is provided', () => {
    const { PlayerTwoCard } = renderScorePanel();

    expect(PlayerTwoCard).toBeInTheDocument();
  });

  it('Should not render the player twi input if playerTwo is provided', () => {
    const { PlayerTwoInput } = renderScorePanel();

    expect(PlayerTwoInput).not.toBeInTheDocument();
  });

  it('Should render the player two input if no playerTwo is provided', () => {
    const { PlayerTwoInput } = renderScorePanel({ playerTwo: null });

    expect(PlayerTwoInput).toBeInTheDocument();
  });

  it('Should render the player two input with the correct placeholder text', () => {
    const { PlayerTwoInput } = renderScorePanel({ playerTwo: null });

    expect(PlayerTwoInput).toHaveAttribute('placeholder', 'Player Two');
  });

  it('Should trigger the onPlayerTwoSelect function when enter is pressed in player two input', () => {
    const mockPlayerTwoSelect = jest.fn();

    const { PlayerTwoInput } = renderScorePanel({ playerTwo: null, onPlayerTwoSelect: mockPlayerTwoSelect });

    PlayerTwoInput && fireEvent.change(PlayerTwoInput, { target: { value: 'player two name' } });
    PlayerTwoInput && fireEvent.keyDown(PlayerTwoInput, { key: 'Enter' });

    expect(mockPlayerTwoSelect).toHaveBeenCalledTimes(1);
    // first arg
    expect(mockPlayerTwoSelect.mock.calls[0][0]).toBe('player two name');
  });

  it('Should not render the versus text if playerOne and playerTwo are not provided', () => {
    const { Versus } = renderScorePanel({ playerOne: null, playerTwo: null });

    expect(Versus).toBeInTheDocument();
  });

  it('Should render the versus text if playerOne is not provided', () => {
    const { Versus } = renderScorePanel({ playerOne: null });

    expect(Versus).toBeInTheDocument();
  });

  it('Should render the versus text if playerTwo is not provided', () => {
    const { Versus } = renderScorePanel({ playerTwo: null });

    expect(Versus).toBeInTheDocument();
  });

  it('Should not render the versus text if playerOne and playerTwo are provided', () => {
    const { Versus } = renderScorePanel();

    expect(Versus).not.toBeInTheDocument();
  });

  it('Should not render the ties if playerOne and playerTwo are not provided', () => {
    const { Ties } = renderScorePanel({ playerOne: null, playerTwo: null });

    expect(Ties).not.toBeInTheDocument();
  });

  it('Should not render the ties if playerOne is not provided', () => {
    const { Ties } = renderScorePanel({ playerOne: null });

    expect(Ties).not.toBeInTheDocument();
  });

  it('Should not render the ties if playerTwo is not provided', () => {
    const { Ties } = renderScorePanel({ playerTwo: null });

    expect(Ties).not.toBeInTheDocument();
  });

  it('Should render the ties if playerOne and playerTwo are provided', () => {
    const { Ties } = renderScorePanel();

    expect(Ties).toBeInTheDocument();
  });

  it('Should not render the tip text if playerOne and playerTwo are not provided', () => {
    const { Tip } = renderScorePanel({ playerOne: null, playerTwo: null });

    expect(Tip).toBeInTheDocument();
  });

  it('Should render the tip text if playerOne is not provided', () => {
    const { Tip } = renderScorePanel({ playerOne: null });

    expect(Tip).toBeInTheDocument();
  });

  it('Should render the tip text if playerTwo is not provided', () => {
    const { Tip } = renderScorePanel({ playerTwo: null });

    expect(Tip).toBeInTheDocument();
  });

  it('Should not render the tip text if playerOne and playerTwo are provided', () => {
    const { Tip } = renderScorePanel();

    expect(Tip).not.toBeInTheDocument();
  });
});
