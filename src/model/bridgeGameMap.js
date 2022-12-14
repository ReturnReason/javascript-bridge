const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class BridgeGameMap {
  #gameMap;

  constructor(size) {
    this.#gameMap = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    console.log(this.#gameMap); // 디버깅
  }

  isCorrectBridge(input, userLocation) {
    if (this.#gameMap[userLocation] === input) return true;
    return false;
  }
}

module.exports = BridgeGameMap;
