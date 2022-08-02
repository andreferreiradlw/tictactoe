import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: black;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 1em;
  justify-content: space-between;
  padding: 0.7em;
  text-align: center;
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  gap: 1em;
  justify-content: center;

  svg {
    width: 1.5em;
  }
`;

const Name = styled.p`
  font-size: 1em;

  @media screen and (min-width: 768px) {
    font-size: 1.2em;
  }
`;

const Score = styled.p`
  font-family: 'Square Peg', cursive;
  font-size: 2rem;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 2.4em;
  }
`;

export { Container, Details, Name, Score };
