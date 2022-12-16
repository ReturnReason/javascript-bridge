const { GAME_INFO } = require('../constants/bridgeGame');
const { ERROR_MESSAGE } = require('../constants/messages');

class InputValidator {
  checkValidSize(input) {
    if (input < GAME_INFO.minSize || input > GAME_INFO.maxSize) throw ERROR_MESSAGE.invalidSize;
    return true;
  }

  checkEmpty(input) {
    if (!input || input.includes(' ')) throw ERROR_MESSAGE.emptyInput;
    return true;
  }

  checkIsNumber(input) {
    if (Number.isNaN(Number(input)) || input.includes('.')) throw ERROR_MESSAGE.notANumber;
    return true;
  }
}

module.exports = InputValidator;
