// Mapped type
// 제네릭 타입과 맵드 타입을 잘 이용하면 유틸리티 타입을 만들 수 있다
(() => {
  type UserField = "id" | "name" | "address" | "phone";

  // userfield 안에 있는 값으로 새로운 타입 생성. (모드 스트링으로)
  type User = {
    [Field in UserField]: string;
  };

  const kim: User = {
    id: "kim",
    name: "김철수",
    address: "서울시",
    phone: "0100000",
  };

  console.log(kim);
})();
