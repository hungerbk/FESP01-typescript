(() => {
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  // 위의 타입을 맵드 타입 예제처럼 | 으로 만들어줌
  // 그게 아니라면 [Prop in 'name' | 'id' | ....] 이렇게 일일히 써야 하는데
  // keyof를 이용하면 자동으로 저렇게 만들어줌
  type ArrayUser = {
    [Prop in keyof User]: string[];
  };

  const kim: User = {
    id: "kim",
    name: "김철수",
    address: "서울시",
    phone: "010...",
  };

  const lee: ArrayUser = {
    id: ["kim"],
    name: ["김철수"],
    address: ["서울시"],
    phone: ["010..."],
  };
})();
