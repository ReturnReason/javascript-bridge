const { GAME_COMMAND, GAME_PATTERN } = require('../constants/bridgeGame');

const REPEAT_COUNT = 3;

class BridgeGameMapPainter {
  #upperBridge = [];
  #lowerBridge = [];

  getBridgeMapResult(isCorrect, upOrDown, location) {
    const ox = this.drawOX(isCorrect);

    if (upOrDown === GAME_COMMAND.up) {
      this.appendVerticalLine(location);
      this.drawUpperBridge(ox);
    }
    if (upOrDown === GAME_COMMAND.down) {
      this.appendVerticalLine(location);
      this.drawLowerBridge(ox);
    }

    return this.drawBridge();
  }

  drawBridge() {
    return `[${this.#upperBridge.join('')}]\n[${this.#lowerBridge.join('')}]`;
  }

  drawOX(isCorrect) {
    if (isCorrect) {
      return GAME_PATTERN.o;
    }
    return GAME_PATTERN.x;
  }

  drawUpperBridge(ox) {
    this.#upperBridge.push(` ${ox} `);
    this.#lowerBridge.push(' '.repeat(REPEAT_COUNT));
  }

  drawLowerBridge(ox) {
    this.#upperBridge.push(' '.repeat(REPEAT_COUNT));
    this.#lowerBridge.push(` ${ox} `);
  }

  appendVerticalLine(location) {
    if (location !== 0) {
      this.#upperBridge.push(`${GAME_PATTERN.vertical}`);
      this.#lowerBridge.push(`${GAME_PATTERN.vertical}`);
    }
  }
}

module.exports = BridgeGameMapPainter;
