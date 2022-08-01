import { render, screen, fireEvent } from '@testing-library/react';
import Subheader from '../index';

const data = {
  playerName: 'Andre',
  isPlayerOne: true,
  onRestart: jest.fn(),
};

const renderSubheader = (props: any = {}) => {
  render(<Subheader {...data} {...props} />);

  const Container = screen.queryByTestId('subheaderContainer');
  const Player = screen.queryByTestId('subheaderPlayer');
  const XIcon = screen.queryByTestId('subheaderXIcon');
  const OIcon = screen.queryByTestId('subheaderOIcon');
  const Button = screen.queryByTestId('subheaderButton');

  return {
    ...screen,
    Container,
    Player,
    XIcon,
    OIcon,
    Button,
  };
};

describe('Subheader', () => {
  it('Should render the subheader', () => {
    const { Container } = renderSubheader();

    expect(Container).toBeInTheDocument();
  });

  it('Should not render the subheader if playerName is not provided', () => {
    const { Container } = renderSubheader({ playerName: null });

    expect(Container).not.toBeInTheDocument();
  });

  it('Should render the correct player name', () => {
    const { Player } = renderSubheader();

    expect(Player).toBeInTheDocument();
    expect(Player).toHaveTextContent(`${data.playerName}'s Turn`);
  });

  it('Should render the X icon when isPlayerOne is true', () => {
    const { XIcon } = renderSubheader();

    expect(XIcon).toBeInTheDocument();
  });

  it('Should not render the O icon when isPlayerOne is true', () => {
    const { OIcon } = renderSubheader();

    expect(OIcon).not.toBeInTheDocument();
  });

  it('Should render the O icon when isPlayerOne is false', () => {
    const { OIcon } = renderSubheader({ isPlayerOne: false });

    expect(OIcon).toBeInTheDocument();
  });

  it('Should render the X icon when isPlayerOne is false', () => {
    const { XIcon } = renderSubheader({ isPlayerOne: false });

    expect(XIcon).not.toBeInTheDocument();
  });

  it('Should trigger the provided restart function when button is clicked', () => {
    const mockRestart = jest.fn();

    const { Button } = renderSubheader({ onRestart: mockRestart });

    expect(Button).toBeInTheDocument();

    expect(mockRestart).not.toHaveBeenCalled();

    fireEvent.click(Button);

    expect(mockRestart).toHaveBeenCalledTimes(1);
  });
});
