const { GAME_INFO } = require('../constants/bridgeGame');

const ERORR_TYPE = {
  range: 'outOfRange',
  empty: 'emptyInput',
  number: 'invalidNumber',
  move: 'invalidMoveCommand',
  retry: 'invalidRetryCommand',
};

class InputValidator {
  checkEmptyInput(input) {}

  checkValidInput(input) {}

  checkValidBridgeSize(input) {
    if (input >= GAME_INFO.minSize && input <= GAME_INFO.maxSize) {
      return true;
    }

    throw ERORR_TYPE.range;
  }
}

module.exports = InputValidator;
