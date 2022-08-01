import { render, screen, fireEvent } from '@testing-library/react';
import Cell from '../index';

const data = {
  mark: 'X',
};

const renderCell = (props: any = {}) => {
  render(<Cell {...data} {...props} />);

  const Container = screen.queryByTestId('cellContainer');
  const XMark = screen.queryByTestId('cellXMark');
  const OMark = screen.queryByTestId('cellOMark');

  return {
    screen,
    Container,
    XMark,
    OMark,
  };
};

describe('Cell', () => {
  it('Should render the board cell', () => {
    const { Container } = renderCell();

    expect(Container).toBeInTheDocument();
  });

  it('Should not render a mark icon if null', () => {
    const { Container } = renderCell({ mark: null });

    expect(Container).toBeEmptyDOMElement();
  });

  it('Should render the correct icon when mark is X', () => {
    const { XMark } = renderCell();

    expect(XMark).toBeInTheDocument();
  });

  it('Should render the correct icon when mark is X and hovered', () => {
    const { screen } = renderCell();

    fireEvent.mouseOver(screen.getByTestId('cellContainer'));

    expect(screen.queryByTestId('cellXMarkOutline')).toBeInTheDocument();
  });

  it('Should render the correct icon when mark is O', () => {
    const { OMark } = renderCell({ mark: 'O' });

    expect(OMark).toBeInTheDocument();
  });

  it('Should render the correct icon when mark is O and hovered', () => {
    const { screen } = renderCell({ mark: 'O' });

    fireEvent.mouseOver(screen.getByTestId('cellContainer'));

    expect(screen.queryByTestId('cellOMarkOutline')).toBeInTheDocument();
  });
});
