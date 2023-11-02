(() => {
  function getSchedule(subject: string): string | undefined {
    if ("JavaScript" == subject) {
      return `JavaScript 수업은 4일 교육 + 2일 프로젝트입니다.`;
    } else if ("TypeScript" === subject) {
      // 하드코딩하면 문제가 발생할 가능성이 높다. S, s
      return `TypeScript 수업은 3일 교육 + 1일 프로젝트입니다.`;
    }
  }

  const jsSchedule = getSchedule("JavaScript");
  const tsSchedule = getSchedule("Typescript"); //undefined

  console.log(jsSchedule, tsSchedule);
})();
