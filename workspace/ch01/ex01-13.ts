// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    age?: number; // 에러. 이 항목도 인덱스 시그니처에 포함되기 때문에 에러 발생. 같은 타입을 쓸 때만 쓸 수 있다 => 정 여러개를 써야 하면 유니온으로..
    // 옵셔널로 하면 이 값은 undefined가 올 수 있기 때문에 undefined를 추가해줘야 함
    // phone?: string;
    // address?: string;
    // hobby?: string;
    // 필수 요건이 아닌 것들을 묶어서 설정할 수 있음
    [etc: string]: string | number | undefined; // [속성 이름에 대한 타입(string(객체), number(배열)만 가능)]: 값 타입
  }

  var kim: User = {
    name: "김철수",
    email: "kim@gmail.com",
    age: 30,
    phone: "010...",
    address: "서울시 ...",
    hobby: "독서",
  };

  var lee: User = {
    name: "이영희",
    email: "lee@gmail.com",
    age: 35,
  };

  console.log(kim, lee);
})();
