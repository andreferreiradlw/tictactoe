import styled from 'styled-components';

const Container = styled.div`
  -webkit-box-pack: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0px;
  position: absolute;
  text-align: center;
  top: 0px;
  width: 100%;
  z-index: 2;
`;

const Content = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2em 0px;
  text-transform: uppercase;
  z-index: 3;
`;

const Text = styled.p`
  font-size: 2em;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  padding: 0.7em 1em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  width: fit-content;

  &:hover {
    background: rgb(242, 177, 55);
    color: black;
  }
`;

export { Container, Content, Text, Button };
