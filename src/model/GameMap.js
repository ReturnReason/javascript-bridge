const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class GameMap {
  #gameMap;

  constructor(size) {
    this.#gameMap = makeBridge(Number(size), generate);
    console.log(this.#gameMap);
  }

  comparePattern(userLocation, moveCommand) {
    return this.#gameMap[userLocation] === moveCommand;
  }

  getGameMap() {
    return this.#gameMap;
  }
}

module.exports = GameMap;
