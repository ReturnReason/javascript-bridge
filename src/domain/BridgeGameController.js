const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { GAME_MESSAGE } = require('../constants/gameMessage');
const bridgeGameMap = require('../model/BridgeGameMap');
const InputValidator = require('../validator/InputValidator');
const User = require('../model/User');
const BridgeGameMapPainter = require('./BridgeGameMapPainter');

class BridgeGameController {
  #bridgeMap;
  #bridgeGamePainter;
  #user;

  constructor() {
    this.inputValidator = new InputValidator();
    this.#bridgeGamePainter = new BridgeGameMapPainter();
    this.#user = new User();
  }

  start() {
    OutputView.printStart(GAME_MESSAGE.start);
    this.getBridgeSize();
  }

  getBridgeSize() {
    const userInput = (input) => {
      try {
        this.inputValidator.checkValidBridgeSize(input);
        this.makeBridgeMap(input);
        this.getMoveCommand();
      } catch (errorType) {
        OutputView.printError(errorType);
        this.getBridgeSize();
      }
    };

    InputView.readBridgeSize(userInput);
  }

  makeBridgeMap(size) {
    this.#bridgeMap = new bridgeGameMap(size);
  }

  getMoveCommand() {
    const userInput = (input) => {
      try {
        const isCorrect = this.#bridgeMap.isCorrectBridge(input, this.#user.getLocation());
        const progressGameMap = this.#bridgeGamePainter.getBridgeMapResult(
          isCorrect,
          input,
          this.#user.getLocation()
        );

        OutputView.printMap(progressGameMap);
        if (isCorrect) {
          this.#user.increaseLocation();
          this.getMoveCommand();
        } else {
          // 올바르지 않은 다리 선택시 리트라이로
        }
      } catch (errorType) {
        OutputView.printError(errorType);
      }
    };

    InputView.readMoving(userInput);
  }
}

module.exports = BridgeGameController;

// 여기서 인풋, 아웃풋뷰 사용하기
