import { render, screen, within, fireEvent } from '@testing-library/react';
import Board from '../index';

const data = {
  boardCells: ['X', null, 'O', null, 'X', 'O', null, 'X', null],
  onCellClick: jest.fn(),
};

const renderBoard = (props: any = {}) => {
  render(<Board {...data} {...props} />);

  const Container = screen.queryByTestId('boardContainer');
  const BoardCells = Container && within(Container).queryAllByTestId('boardCell');

  return {
    ...screen,
    Container,
    BoardCells,
  };
};

describe('Board', () => {
  it('Should not render the board when cells are not provided', () => {
    const { Container } = renderBoard({ boardCells: null });

    expect(Container).not.toBeInTheDocument();
  });

  it('Should not render the board when cells is an empty array', () => {
    const { Container } = renderBoard({ boardCells: [] });

    expect(Container).not.toBeInTheDocument();
  });

  it('Should render the board when cells are provided', () => {
    const { Container } = renderBoard();

    expect(Container).toBeInTheDocument();
  });

  it('Should render the correct number of board cells', () => {
    const { BoardCells } = renderBoard();

    expect(BoardCells?.length).toEqual(data.boardCells.length);
  });

  it('Should trigger the onClick function when board cells are clicked', () => {
    const mockCellClick = jest.fn();

    const { BoardCells } = renderBoard({ onCellClick: mockCellClick });

    BoardCells?.map((cell, i) => {
      fireEvent.click(cell);
    });

    expect(mockCellClick).toHaveBeenCalledTimes(data.boardCells.length);
  });

  it('Should return the correct arguments to the onCellClick function', () => {
    const mockCellClick = jest.fn();

    const { BoardCells } = renderBoard({ onCellClick: mockCellClick });

    BoardCells && fireEvent.click(BoardCells[0]);

    expect(mockCellClick).toHaveBeenCalledTimes(1);
    // args
    expect(mockCellClick.mock.calls[0].length).toBe(2);
    // first arg
    expect(mockCellClick.mock.calls[0][0]).toBe(data.boardCells[0]);
    // second arg
    expect(mockCellClick.mock.calls[0][1]).toBe(0);
  });
});
