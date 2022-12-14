class User {
  #location;
  #tryCount;

  constructor() {
    this.#tryCount = 1;
    this.#location = 0;
  }

  getLocation() {
    return this.#location;
  }

  getTryCount() {
    return this.#tryCount;
  }

  increaseLocation() {
    this.#location += 1;
  }

  increaseTryCount() {
    this.#tryCount += 1;
  }
}

module.exports = User;
