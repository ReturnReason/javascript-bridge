const GameMap = require('../model/GameMap');
const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeGame = require('./BridgeGame');
const MapPainter = require('./MapPainter');

class BridgeGameController {
  #gameMap;
  #bridgeGame;
  #mapPainter;

  constructor() {
    this.inputValidator = new InputValidator();
    this.#bridgeGame = new BridgeGame();
    this.#mapPainter = new MapPainter();
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
        this.paintGameMap(input, this.isCorrectPath(input));
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

  paintGameMap(moveCommand, isCorrect) {
    const userMap = this.#mapPainter.drawOX(moveCommand, isCorrect);
    OutputView.printMap(userMap);
  }

  isCorrectPath(input) {
    return this.#gameMap.comparePattern(this.#bridgeGame.getLocation(), input);
  }
}

module.exports = BridgeGameController;
