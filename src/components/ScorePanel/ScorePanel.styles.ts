import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 2rem;
  padding: 1em 1.4em;
  text-align: center;
  text-transform: uppercase;
`;

const ScoreCards = styled.div`
  align-items: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
`;

const Versus = styled.p`
  font-family: 'Square Peg', cursive;
  font-size: 5em;
  font-weight: bold;
`;

const PlayerInputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1em;
  justify-content: center;

  svg {
    flex-shrink: 0;
    height: auto;
    width: 2em;
  }
`;

const PlayerInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5em;
`;

const Tip = styled.p`
  font-size: 1.2em;
`;

export { Container, ScoreCards, Versus, PlayerInputContainer, PlayerInput, Tip };
