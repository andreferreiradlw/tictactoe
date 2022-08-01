import styled from 'styled-components';

const Cell = styled.button`
  align-items: center;
  background-color: black;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  svg {
    height: auto;
    width: 45%;
  }
`;

export { Cell };
