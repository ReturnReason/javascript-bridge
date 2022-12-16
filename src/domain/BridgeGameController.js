const GameMap = require('../model/GameMap');
const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
  #gameMap;

  constructor() {
    this.inputValidator = new InputValidator();
  }

  start() {
    OutputView.printStart();
    this.getBridgeSize();
  }

  getBridgeSize() {
    const callback = (input) => {
      try {
        this.validateBridgeSize(input);
        this.#gameMap = new GameMap(input);
      } catch (error) {
        OutputView.printError(error);
        this.getBridgeSize();
      }
    };

    InputView.readBridgeSize(callback);
  }

  validateBridgeSize(input) {
    this.inputValidator.checkEmpty(input);
    this.inputValidator.checkValidSize(input);
    this.inputValidator.checkIsNumber(input);
  }
}

module.exports = BridgeGameController;
