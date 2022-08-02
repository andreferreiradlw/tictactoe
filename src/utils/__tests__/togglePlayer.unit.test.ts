import togglePlayer from '../togglePlayer';

const playerOne = 'one';
const playerTwo = 'two';

describe('Utils | togglePlayer', () => {
  it('Should return undefined if current player is not provided', () => {
    expect(togglePlayer(undefined, playerOne, playerTwo)).toBe(undefined);
  });

  it('Should return undefined if player one is not provided', () => {
    expect(togglePlayer(playerOne, undefined, playerTwo)).toBe(undefined);
  });

  it('Should return undefined if player two is not provided', () => {
    expect(togglePlayer(playerOne, playerOne, undefined)).toBe(undefined);
  });

  it('Should return player two if current player is one', () => {
    expect(togglePlayer(playerOne, playerOne, playerTwo)).toBe(playerTwo);
  });

  it('Should return player one if current player is two', () => {
    expect(togglePlayer(playerTwo, playerOne, playerTwo)).toBe(playerOne);
  });
});
