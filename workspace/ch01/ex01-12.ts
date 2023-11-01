(() => {
  interface Todo {
    readonly _id: number; // 한번 저장되면 변하지 않는 값
    title: string;
    content: string;
    done?: boolean; // 선택요소
  }

  // 함수의 시그니처를 정의하는 데에도 사용. 익명함수로 해야 함
  interface Toggle {
    (param: Todo): void; // 매개변수의 이름은 일치할 필요 없음. 타입만 맞으면 됨
  }

  var todo1: Todo = { _id: 1, title: "할일 1", content: "인터페이스 사용", done: false };
  var todo2: Todo = { _id: 2, title: "할일 2", content: "인터페이스 사용" };

  var toggleFn: Toggle = function (todo: Todo): void {
    todo.done = !todo.done;
  };

  // todo1._id = 3;
  todo1.title = "집에 가자";

  toggleFn(todo1);
  console.log(todo1);
  console.log(todo1, todo2);
})();
