const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class bridgeGameMap {
  #gameMap;
  constructor(size) {
    this.#gameMap = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    console.log(this.#gameMap);
  }
}

module.exports = bridgeGameMap;
