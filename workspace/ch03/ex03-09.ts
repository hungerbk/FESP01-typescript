(() => {
  // 기본 데이터 타입은 추론
  var name = "kim";
  var age = 30;
  var address: string; // 선언을 먼저 할 경우는 가능한 타입을 지정하도록 한다. 그렇지 않으면 any로 추론됨
  address = "김철수";
  // address = 300;

  interface Todo {
    title: string;
    content: string;
  }

  // 객체는 타입 별칭이나 인터페이스를 지정해야 안전하게 사용 가능
  var todo1: Todo = {
    title: "제목1",
    content: "내용",
  };

  var todo2 = {
    tttt: "제목",
    conntet: "내용",
  };
})();
