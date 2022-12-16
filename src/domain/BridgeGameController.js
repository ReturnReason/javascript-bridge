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
        this.bridgeSizeValidate(input);
      } catch (error) {
        console.log(error);
        this.getBridgeSize();
      }
    };

    InputView.readBridgeSize(callback);
  }

  bridgeSizeValidate(input) {
    this.inputValidator.checkEmpty(input);
    this.inputValidator.checkValidSize(input);
  }
}

module.exports = BridgeGameController;
