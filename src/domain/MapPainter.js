const { GAME_INFO, GAME_COMMAND } = require('../constants/bridgeGame');

const REPEAT_COUNT = 3;

class MapPainter {
  #upperBridge;
  #lowerBridge;

  constructor() {
    this.#lowerBridge = [];
    this.#upperBridge = [];
  }

  drawOX(moveCommand, isCorrect) {
    if (moveCommand === GAME_COMMAND.up) {
      this.drawUpperBridge(isCorrect);
    }
    if (moveCommand === GAME_COMMAND.down) {
      this.drawLowerBridge(isCorrect);
    }
    return `[${this.#upperBridge}]\n[${this.#lowerBridge}]`;
  }

  drawUpperBridge(isCorrect) {
    const pettern = isCorrect ? GAME_INFO.o : GAME_INFO.x;
    this.#upperBridge.push(` ${pettern} `);
    this.#lowerBridge.push(' '.repeat(REPEAT_COUNT));
  }

  drawLowerBridge(isCorrect) {
    const pettern = isCorrect ? GAME_INFO.o : GAME_INFO.x;
    this.#lowerBridge.push(` ${pettern} `);
    this.#upperBridge.push(' '.repeat(REPEAT_COUNT));
  }
}

module.exports = MapPainter;
