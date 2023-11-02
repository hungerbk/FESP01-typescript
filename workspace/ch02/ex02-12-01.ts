(() => {
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  // 유틸리티 타입 => 이러한 유틸리티 타입들이 제네릭으로 정의되어 있음
  // Pick: 지정한 인터페이스나 타입에서 지정한 속성만 선택하여 반환. 여러개 선택은 | 이용
  type TodoRegist = Pick<TodoInfoDetail, "title" | "content">;
  // Pick: 지정한 인터페이스나 타입에서 지정한 속성만 제외하여 반환. 여러개 선택은 | 이용
  type TodoInfo = Omit<TodoInfoDetail, "createdAt" | "updatedAt">;
  type TodoList = Omit<TodoInfo, "content">;

  var todo1: TodoRegist = { title: "할일1", content: "등록에 사용" };
  var todo2: TodoInfo = { _id: 2, title: "할일2", content: "상세 조회에 사용", done: true };
  var todo3: TodoList = { _id: 3, title: "할일3", done: false };

  console.log(todo1, todo2, todo3);
})();
