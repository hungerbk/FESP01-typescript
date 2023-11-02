// ex02-01.js 복사
(() => {
  class HighSchool {
    // #을 붙여서 쓸 때는 선언을 먼저 해야한다
    #kor = 0;
    #eng = 0;
    constructor(kor, eng) {
      this.#kor = kor;
      this.#eng = eng;
    }
    #sum() {
      return this.#kor + this.#eng;
    }
    avg() {
      // 평균은 소수 첫째자리에서 반올림
      return Math.round(this.#sum() / 2);
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log("평균", s1.avg());

  // 잘못된 사용.
  // s1.eng = 99;
  // s1["#eng"] = 99; // 다른 변수가 추가됨!
  console.dir(s1);
  // 이렇게 하면 반올림 처리가 되지 않음
  // console.log("평균", s1.sum() / 2);
})();
