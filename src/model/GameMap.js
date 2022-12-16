const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class GameMap {
  #gameMap;

  constructor(size) {
    this.#gameMap = makeBridge(Number(size), generate);
    console.log(this.#gameMap);
  }

  getGameMap() {
    return this.#gameMap;
  }
}

module.exports = GameMap;
