(() => {
  var div = document.querySelector("div");
  // non null assertion
  // div!.innerHTML = "hello";
  // 하지만 권장하지 않는다. 없는 경우가 있으니까...

  // div?.innerHTML = "world"; // null인지 아닌지 확인. null이거나 undefined면 뒤의 함수는 실행하지 않음

  console.log(div); // HTNLDivElement | null

  if (div !== null) {
    // 타입 가드
    //HTNLDivElement 추론. 둘중 하나엿는데 하나를 제거했으니 나머지 하나.
    div.innerHTML = "hello";
  }
})();
