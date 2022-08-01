// styles
import React from 'react';
import { Container, Content, Text, Button } from './Modal.styles';

interface ModalProps {
  children: React.ReactNode;
  onRestart: () => void;
}

const Modal = ({ children, onRestart }: ModalProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <Text>{children}</Text>
        <Button onClick={onRestart}>New Round</Button>
      </Content>
    </Container>
  );
};

export default Modal;
