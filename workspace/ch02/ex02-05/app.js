var data = { a: 10, b: 20 };

// import MyMath, { sum, substract } from "./math.js";
// export default 하면 {} 없이 가져올 수 있음

// function sum(a, b) {
//   return a + b;
// }

// console.log(1, sum(data));
// console.log(1, substract(data));
// console.log(1, MyMath.divide(data));
// console.log(1, sum(20, 30));

// import { sum as add } from "./math.js";
// console.log(1, add(data));

import * as MyMath from "./math.js";
// export한 것들을 모두 가져옴

console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data)); //undefined
