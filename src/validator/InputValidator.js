const { GAME_INFO, GAME_COMMAND } = require('../constants/bridgeGame');
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

  checkMoveCommand(input) {
    const regExp = /^U{1}$|^D{1}$/;
    if (!regExp.test(input)) {
      throw ERROR_MESSAGE.invalidMoveCommand;
    }

    return true;
  }
}

module.exports = InputValidator;
