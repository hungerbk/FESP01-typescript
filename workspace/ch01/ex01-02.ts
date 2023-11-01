/* eslint-disable @typescript-eslint/no-inferrable-types */
(() => {
  // string
  var str: string = "hello";
  // number
  var age: number = 30;
  // blloean
  var done: boolean = true;
  // object
  var todo: object = { title: "TypeScript 공부하기", done: false };
  // Array
  var items: Array<string> = ["JS 공부", "TS 공부"];
  var todoList: string[] = ["JS 공부하기", "TS 공부하기"];
  // tuple
  var users: [string, number] = ["김철수", 30];
  // any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var userName: any = "이일구";
  userName = 129;
  // null
  var nullVal: null = null;
  // undefined
  var undefinedVal: undefined;

  console.log(str, age, done, todo, items, todoList, users, userName, nullVal, undefinedVal);
  console.log(typeof str, typeof age, typeof done, typeof todo, typeof items, typeof todoList, typeof users, typeof userName, typeof nullVal, typeof undefinedVal);
})();
