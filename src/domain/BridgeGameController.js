const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { GAME_MESSAGE } = require('../constants/gameMessage');
const bridgeGameMap = require('../model/bridgeGameMap');
const InputValidator = require('../validator/InputValidator');

class BridgeGameController {
  #bridgeMap;

  constructor() {
    this.inputValidator = new InputValidator();
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
}

module.exports = BridgeGameController;

// 여기서 인풋, 아웃풋뷰 사용하기
