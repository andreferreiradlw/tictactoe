import { render, screen } from '@testing-library/react';
import PlayerCard from '../index';

const data = {
  name: 'player_name',
  score: 4,
  mark: 'X',
};

const renderPlayerCard = (props: any = {}) => {
  render(<PlayerCard {...data} {...props} />);

  const Container = screen.queryByTestId('playerCardContainer');
  const Name = screen.queryByTestId('playerCardName');
  const Score = screen.queryByTestId('playerCardScore');
  const Mark = screen.queryByTestId('playerCardMark');

  return {
    ...screen,
    Container,
    Name,
    Score,
    Mark,
  };
};

describe('PlayerCard', () => {
  it('Should not render if name is not provided', () => {
    const { Container } = renderPlayerCard({
      name: null,
    });

    expect(Container).not.toBeInTheDocument();
  });

  it('Should not render if score is not provided', () => {
    const { Container } = renderPlayerCard({
      score: null,
    });

    expect(Container).not.toBeInTheDocument();
  });

  it('Should render if name and score are provided', () => {
    const { Container } = renderPlayerCard();

    expect(Container).toBeInTheDocument();
  });

  it('Should render the provided name', () => {
    const { Name } = renderPlayerCard({ mark: null });

    expect(Name).toHaveTextContent(data.name);
  });

  it('Should not render the mark if not provided', () => {
    const { Mark } = renderPlayerCard({ mark: null });

    expect(Mark).not.toBeInTheDocument();
  });

  it('Should render the correct mark when provided', () => {
    const { Mark } = renderPlayerCard();

    expect(Mark).toHaveTextContent(`(${data.mark})`);
  });

  it('Should render the provided score', () => {
    const { Score } = renderPlayerCard();

    expect(Score).toHaveTextContent(data.score.toString());
  });
});
