// 객체 타입 선언
(() => {
  // type alias 객체의 타입 선언
  type User = {
    name: string;
    age: number;
  };
  // 객체 생성
  var kim: User = { name: "김철수", age: 30 };

  console.log(kim);

  function printUser(user: User): void {
    // void이기 때문에 함수의 리턴값을 변수에 할당할 수 없음 (리턴값이 없음)
    console.log(user.name, user.age);
  }

  printUser(kim);
})();
