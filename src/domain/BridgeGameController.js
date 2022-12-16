const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
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
      } catch (error) {
        console.log(error);
      }
    };

    InputView.readBridgeSize(callback);
  }
}

module.exports = BridgeGameController;
