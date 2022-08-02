import styled from 'styled-components';

const Container = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 2em;
  padding: 1em 0;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 700px) {
    align-items: center;
  }
`;

const ScoreCards = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;

  @media screen and (min-width: 700px) {
    display: grid;
    align-items: center;
    gap: 2.5em;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
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
