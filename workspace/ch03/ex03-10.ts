(() => {
  function add10(num) {
    return num + 10;
    // return num + "10";
  }

  function add20(num = 10) {
    return num + 20;
  }

  const result1 = add10("100"); // any
  const result2 = add20(); // number

  // 리턴할 수 있는 타입들을 추론해서 유니온 타입으로 추론. 포괄할 수 있으면 포괄해서 간략하게 표현한다
  function fn(x: number) {
    let y: any; // 이 경우에는 any로 추론
    // y = 100; 위에서 타입을 any로 지정을 안하고 값을 할당하면 이 값을 기준으로 리턴 타입이 결정됨 'x는 10'| number
    if (x === 10) {
      return "x는 10";
    } else if (x === 20) {
      return 20;
    } else if (x === 30) {
      return 30; //이 경우에는 'x는 10'| 20 | 30
      // 디테일한 경우의 수를 추론해냄. 값 자체가 타입이 될 수 있음
    } else {
      // return x; // 이 경우에는 'x는 10'| number (20도 30도 모두 number니까 안에 포함시키는 것)
      return y;
    }
  }

  const result3 = fn(10);
  const result4 = fn(20);
  const result5 = fn(30);

  interface A {
    a: string;
    b: "hello"; // 기본 데이터의 값도 타입으로 사용할 수 있다
    c: "world";
  }

  const a = {
    a: "bye",
    b: "hello",
    c: "world",
  };
})();
