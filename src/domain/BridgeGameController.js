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
        this.createGameMap(input);
        this.getMoveCommand(input);
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

  createGameMap(input) {
    this.#gameMap = new GameMap(input);
  }

  getMoveCommand() {
    const callback = (input) => {
      try {
        this.validateMoveCommand(input);
      } catch (error) {
        OutputView.printError(error);
        this.getMoveCommand();
      }
    };

    InputView.readMoving(callback);
  }

  validateMoveCommand(input) {
    this.inputValidator.checkEmpty(input);
    this.inputValidator.checkMoveCommand(input);
  }
}

module.exports = BridgeGameController;
