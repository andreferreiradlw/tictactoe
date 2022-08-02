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
  const XIcon = screen.queryByTestId('playerCardXIcon');
  const OIcon = screen.queryByTestId('playerCardOIcon');

  return {
    ...screen,
    Container,
    Name,
    Score,
    XIcon,
    OIcon,
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

  it('Should not render the X icon if mark is null', () => {
    const { XIcon } = renderPlayerCard({ mark: null });

    expect(XIcon).not.toBeInTheDocument();
  });

  it('Should render the X icon if mark is X', () => {
    const { XIcon } = renderPlayerCard();

    expect(XIcon).toBeInTheDocument();
  });

  it('Should not render the O icon if mark is X', () => {
    const { OIcon } = renderPlayerCard();

    expect(OIcon).not.toBeInTheDocument();
  });

  it('Should not render the O icon if mark is null', () => {
    const { OIcon } = renderPlayerCard({ mark: null });

    expect(OIcon).not.toBeInTheDocument();
  });

  it('Should render the O icon if mark is O', () => {
    const { OIcon } = renderPlayerCard({ mark: 'O' });

    expect(OIcon).toBeInTheDocument();
  });

  it('Should not render the X icon if mark is O', () => {
    const { XIcon } = renderPlayerCard({ mark: 'O' });

    expect(XIcon).not.toBeInTheDocument();
  });

  it('Should render the provided score', () => {
    const { Score } = renderPlayerCard();

    expect(Score).toHaveTextContent(data.score.toString());
  });
});
