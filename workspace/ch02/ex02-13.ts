(() => {
  // 우리가 이렇게 제약을 해도 js가 되면 제약은 다 사라짐 => console.log(echo(new Date())); 이거도 출력됨
  // 컴파일 옵션에서 에러났을 때 컴파일 안 되게 할 수 있음. 우리는 지금 기본 설정이라 나오는 것..!
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo("hello"));
  console.log(echo(100));
  // console.log(echo(new Date())); // Date도 객체이기 때문에 Date로 명시하거나 object로 extends해도 됨
})();
