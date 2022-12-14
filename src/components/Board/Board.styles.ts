import styled from 'styled-components';

const Container = styled.section`
  aspect-ratio: 1 / 1;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  height: min(90vw, 40em);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-gap: 2.5em;
  }
`;

export { Container };
