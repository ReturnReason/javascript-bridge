const GAME_MESSAGE = {
  start: '다리 건너기 게임을 시작합니다.\n',
};

const INPUT_MESSAGE = {
  bridgeLength: '다리의 길이를 입력해주세요.\n',
  moveCommand: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retryCommand: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const OUTPUT_MESSAGE = {
  result(uesrGameMap) {
    return `최종 게임 결과\n${uesrGameMap}`;
  },
  gameClear(isSuccess) {
    return `게임 성공 여부: ${isSuccess ? '성공' : '실패'}\n`;
  },
  tryCount(count) {
    return `총 시도한 횟수: ${count}`;
  },
};

module.exports = {
  GAME_MESSAGE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
};
