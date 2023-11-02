// ex02-02.ts 복사
(() => {
  interface IHighSchool {
    // 외부에서 접근할 수 없는 값은 인터페이스에 쓰면 안 됨
    avg(): number;
  }

  class HighSchool implements IHighSchool {
    // 1. 멤버변수 타입을 정의
    // 2. 생성자 메서드의 매개변수와 리턴타입을 정의
    private kor: number;
    private eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    private sum(): number {
      return this.kor + this.eng;
    }
    avg(): number {
      // 평균은 소수 첫째자리에서 반올림
      return Math.round(this.sum() / 2);
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log("평균", s1.avg());

  // 잘못된 사용.
  // s1.eng = 99; // 점수 수정하면 안됨
  // 이렇게 하면 반올림 처리가 되지 않음
  // console.log("평균", s1.sum() / 2);
})();
