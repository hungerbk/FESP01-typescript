// ex01-19.ts 복사
(() => {
  type ReadOnly = {
    // readonly JS: string;
    // readonly TS: string;
    // readonly REACT: string;
    readonly [lang: string]: string;
  };

  const ClassName: ReadOnly = {
    JS: "JavaScript",
    TS: "Typescript",
    REACT: "React",
  };

  function getSchedule(subject: string): string | undefined {
    if (ClassName.JS == subject) {
      return `JavaScript 수업은 4일 교육 + 2일 프로젝트입니다.`;
    } else if (ClassName.TS === subject) {
      return `TypeScript 수업은 3일 교육 + 1일 프로젝트입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule, tsSchedule);
})();
