(() => {
  class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      // 평균은 소수 첫째자리에서 반올림
      return Math.round(this.sum() / 2);
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log("평균", s1.avg());

  // 잘못된 사용.
  s1.eng = 99; // 점수 수정하면 안됨
  // 이렇게 하면 반올림 처리가 되지 않음
  console.log("평균", s1.sum() / 2);
})();
