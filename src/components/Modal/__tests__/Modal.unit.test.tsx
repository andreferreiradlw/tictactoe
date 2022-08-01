import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../index';

const data = {
  children: 'text content',
  onRestart: jest.fn(),
};

const renderModal = (props: any = {}) => {
  render(<Modal {...data} {...props} />);

  const Container = screen.queryByTestId('modalContainer');
  const Text = screen.queryByTestId('modalText');
  const Button = screen.queryByTestId('modalButton');

  return {
    ...screen,
    Container,
    Text,
    Button,
  };
};

describe('Modal', () => {
  it('Should render the modal', () => {
    const { Container } = renderModal();

    expect(Container).toBeInTheDocument();
  });

  it('Should render the correct text', () => {
    const { Text } = renderModal();

    expect(Text).toHaveTextContent(data.children);
  });

  it('Should trigger the provided restart function when button is clicked', () => {
    const mockRestart = jest.fn();

    const { Button } = renderModal({ onRestart: mockRestart });

    expect(Button).toBeInTheDocument();

    expect(mockRestart).not.toHaveBeenCalled();

    fireEvent.click(Button);

    expect(mockRestart).toHaveBeenCalledTimes(1);
  });
});
