const OUTPUT_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
});

const INPUT_MESSAGE = Object.freeze({
  bridgeSize: '다리의 길이를 입력해주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  invalidSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  emptyInput: '[ERROR] 미입력 또는 공백은 입력할 수 없습니다.\n',
  notANumber: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.\n',
});

module.exports = {
  OUTPUT_MESSAGE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
};
