(() => {
  // var a = 10 as string; XX

  var a = 10 as any as string; //하지만 형변환을 하는 것은 아님
  // console.log(a.toUpperCase()); // 타스에서는 에러가 안나지만 실제로는 에러. 숫자니까

  function getNum(num) {
    return num;
  }

  // 리턴 타입이 추론되면 타입 단언을 사용할 필요 없음
  // 리턴 타입이 여러개로 추론되거나 any일 경우 명시적으로 타입을 지정

  const returnNum = getNum(3.141592) as number;
  console.log(returnNum.toFixed(2)); // 위에 타입 단언을 하지 않으면 함수가 any를 리턴하고 있기 때문에 . 을 찍어도 힌트가 나오지 않음. 타입 단언으로 해결

  const str = getNum("hello") as string;
  console.log(str.toLocaleUpperCase());
})();
