const GAME_INFO = Object.freeze({
  minSize: 3,
  maxSize: 20,
  o: 'O',
  x: 'X',
  verticalBar: '|',
});

const GAME_COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
});

module.exports = { GAME_INFO, GAME_COMMAND };
