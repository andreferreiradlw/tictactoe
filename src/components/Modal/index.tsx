import { ReactNode } from 'react';
// styles
import { Container, Content, Text, Button } from './Modal.styles';

interface ModalProps {
  children: ReactNode;
  onRestart: () => void;
}

const Modal = ({ children, onRestart, ...rest }: ModalProps): JSX.Element => (
  <Container data-testid="modalContainer" {...rest}>
    <Content>
      <Text data-testid="modalText">{children}</Text>
      <Button data-testid="modalButton" onClick={onRestart}>
        New Round
      </Button>
    </Content>
  </Container>
);

export default Modal;
