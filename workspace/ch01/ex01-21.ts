// ex01-20.ts 복사
(() => {
  // 상수 데이터들의 집합을 정의
  // JS에서는 ClassName이라는 객체를 생성
  enum ClassName {
    JS = "JavsScript",
    TS = "TypeScript",
    REACT = "Reacts",
  }
  function getSchedule(subject: ClassName): string | undefined {
    if (ClassName.JS == subject) {
      return `${ClassName.JS} 수업은 4일 교육 + 2일 프로젝트입니다.`;
    } else if (ClassName.TS === subject) {
      return `${ClassName.TS} 수업은 3일 교육 + 1일 프로젝트입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule, tsSchedule);

  console.log(ClassName);
})();
