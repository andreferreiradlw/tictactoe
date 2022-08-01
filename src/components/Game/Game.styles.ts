import styled from 'styled-components';

const Container = styled.main`
  max-width: 46rem;
`;

const Score = styled.section`
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
  font-size: 4em;
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

const SubHeader = styled.div`
  align-items: center;
  display: flex;
  gap: 2em;
  justify-content: space-between;
  margin: 2em 0;
  width: 100%;
`;

const CurrentTurn = styled.section`
  align-items: center;
  background-color: black;
  border-radius: 5px;
  color: white;
  display: flex;
  font-weight: bold;
  gap: 1em;
  justify-content: center;
  letter-spacing: 1px;
  padding: 0.6em 1em;
  text-transform: uppercase;

  svg {
    height: auto;
    width: 2em;
  }
`;

const RestartBtn = styled.button`
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 0.7em;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  svg {
    width: 2em;

    path {
      fill: white;
    }
  }

  &:hover {
    background: rgb(242, 177, 55);

    svg path {
      fill: black;
    }
  }
`;

export { Container, Score, ScoreCards, Versus, PlayerInputContainer, PlayerInput, SubHeader, CurrentTurn, RestartBtn };
