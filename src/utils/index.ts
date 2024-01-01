export const generateTestKey = () => {
  return new Array(4)
    .fill(null)

    .map(() => {
      /**
       * 숫자와 영문으로 이루어진 문자(36진법)로 변환하고,
       * 소숫점으로 표기되는 0 과 . 두 문자를 제거한 문자열을 생성한다.
       *
       * @see {36진법} https://ko.wikipedia.org/wiki/%EC%82%BC%EC%8B%AD%EC%9C%A1%EC%A7%84%EB%B2%95
       **/
      return Math.random().toString(36).slice(2);
    })
    .join("");
};
