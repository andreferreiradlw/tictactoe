const togglePlayer = (current: string, playerOne: string, playerTwo: string): string =>
  current && (current === playerOne ? playerTwo : playerOne);

export default togglePlayer;
