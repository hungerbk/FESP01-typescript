(() => {
  // 같은 기능을 수행하지만, 타입이 다른 경우
  // 실행할 때 타입을 받음
  // T는 그냥 관례적으로 쓰는 거임. 아무거나 써도 됨
  function echo<T>(msg: T): T {
    return msg;
  }

  // 함수를 실행할 때 <> 안에 타입을 넘겨줌
  const result1: string = echo<string>("hello");
  console.log(result1.substring(1, 3));

  const result2: number = echo<number>(3.141592);
  console.log(result2.toFixed(2));
})();
