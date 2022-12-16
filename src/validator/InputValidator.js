const { GAME_INFO } = require('../constants/bridgeGame');
const { ERROR_MESSAGE } = require('../constants/messages');

class InputValidator {
  checkValidSize(input) {
    if (input < GAME_INFO.minSize || input > GAME_INFO.maxSize) throw ERROR_MESSAGE.invalidSize;
    return true;
  }
}

module.exports = InputValidator;
