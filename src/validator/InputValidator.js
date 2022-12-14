const { GAME_INFO } = require('../constants/bridgeGame');
const { ERROR_MESSAGE } = require('../constants/errorMessage');

class InputValidator {
  checkEmptyInput(input) {}

  checkValidInput(input) {}

  checkValidBridgeSize(input) {
    if (input >= GAME_INFO.minSize && input <= GAME_INFO.maxSize) {
      return true;
    }

    throw ERROR_MESSAGE.outOfRange;
  }
}

module.exports = InputValidator;
