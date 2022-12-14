const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { GAME_MESSAGE } = require('../constants/gameMessage');

class BridgeGameController {
  start() {
    OutputView.printStart(GAME_MESSAGE.start);
    this.getBridgeSize();
  }

  getBridgeSize() {
    const userInput = (input) => {
      this.makeBridgeMap(input);
    };

    InputView.readBridgeSize(userInput);
  }

  makeBridgeMap() {}
}

module.exports = BridgeGameController;

// 여기서 인풋, 아웃풋뷰 사용하기
