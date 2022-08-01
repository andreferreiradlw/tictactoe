import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../index';

const renderGame = (props: any = {}) => {
  render(<Game {...props} />);

  const Container = screen.queryByTestId('gameContainer');

  return {
    ...screen,
    Container,
  };
};

describe('Game', () => {
  it('Should render the component', () => {
    const { Container } = renderGame();

    expect(Container).toBeInTheDocument();
  });
});
