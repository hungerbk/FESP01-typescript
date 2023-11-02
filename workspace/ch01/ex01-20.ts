// ex01-19.ts 복사
(() => {
  // 상수 데이터들의 집합을 정의
  enum ClassName {
    JS = 100,
    TS = 111,
    REACT = 222,
  }
  function getSchedule(subject: ClassName): string | undefined {
    if (ClassName.JS == subject) {
      return `JavaScript 수업은 4일 교육 + 2일 프로젝트입니다.`;
    } else if (ClassName.TS === subject) {
      return `TypeScript 수업은 3일 교육 + 1일 프로젝트입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule, tsSchedule);

  console.log(ClassName);
})();
