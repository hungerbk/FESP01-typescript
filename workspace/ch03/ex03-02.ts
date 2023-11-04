(() => {
  interface Todo {
    _id: string;
    title: string;
    content?: string;
  }
  // 옵셔널 속성도 필수로 바꿈
  // 옵셔널 속성인 경우, 스트링을 넣어도 인식을 제대로 못해서 스트링용 함수를 쓰지 못함 => 이걸 필수로 바꾸면 이제 제대로 인식한다
  const todo1: Required<Todo> = {
    _id: "1",
    title: "제목 1",
    content: "내용 1",
  };

  console.log(todo1.content.substring(1, 2));
})();
