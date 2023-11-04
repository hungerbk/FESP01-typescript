(() => {
  console.log(typeof 10);
  console.log(typeof "heloo");
  console.log(typeof false);
  console.log(typeof new Function());
  console.log(typeof undefined);
  // 아래의 타입은 모두 object. 하지만 어떤 객체인지는 확인할 수 없다
  console.log(typeof null);
  console.log(typeof {});
  console.log(typeof []);
  console.log(typeof new Date());

  function print(msg: string | number) {
    // 타입 가드
    // 이 if문을 지나면 타입을 string으로 지정하게 된 것
    if (typeof msg === "string") {
      console.log(msg.length);
    } else if (typeof msg === "number") {
      // 여기서는 유니온으로 받기 때문에 else만 써도 number로 인식 됨
      console.log(msg.toFixed(2));
    }
  }
  print("hello");
  print(3.141592);
})();
