// 클래스의 타입 지정에 인터페이스 사용
(() => {
  interface Score {
    kor: number;
    eng: number;
    sum(): number; // 매개변수도 여기에서 지정
    avg(): number;
  }

  class Highschool implements Score {
    // 타입을 미리 정의해주는 과정이 필요함
    kor: number;
    eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return this.sum() / 2;
    }
  }

  const kim = new Highschool(100, 90);
  console.log(kim.sum(), kim.avg());
})();
