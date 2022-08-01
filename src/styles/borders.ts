import { css } from 'styled-components';

const borderStyle = css`
  background-color: white;
  border: 1px solid rgb(31, 54, 65);
  border-radius: 15px;
  color: black;

  &:before {
    background-color: rgb(31, 54, 65);
    border-radius: 15px;
    content: '';
    filter: brightness(50%);
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    transform: translateY(7px);
    width: 100%;
    z-index: -1;
  }
`;

export { borderStyle };
